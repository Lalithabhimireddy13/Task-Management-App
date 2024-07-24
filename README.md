# Task Management App

This Task Management App is a simple and intuitive application built with React that allows users to manage their tasks effectively. The app includes features for adding, editing, deleting, and marking tasks as complete, with a visually appealing interface and local storage integration for data persistence. 

## Features

- **Add Tasks**: Users can add new tasks using a simple input form.
- **Edit Tasks**: Existing tasks can be edited to update their content.
- **Delete Tasks**: Users can remove tasks that are no longer needed.
- **Local Storage**: Tasks are stored in the browser's local storage, ensuring data persistence across sessions.
- **Responsive Design**: The application is designed to be responsive and works well on various screen sizes.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **CSS**: For styling the application and creating a visually appealing interface.
- **React Icons**: For incorporating icons into the application.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/Lalithabhimireddy13/Task-Management App.git
    cd task-manager
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Start the development server**:
    ```sh
    npm start
    ```

## Usage

Once the development server is running, open your browser and navigate to `http://localhost:3000` to view the application. You can start adding tasks immediately using the input form. Click on the edit icon to edit a task, the trash icon to delete a task, and the task text to mark it as complete.

## Project Structure

The project's structure is organized as follows:
 src/
├── components/
│ ├── Task.js // Component for individual tasks
│ ├── TaskList.js // Component for the task list
│ ├── TaskForm.js // Component for the task input form
├── App.js // Main app component
├── index.js // Entry point
└── App.css // Styling for the app

