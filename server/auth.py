"""This module contains the authentication logic for the API."""

from functools import wraps
from flask import request, jsonify
from models import User
import jwt

def token_required(func, app):
    """This function is a decorator that checks for a valid token.

    Args:
        f (function): Function to be decorated.
        app (Flask): Flask app.

    Returns:
        function: Decorated function.
    """
    @wraps(func)
    def decorated(*args, **kwargs):
        token = None

        if 'x-access-tokens' in request.headers:
            token = request.headers['x-access-tokens']

        if not token:
            return jsonify({'message' : 'Token is missing!'}), 401

        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
            current_user = User.query.filter_by(public_id=data['public_id']).first()
        except Exception:
            return jsonify({'message' : 'Token is invalid!'}), 401

        return func(current_user, *args, **kwargs)

    return decorated
