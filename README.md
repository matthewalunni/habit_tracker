# Habit Tracker

A simple application for tracking and improving your daily habits. This is a habit tracker mobile application built with React Native and powered by D3.js for data visualization. It allows users to track their habits and see their progress over time. The application is currently in development.

## Features

- Create and manage your habits
- Mark habits as complete or incomplete for a given day
- View your progress over time
- Set goals and track progress towards achieving them

## Viewing the Graphs

- Run the app, register a new user, and navigate to the "Metrics" tab.
- To view the code, see `client/components/Graph.tsx`.

| Weekly Progress                                                                                         | Monthly Progress                                                                                          | Yearly Progress                                                                                         |
| ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| ![Weekly Progress](https://github.com/matthewalunni/habit_tracker/blob/main/images/weekly.png?raw=true) | ![Monthly Progress](https://github.com/matthewalunni/habit_tracker/blob/main/images/monthly.png?raw=true) | ![Yearly Progress](https://github.com/matthewalunni/habit_tracker/blob/main/images/yearly.png?raw=true) |

### Prerequisites

- Node.js
- npm (comes with Node.js)

### Installation

- Clone this repository:
- `git clone https://github.com/[YOUR_USERNAME]/habit-tracker.git`

### Install dependencies:

- `npm install`
- Create a local database and update the database configuration in config/database.js

### Run the development server:

- `npm run ios`
- The app will be running at `http://localhost:8081`.

## Built With

- [Node.js](https://nodejs.org/en/)
- [React Native](https://facebook.github.io/react-native/)
- [D3.js](https://d3js.org/)
- [Flask](http://flask.pocoo.org/)

## Contributing

- Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
- Please make sure to update tests as appropriate.

## License

- This project is licensed under the MIT License.
