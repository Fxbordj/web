#!/usr/bin/env python3
"""
SANIPRO Backend API Testing Suite
Tests all backend endpoints for the SANIPRO cleaning service website
"""

import requests
import json
from datetime import datetime, timezone
import sys
import os

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except FileNotFoundError:
        pass
    return "http://localhost:8001"

BASE_URL = get_backend_url()
API_URL = f"{BASE_URL}/api"

print(f"Testing SANIPRO Backend API at: {API_URL}")
print("=" * 60)

# Test results tracking
test_results = {
    "passed": 0,
    "failed": 0,
    "errors": []
}

def log_test(test_name, success, message=""):
    """Log test results"""
    if success:
        print(f"✅ {test_name}")
        test_results["passed"] += 1
    else:
        print(f"❌ {test_name}: {message}")
        test_results["failed"] += 1
        test_results["errors"].append(f"{test_name}: {message}")

def test_api_root():
    """Test API root endpoint"""
    try:
        response = requests.get(f"{API_URL}/")
        if response.status_code == 200:
            data = response.json()
            if "SANIPRO" in data.get("message", ""):
                log_test("API Root Endpoint", True)
                return True
            else:
                log_test("API Root Endpoint", False, f"Unexpected message: {data}")
                return False
        else:
            log_test("API Root Endpoint", False, f"Status {response.status_code}")
            return False
    except Exception as e:
        log_test("API Root Endpoint", False, f"Connection error: {str(e)}")
        return False

def test_create_quote():
    """Test POST /api/quotes endpoint"""
    print("\n--- Testing Quote Creation ---")
    
    # Test with valid data
    valid_quote_data = {
        "name": "Marie Dubois",
        "email": "marie.dubois@email.com",
        "phone": "514-555-0123",
        "service_type": "Nettoyage résidentiel",
        "address": "123 Rue Saint-Denis, Montréal, QC H2X 3K8",
        "preferred_date": "2024-02-15T10:00:00Z",
        "details": "Nettoyage complet d'un appartement 3½ pièces"
    }
    
    try:
        response = requests.post(f"{API_URL}/quotes", json=valid_quote_data)
        if response.status_code == 201:
            data = response.json()
            # Verify response structure
            required_fields = ["id", "name", "email", "phone", "service_type", "address", "status", "created_at"]
            missing_fields = [field for field in required_fields if field not in data]
            
            if not missing_fields:
                if data["status"] == "pending" and data["name"] == valid_quote_data["name"]:
                    log_test("POST /api/quotes - Valid Data", True)
                    return data["id"]  # Return ID for further testing
                else:
                    log_test("POST /api/quotes - Valid Data", False, f"Invalid status or name in response")
                    return None
            else:
                log_test("POST /api/quotes - Valid Data", False, f"Missing fields: {missing_fields}")
                return None
        else:
            log_test("POST /api/quotes - Valid Data", False, f"Status {response.status_code}: {response.text}")
            return None
    except Exception as e:
        log_test("POST /api/quotes - Valid Data", False, f"Error: {str(e)}")
        return None

def test_quote_email_validation():
    """Test email validation in quote creation"""
    invalid_quote_data = {
        "name": "Jean Tremblay",
        "email": "invalid-email",  # Invalid email
        "phone": "514-555-0124",
        "service_type": "Nettoyage commercial",
        "address": "456 Boulevard René-Lévesque, Montréal, QC",
        "details": "Bureau de 500m²"
    }
    
    try:
        response = requests.post(f"{API_URL}/quotes", json=invalid_quote_data)
        if response.status_code == 422:  # Validation error expected
            log_test("POST /api/quotes - Email Validation", True)
        else:
            log_test("POST /api/quotes - Email Validation", False, f"Expected 422, got {response.status_code}")
    except Exception as e:
        log_test("POST /api/quotes - Email Validation", False, f"Error: {str(e)}")

def test_get_quotes():
    """Test GET /api/quotes endpoint"""
    print("\n--- Testing Quote Retrieval ---")
    
    try:
        response = requests.get(f"{API_URL}/quotes")
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                log_test("GET /api/quotes - List Format", True)
                
                # Test pagination
                response_limit = requests.get(f"{API_URL}/quotes?limit=1")
                if response_limit.status_code == 200:
                    limited_data = response_limit.json()
                    if len(limited_data) <= 1:
                        log_test("GET /api/quotes - Pagination (limit)", True)
                    else:
                        log_test("GET /api/quotes - Pagination (limit)", False, f"Expected ≤1 items, got {len(limited_data)}")
                else:
                    log_test("GET /api/quotes - Pagination (limit)", False, f"Status {response_limit.status_code}")
                
                # Test status filtering
                response_filter = requests.get(f"{API_URL}/quotes?status=pending")
                if response_filter.status_code == 200:
                    log_test("GET /api/quotes - Status Filtering", True)
                else:
                    log_test("GET /api/quotes - Status Filtering", False, f"Status {response_filter.status_code}")
                    
            else:
                log_test("GET /api/quotes - List Format", False, "Response is not a list")
        else:
            log_test("GET /api/quotes - Basic Request", False, f"Status {response.status_code}")
    except Exception as e:
        log_test("GET /api/quotes - Basic Request", False, f"Error: {str(e)}")

def test_create_contact():
    """Test POST /api/contacts endpoint"""
    print("\n--- Testing Contact Creation ---")
    
    # Test with valid data
    valid_contact_data = {
        "name": "Pierre Lafleur",
        "email": "pierre.lafleur@email.com",
        "phone": "438-555-0125",
        "message": "Bonjour, j'aimerais obtenir une soumission pour le nettoyage de mes bureaux situés au centre-ville de Montréal. Nous avons environ 1000m² d'espace de bureau."
    }
    
    try:
        response = requests.post(f"{API_URL}/contacts", json=valid_contact_data)
        if response.status_code == 201:
            data = response.json()
            # Verify response structure
            required_fields = ["id", "name", "email", "message", "status", "created_at"]
            missing_fields = [field for field in required_fields if field not in data]
            
            if not missing_fields:
                if data["status"] == "new" and data["name"] == valid_contact_data["name"]:
                    log_test("POST /api/contacts - Valid Data", True)
                    return data["id"]  # Return ID for further testing
                else:
                    log_test("POST /api/contacts - Valid Data", False, f"Invalid status or name in response")
                    return None
            else:
                log_test("POST /api/contacts - Valid Data", False, f"Missing fields: {missing_fields}")
                return None
        else:
            log_test("POST /api/contacts - Valid Data", False, f"Status {response.status_code}: {response.text}")
            return None
    except Exception as e:
        log_test("POST /api/contacts - Valid Data", False, f"Error: {str(e)}")
        return None

def test_contact_email_validation():
    """Test email validation in contact creation"""
    invalid_contact_data = {
        "name": "Sophie Martin",
        "email": "not-an-email",  # Invalid email
        "message": "Message de test"
    }
    
    try:
        response = requests.post(f"{API_URL}/contacts", json=invalid_contact_data)
        if response.status_code == 422:  # Validation error expected
            log_test("POST /api/contacts - Email Validation", True)
        else:
            log_test("POST /api/contacts - Email Validation", False, f"Expected 422, got {response.status_code}")
    except Exception as e:
        log_test("POST /api/contacts - Email Validation", False, f"Error: {str(e)}")

def test_get_contacts():
    """Test GET /api/contacts endpoint"""
    print("\n--- Testing Contact Retrieval ---")
    
    try:
        response = requests.get(f"{API_URL}/contacts")
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                log_test("GET /api/contacts - List Format", True)
                
                # Test pagination
                response_limit = requests.get(f"{API_URL}/contacts?limit=1")
                if response_limit.status_code == 200:
                    limited_data = response_limit.json()
                    if len(limited_data) <= 1:
                        log_test("GET /api/contacts - Pagination (limit)", True)
                    else:
                        log_test("GET /api/contacts - Pagination (limit)", False, f"Expected ≤1 items, got {len(limited_data)}")
                else:
                    log_test("GET /api/contacts - Pagination (limit)", False, f"Status {response_limit.status_code}")
                
                # Test status filtering
                response_filter = requests.get(f"{API_URL}/contacts?status=new")
                if response_filter.status_code == 200:
                    log_test("GET /api/contacts - Status Filtering", True)
                else:
                    log_test("GET /api/contacts - Status Filtering", False, f"Status {response_filter.status_code}")
                    
            else:
                log_test("GET /api/contacts - List Format", False, "Response is not a list")
        else:
            log_test("GET /api/contacts - Basic Request", False, f"Status {response.status_code}")
    except Exception as e:
        log_test("GET /api/contacts - Basic Request", False, f"Error: {str(e)}")

def test_optional_phone_field():
    """Test that phone field is optional in contacts"""
    contact_without_phone = {
        "name": "Lucie Gagnon",
        "email": "lucie.gagnon@email.com",
        "message": "Question sur vos services de nettoyage écologique."
    }
    
    try:
        response = requests.post(f"{API_URL}/contacts", json=contact_without_phone)
        if response.status_code == 201:
            data = response.json()
            if "phone" in data and (data["phone"] == "" or data["phone"] is None):
                log_test("POST /api/contacts - Optional Phone Field", True)
            else:
                log_test("POST /api/contacts - Optional Phone Field", False, f"Phone field handling issue: {data.get('phone')}")
        else:
            log_test("POST /api/contacts - Optional Phone Field", False, f"Status {response.status_code}")
    except Exception as e:
        log_test("POST /api/contacts - Optional Phone Field", False, f"Error: {str(e)}")

def run_all_tests():
    """Run all backend API tests"""
    print("🧪 SANIPRO Backend API Test Suite")
    print("=" * 60)
    
    # Test API connectivity first
    if not test_api_root():
        print("\n❌ API is not accessible. Stopping tests.")
        return False
    
    # Test quote endpoints
    print("\n📋 TESTING QUOTE ENDPOINTS")
    quote_id = test_create_quote()
    test_quote_email_validation()
    test_get_quotes()
    
    # Test contact endpoints  
    print("\n📞 TESTING CONTACT ENDPOINTS")
    contact_id = test_create_contact()
    test_contact_email_validation()
    test_get_contacts()
    test_optional_phone_field()
    
    # Print summary
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    print(f"✅ Passed: {test_results['passed']}")
    print(f"❌ Failed: {test_results['failed']}")
    
    if test_results["errors"]:
        print("\n🚨 FAILED TESTS:")
        for error in test_results["errors"]:
            print(f"  • {error}")
    
    success_rate = (test_results["passed"] / (test_results["passed"] + test_results["failed"])) * 100
    print(f"\n📈 Success Rate: {success_rate:.1f}%")
    
    return test_results["failed"] == 0

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)