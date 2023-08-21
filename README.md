
COVID-19 Tracker Chatbot

The COVID-19 Tracker Chatbot is an application that provides users with real-time COVID-19 statistics for different countries. It utilizes Amazon Lex for natural language understanding 
and AWS Lambda for backend processing. The chatbot allows users to inquire about COVID-19 data for specific countries, receive a welcome message, learn about the bot, and say goodbye. 

Architecture

The application follows a simple architecture:

    Amazon Lex: Natural language understanding service that processes user input and maps it to specific intents.
    AWS Lambda: Serverless function that processes the user's intent and fetches COVID-19 data using a third-party API.
    Disease.sh API: Third-party API that provides real-time COVID-19 data for various countries.

Getting Started

To deploy the COVID-19 Tracker Chatbot, follow these steps:

    Set Up Amazon Lex:
        Create an Amazon Lex bot with intents (CovidTracker, Goodbye, AboutBot, Welcome) and necessary slot types.
        Configure your bot's interaction model to understand user queries related to COVID-19 data.

    Configure AWS Lambda:
        Create a new AWS Lambda function and set the runtime to Node.js.
        Copy and paste the code from index.js into the function's code editor.
        Configure the Lambda function's permissions to allow interaction with Amazon Lex.

    Install Dependencies:
        In the Lambda function code editor, open a terminal or command prompt.
        Run npm install to install the required Node.js dependencies (request-promise, numeral).

    Set Up Disease.sh API:
        Obtain an API key from the Disease.sh API to fetch COVID-19 data.

    Configure Environment Variables:
        Add an environment variable named DISEASE_SH_API_KEY to your Lambda function and set it to your Disease.sh API key.

    Configure Amazon Lex Integration:
        In your Amazon Lex bot settings, configure the Lambda function integration for each intent.

    Test the Bot:
        Test the chatbot using the Amazon Lex test console or integrate it into your preferred messaging platform.

Usage

    Ask the bot for COVID-19 data using queries like "Tell me about COVID-19 in [Country Name]."
    Say "Goodbye" to receive a farewell message.
    Inquire about the bot by asking "Tell me about yourself."
    Start a conversation by saying "Hello."  
