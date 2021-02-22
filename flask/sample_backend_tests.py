import pytest
import sample_backend
import requests

url = 'http://127.0.0.1:5000/'

# example tests
def test_find_users_by_name_success():  
    expected = [
        {
            'id' : 'abc123',            
            'name': 'Mac',
            'job': 'Bouncer',
        },
        {
            'id' : 'ppp222',            
            'name': 'Mac',
            'job': 'Professor',
        },        
    ]
    assert sample_backend.find_users_by_name("Mac") == expected

def test_find_users_by_name_fail():  
    expected = [] 
    assert sample_backend.find_users_by_name("Jeff") == expected

def test_homepage():
    r = requests.get(url)
    assert r.text == 'Hello, World! And Travis'
    assert r.status_code == 200

def test_getUsers():
    r = requests.get(url + 'users')
    assert r.status_code == 200