# affirmations_chatbot
OpenAI API | ReactJS | Firebase


Description
The Affirmations Chatbot is a web application built using ReactJS and Vite. It utilizes Firebase database for storing data and integrates with the OpenAI API to generate affirmations. The chatbot provides the user with affirmations in two languages: English and Hindi. Users can interact with the chatbot and receive positive affirmations tailored to their needs.

Features
Generates positive affirmations based on user input.
Supports two languages: English and Hindi.
Utilizes Firebase database to store user data.
Integrates with the OpenAI API for generating affirmations.


Installation
Clone the repository:

bash
Copy code
git clone https://github.com/shrek010/affirmations_chatbot.git
Navigate to the project directory:

bash
Copy code
cd affirmations-chatbot
Install the dependencies:

bash
Copy code
npm install
Create a Firebase project and set up a Realtime Database. Obtain your Firebase configuration credentials.

Create an account on the OpenAI platform and obtain your API key.

Create a .env file in the root directory of the project and add the following environment variables:

dotenv
Copy code
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_DATABASE_URL=your_firebase_database_url
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
REACT_APP_OPENAI_API_KEY=your_openai_api_key
Start the development server:

bash
Copy code
npm run dev
Open your browser and visit http://localhost:3000 to access the Affirmations Chatbot.

Usage
Upon launching the application, you will be presented with a chat interface.

Select your preferred language (English or Hindi) by clicking on the language toggle button.

Start interacting with the chatbot by entering your messages in the input box and pressing Enter.

The chatbot will respond with positive affirmations based on your input.

Continue the conversation as desired and receive personalized affirmations to uplift your mood.
