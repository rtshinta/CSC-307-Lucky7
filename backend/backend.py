from flask import Flask, render_template, redirect, url_for, send_file
from flask import request
from flask import jsonify
from flask_cors import CORS
import random
import string
from db_mongodb import User


app = Flask(__name__)
CORS(app)
#@app.route('/')
#def welcome():
#    return 'Welcome'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/', methods=['POST'])
def upload_photo():
    uploaded_photo = request.files['file']
    if uploaded_photo.filename != '':
        uploaded_photo.save(uploaded_photo.filename)
        
    return redirect(url_for('index'))

@app.route('/get_image')
def get_image():
    # your code here
    return send_file('testphoto.jpeg', mimetype='image/gif')




#@app.route('/event/<id>', methods=['GET', 'POST'])
#def get_or_post_event(id):




#@app.route('/users', methods=['GET', 'POST'])
