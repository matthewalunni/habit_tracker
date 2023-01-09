from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'users'
    user_id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    password = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.email


class Habit(db.Model):
    __tablename__ = 'habits'
    habit_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.user_id'), nullable=False)
    habit_name = db.Column(db.String(80), nullable=False)
    habit_description = db.Column(db.String(120), nullable=False)
    target_frequency = db.Column(db.String(80), nullable=False)

    def __repr__(self):
        return '<Habit %r>' % self.habit_name


class Progress(db.Model):
    __tablename__ = 'progress'
    progress_id = db.Column(db.Integer, primary_key=True)
    habit_id = db.Column(db.Integer, db.ForeignKey(
        'habits.habit_id'), nullable=False)
    date = db.Column(db.Date, nullable=False)
    status = db.Column(db.String(80), nullable=False)

    def __repr__(self):
        return '<Progress %r>' % self.progress_id
