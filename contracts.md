# Contrats API - SANIPRO

## Données Mock à remplacer

### mock.js
- `services`: Liste de 7 services de nettoyage (données statiques)
- `testimonials`: 3 témoignages clients
- `whyChooseUs`: 4 raisons de choisir SANIPRO
- `mockSubmissions`: Soumissions de devis (à remplacer par MongoDB)
- `mockContacts`: Messages de contact (à remplacer par MongoDB)

## Backend à implémenter

### 1. Models MongoDB

#### Quote (Soumission)
```python
{
  "_id": ObjectId,
  "name": str (requis),
  "email": str (requis),
  "phone": str (requis),
  "service_type": str (requis),
  "address": str (requis),
  "preferred_date": datetime (optionnel),
  "details": str (optionnel),
  "status": str (default: "pending"), # pending, contacted, completed
  "created_at": datetime
}
```

#### Contact
```python
{
  "_id": ObjectId,
  "name": str (requis),
  "email": str (requis),
  "phone": str (optionnel),
  "message": str (requis),
  "status": str (default: "new"), # new, read, responded
  "created_at": datetime
}
```

### 2. API Endpoints

#### POST /api/quotes
- **Body**: `{ name, email, phone, service_type, address, preferred_date?, details? }`
- **Response**: `{ id, name, email, phone, service_type, address, preferred_date, details, status, created_at }`
- **Status**: 201 Created

#### GET /api/quotes
- **Query params**: `status?`, `limit?`, `skip?`
- **Response**: `[{ id, name, email, phone, service_type, address, preferred_date, details, status, created_at }]`
- **Status**: 200 OK

#### GET /api/quotes/{id}
- **Response**: `{ id, name, email, phone, service_type, address, preferred_date, details, status, created_at }`
- **Status**: 200 OK / 404 Not Found

#### POST /api/contacts
- **Body**: `{ name, email, phone?, message }`
- **Response**: `{ id, name, email, phone, message, status, created_at }`
- **Status**: 201 Created

#### GET /api/contacts
- **Query params**: `status?`, `limit?`, `skip?`
- **Response**: `[{ id, name, email, phone, message, status, created_at }]`
- **Status**: 200 OK

## Frontend Integration

### 1. Quote.jsx
- **Remplacer**: `mockSubmissions.push(submission)` par appel API POST `/api/quotes`
- **Ajouter**: Gestion des erreurs avec toast.error()
- **Importer**: axios depuis le frontend

### 2. Contact.jsx
- **Remplacer**: `mockContacts.push(contact)` par appel API POST `/api/contacts`
- **Ajouter**: Gestion des erreurs avec toast.error()
- **Importer**: axios depuis le frontend

### 3. Créer utils/api.js
```javascript
const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const createQuote = async (data) => {
  const response = await axios.post(`${API_URL}/quotes`, data);
  return response.data;
};

export const createContact = async (data) => {
  const response = await axios.post(`${API_URL}/contacts`, data);
  return response.data;
};
```

## Notes d'implémentation
- Utiliser motor pour MongoDB (async)
- Validation des emails avec pydantic
- Les dates doivent être au format ISO 8601
- Tous les endpoints doivent avoir le préfixe `/api`
- Gestion des erreurs avec FastAPI HTTPException
- Cors déjà configuré dans server.py
