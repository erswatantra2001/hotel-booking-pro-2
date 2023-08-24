from flask import Flask,jsonify
from flask_cors import CORS  # Import Flask-CORS
import mysql.connector



app = Flask(__name__)
CORS(app)  # Add this line to enable CORS for your app


try:
    con = mysql.connector.connect(host="localhost", user="root", password="Swastika@123", database="hotelbooking")
    print("connection successful shubham sharma m")
    con.autocommit=True
    cur = con.cursor(dictionary=True)

    cur.execute('''CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTO_INCREMENT, name TEXT NULL , email VARCHAR(45) NULL , phone VARCHAR(45) NULL, password VARCHAR(45))''')

        
            

            
            
except:
    print("some error in database connection")






@app.route("/")
def home():
    data = {
        "message": "This is a Flask server code running",
        "status": "success"
    }
    return jsonify(data)

import controller.user_controller as user_controller


if __name__ == "__main__":
    app.run(debug=True)
