# Clay's Note Taking App

Clay's Note Taking App is a web application designed to help users manage and organize their notes effectively. This project utilizes React for the frontend, providing a seamless user experience for creating, editing, and deleting notes.

## Features

- **Create Notes**: Easily create new notes with a title and content.
- **Edit Notes**: Modify existing notes directly from the interface.
- **Delete Notes**: Remove notes when no longer needed.
- **View Notes**: View detailed content of each note in a dialog window.
- **Validation**: Validate user input to ensure data integrity.
- **Responsive Design**: Ensure compatibility and usability across various devices and screen sizes.

## Technologies Used

- **Frontend**: React, React Query, TypeScript
- **Styling**: Tailwind CSS, Shadcn
- **State Management**: React Query for managing remote data fetching and caching.
- **API Requests**: Axios for making HTTP requests to the Django backend.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/papadarfoor/clays-fe.git
   cd clays-fe

2. **Install dependencies:**

    ```bash
 
    npm install

    ```

3. **Start the development server:**

    ```bash
    npm start
    ```
4. **Access the application:**

   Open a web browser and go to [http://localhost:5173](http://localhost:5173)

   You can also run this Django application using Docker for easier setup and environment isolation.

#### Prerequisites

- Docker: [Install Docker](https://docs.docker.com/get-docker/)

#### Setup Instructions with Docker

1. **Clone the repository:**

    ```bash
    git clone https://github.com/papadarfoor/clays-fe.git
    cd clays-fe
    ```

2. **Build the Docker image:**

    ```bash
    docker build -t clays-fe .
    ```

3. **Run the Docker container:**

    ```bash
    docker run -p 5173:5173 clays-fe
    ```

4. **Access the application:**

   Open a web browser and go to [http://localhost:5173](http://localhost:5173)

