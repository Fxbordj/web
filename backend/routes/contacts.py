from fastapi import APIRouter, HTTPException, Query, Depends
from typing import List, Optional
from models import Contact, ContactCreate
from motor.motor_asyncio import AsyncIOMotorDatabase
import logging

logger = logging.getLogger(__name__)

router = APIRouter()

# This will be injected from the main server
def get_database():
    from server import db
    return db

def get_contacts_collection(db: AsyncIOMotorDatabase):
    return db.contacts

@router.post("/contacts", response_model=Contact, status_code=201)
async def create_contact(contact_input: ContactCreate, db: AsyncIOMotorDatabase = Depends(get_database)):
    """Create a new contact message"""
    try:
        contact_dict = contact_input.model_dump()
        contact_obj = Contact(**contact_dict)
        
        await get_contacts_collection(db).insert_one(contact_obj.model_dump())
        logger.info(f"Contact created: {contact_obj.id}")
        
        return contact_obj
    except Exception as e:
        logger.error(f"Error creating contact: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to create contact")

@router.get("/contacts", response_model=List[Contact])
async def get_contacts(
    status: Optional[str] = Query(None),
    limit: int = Query(100, ge=1, le=1000),
    skip: int = Query(0, ge=0),
    db: AsyncIOMotorDatabase = Depends(get_database)
):
    """Get all contacts with optional filtering"""
    try:
        query = {}
        if status:
            query["status"] = status
        
        contacts = await get_contacts_collection(db).find(query).skip(skip).limit(limit).to_list(limit)
        return [Contact(**contact) for contact in contacts]
    except Exception as e:
        logger.error(f"Error fetching contacts: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch contacts")

@router.get("/contacts/{contact_id}", response_model=Contact)
async def get_contact(contact_id: str, db: AsyncIOMotorDatabase = Depends(get_database)):
    """Get a specific contact by ID"""
    try:
        contact = await get_contacts_collection(db).find_one({"id": contact_id})
        if not contact:
            raise HTTPException(status_code=404, detail="Contact not found")
        return Contact(**contact)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching contact {contact_id}: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch contact")
