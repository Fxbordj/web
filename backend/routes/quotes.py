from fastapi import APIRouter, HTTPException, Query, Depends
from typing import List, Optional
from models import Quote, QuoteCreate
from motor.motor_asyncio import AsyncIOMotorDatabase
import logging

logger = logging.getLogger(__name__)

router = APIRouter()

# This will be injected from the main server
def get_database():
    from server import db
    return db

def get_quotes_collection(db: AsyncIOMotorDatabase):
    return db.quotes

@router.post("/quotes", response_model=Quote, status_code=201)
async def create_quote(quote_input: QuoteCreate, db: AsyncIOMotorDatabase = Depends(get_database)):
    """Create a new quote submission"""
    try:
        quote_dict = quote_input.model_dump()
        quote_obj = Quote(**quote_dict)
        
        await get_quotes_collection(db).insert_one(quote_obj.model_dump())
        logger.info(f"Quote created: {quote_obj.id}")
        
        return quote_obj
    except Exception as e:
        logger.error(f"Error creating quote: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to create quote")

@router.get("/quotes", response_model=List[Quote])
async def get_quotes(
    status: Optional[str] = Query(None),
    limit: int = Query(100, ge=1, le=1000),
    skip: int = Query(0, ge=0),
    db: AsyncIOMotorDatabase = Depends(get_database)
):
    """Get all quotes with optional filtering"""
    try:
        query = {}
        if status:
            query["status"] = status
        
        quotes = await get_quotes_collection(db).find(query).skip(skip).limit(limit).to_list(limit)
        return [Quote(**quote) for quote in quotes]
    except Exception as e:
        logger.error(f"Error fetching quotes: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch quotes")

@router.get("/quotes/{quote_id}", response_model=Quote)
async def get_quote(quote_id: str, db: AsyncIOMotorDatabase = Depends(get_database)):
    """Get a specific quote by ID"""
    try:
        quote = await get_quotes_collection(db).find_one({"id": quote_id})
        if not quote:
            raise HTTPException(status_code=404, detail="Quote not found")
        return Quote(**quote)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching quote {quote_id}: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch quote")
