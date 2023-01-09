"""This module contains the main application code for the server."""
import datetime
import jwt
from flask import Flask, request, make_response, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from werkzeug.security import generate_password_hash, check_password_hash
from auth import token_required
from models import User, db


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///test.db"
app.config["SECRET_KEY"] = "thisissecret"

with app.app_context():
    db.init_app(app)
    migrate = Migrate(app, db)
    db.create_all()

# Endpoints
# POST /users: Create a new user. Request body should include the email, password, email, and name. Response should include the user_id of the newly created user.

# POST /login: Log in a user. Request body should include the username and password. Response should include a JSON Web Token (JWT) that the client can use to authenticate future requests.

# GET /habits: Get a list of all habits for the authenticated user. Response should include an array of habit objects, each containing the habit_id, habit_name, habit_description, and target_frequency.

# POST /habits: Create a new habit for the authenticated user. Request body should include the habit_name and habit_description. Response should include the habit_id of the newly created habit.

# GET /habits/{habit_id}: Get a specific habit for the authenticated user. Response should include the habit_id, habit_name, habit_description, and target_frequency.

# PUT /habits/{habit_id}: Update a specific habit for the authenticated user. Request body should include the updated habit_name and habit_description. Response should be a success message.

# DELETE /habits/{habit_id}: Delete a specific habit for the authenticated user. Response should be a success message.

# POST /habits/{habit_id}/progress: Mark a habit as complete or incomplete for the current day. Request body should include the status (e.g. "complete" or "incomplete"). Response should be a success message.

# GET /habits/{habit_id}/progress?start_date=&end_date=: Get progress records for a specific habit within a given date range. Response should include an array of progress objects, each containing the progress_id, habit_id, date, and status.


@app.route('/register', methods=['POST'])
def register():
    """This method creates a new user. Request body should include the first_name, last_name, password, email,
       and name. Response should include the user_id of the newly created user.
    """

    data = request.get_json()
    first_name = data['first_name']
    last_name = data['last_name']
    password = data['password']
    email = data['email']

    if not first_name or not password or not email or not last_name:
        return make_response('Missing username, password, email, or name', 400)

    user = None
    try:
        user = User.query.filter_by(email=email).first()
    except Exception as e:
        print(e)

    if user:
        return make_response({"message": 'User already exists'}, 409)

    hashed_password = generate_password_hash(password, method='sha256')

    new_user = User(first_name=first_name, last_name=last_name,
                    password=hashed_password, email=email)
    token = jwt.encode({
        'email': new_user.email,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
    }, app.config['SECRET_KEY'], algorithm='HS256')

    db.session.add(new_user)
    db.session.commit()

    return make_response(jsonify({
        'token': token
    }), 200)


@app.route('/login', methods=['POST'])
def login():
    """This method logs in a user. Request body should include the username and password.
       Response should include a JSON Web Token (JWT) that the client can use to
       authenticate future requests.
    """
    data = request.get_json()
    email = data['email']
    password = data['password']

    if not email or not password:
        return {
            'message': 'Missing email or password'
        }, 400

    user = User.query.filter_by(email=email).first()

    if not user:
        return {
            'message': 'User not found'
        }, 404

    if check_password_hash(user.password, password):
        token = jwt.encode({
            'email': user.email,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
        }, app.config['SECRET_KEY'])

        return make_response(jsonify({
            'token': token
        }), 200)
    else:
        return {
            'message': 'Incorrect password'
        }, 401


# @app.route('/habits', methods=['GET', 'POST'])
# @token_required
# def habits():
#     if request.method == 'GET':
#         pass
#     elif request.method == 'POST':
#         pass


# @app.route('/habits/<habit_id>', methods=['GET', 'PUT', 'DELETE'])
# @token_required
# def habit(habit_id):
#     if request.method == 'GET':
#         pass
#     elif request.method == 'PUT':
#         pass
#     elif request.method == 'DELETE':
#         pass
#     pass


# @app.route('/habits/<habit_id>/progress', methods=['GET', 'POST'])
# @token_required
# def progress(habit_id):
#     if request.method == 'GET':
#         pass
#     elif request.method == 'POST':
#         pass
#     pass


if __name__ == '__main__':
    app.run()
