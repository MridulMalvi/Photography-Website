# Photography-Website

Raj Photo Studio - A professional photography website built with React and Vite.

## Features
- Beautiful photography portfolio showcase
- Service listings with pricing
- Contact form
- Booking system
- **AI Chatbot** - RAG-powered chatbot using LangChain and Google Gemini API

## Setup

### Frontend
```bash
npm install
npm run dev
```

### Backend
```bash
cd Backend
npm install
npm start
```

### Environment Variables

Create a `.env` file in the `Backend` folder with:
```
MONGO_URI="your_mongodb_connection_string"
GEMINI_API_KEY="your_google_gemini_api_key"
```

#### Getting a Gemini API Key
1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Click "Get API Key" to generate a new API key
4. Copy the API key and add it to your `.env` file

## AI Chatbot

The website includes a RAG (Retrieval Augmented Generation) chatbot that:
- Appears as a floating button in the bottom-right corner
- Provides information about services, pricing, and booking
- Uses Google Gemini API for natural language responses
- Has knowledge about the studio's offerings, hours, and contact info

The chatbot is built with:
- **Frontend**: React component with Lucide icons
- **Backend**: LangChain with Google Generative AI integration
- **Knowledge Base**: Pre-configured with studio information
