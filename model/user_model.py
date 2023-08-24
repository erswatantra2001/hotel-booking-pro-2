from app import cur,con

from flask import Flask,jsonify,make_response

class user_model():

    
    def user_post_model(self, data):
        try:
            # Check if email or phone already exists in the database
            check_query = f"SELECT id FROM users WHERE email = '{data['email']}' OR phone = '{data['phone']}'"
            cur.execute(check_query)
            existing_record = cur.fetchone()
            print(existing_record)
            
            if existing_record:
                return jsonify("Email or phone already exists in the database.")
            
            # If not found, insert the new record
            insert_query = f"INSERT INTO users (name, email, phone, password) VALUES ('{data['name']}', '{data['email']}', '{data['phone']}', '{data['password']}')"
            cur.execute(insert_query)
            return jsonify("Signup successful")
        except Exception as e:
            print("Error in post request:", e)
