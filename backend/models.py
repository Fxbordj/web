from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime
import uuid

# Quote Models
class QuoteCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    service_type: str
    address: str
    preferred_date: Optional[datetime] = None
    details: Optional[str] = ""

class Quote(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    service_type: str
    address: str
    preferred_date: Optional[datetime] = None
    details: Optional[str] = ""
    status: str = "pending"
    created_at: datetime = Field(default_factory=datetime.utcnow)

# Contact Models
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = ""
    message: str

class Contact(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = ""
    message: str
    status: str = "new"
    created_at: datetime = Field(default_factory=datetime.utcnow)
