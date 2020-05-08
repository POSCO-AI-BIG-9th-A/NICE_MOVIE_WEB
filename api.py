from flask import Flask, jsonify, request
from flask_cors import CORS
import dbMgr

app = Flask(__name__)
CORS(app)


@app.route('/login', methods=['GET', 'POST'])
def login_user():
    print(request.data.decode('utf-8'))
    return jsonify(success=True)


@app.route('/register')
def register_user(data):
    affected = None
    print(data)
    # try:
    #     conn = dbMgr.getConnection()
    #     cursor = conn.cursor()
    #     sql = "INSERT INTO user_info("
