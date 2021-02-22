import pytest
import sample_backend
import requests
from sample_backend import app

url = 'http://127.0.0.1:5000/'

def test_hello():
    response = app.test_client().get('/')
    assert response.status_code == 200
    assert response.data == b'Hello, World! And Travis'

def test_getUsers():
    response = app.test_client().get('/users')
    assert response.status_code == 200

def test_postUsers():
    response = app.test_client().post('/users', json={
      "date": "5/5/5555", 
      "description": "dfba", 
      "event": "gdsf", 
      "location": "dfgb", 
      "photo": "https://iso.500px.com/wp-content/uploads/2016/02/stock-photo-133673159-1500x1000.jpg", 
      "rating": "5", 
      "tags": "onefish, twofish, redfish, bluefish"
    })
    assert response.status_code == 201