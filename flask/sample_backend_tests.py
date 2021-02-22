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