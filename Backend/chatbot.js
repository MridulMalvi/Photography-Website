const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { PromptTemplate } = require("@langchain/core/prompts");
const { StringOutputParser } = require("@langchain/core/output_parsers");
const { RunnableSequence } = require("@langchain/core/runnables");
require('dotenv').config();
// Knowledge base about Raj Photo Studio
const knowledgeBase = `
# Raj Photo Studio - Knowledge Base

## About Us
Raj Photo Studio is a professional photography studio with over 15 years of experience. We specialize in wedding photography, portraits, events, and product photography. Our mission is to tell your story through timeless photographs. We have completed 200+ projects and served 500+ happy clients.

## Contact Information
- Phone: +91 98765 43210
- Email: rajphotostudio@gmail.com
- Address: 123 Photography Lane, Creative District, Betul 460001

## Studio Hours
- Monday to Friday: 9:00 AM - 7:00 PM
- Saturday: 10:00 AM - 6:00 PM
- Sunday: By Appointment Only

## Our Services

### 1. Wedding Photography
- Starting Price: ₹75,000
- Duration: 12 hours coverage
- Includes: Pre-wedding shoot, Ceremony & Reception coverage
- Deliverables: Edited online gallery and Physical album
- Description: Complete wedding coverage with artistic storytelling

### 2. Portrait Sessions
- Starting Price: ₹5,000
- Duration: 2 hours session
- Options: Indoor or Outdoor location
- Features: Multiple outfit changes
- Deliverables: Edited high-resolution images
- Description: Professional portraits for families, individuals, and couples

### 3. Event Coverage
- Starting Price: ₹10,000
- Duration: 5 hours coverage
- Covers: Corporate functions & parties
- Features: Team photos & candid moments
- Deliverables: Edited online gallery
- Description: Comprehensive photography for corporate events, parties, and more

### 4. Product Photography
- Starting Price: ₹8,000
- Duration: Half-day shoot
- Options: Studio setup or on-site
- Features: Multiple angles & close-ups
- Deliverables: Edited product catalog
- Description: High-quality images to make your products stand out

## Our Equipment
- DSLR Cameras: High-end Canon & Sony cameras for sharp, detailed shots
- Video Cameras: 4K Ultra HD cinematic quality for events & films
- Drones: Aerial photography & videography for stunning top views
- Crane & Gimbals: Smooth cinematic movements with professional stabilizers
- Lighting Kits: Professional studio & outdoor lighting setup
- Audio Equipment: High-quality sound capture for video shoots

## Why Choose Us
- Professional Team: Experienced photographers who capture your moments perfectly
- Customer Satisfaction: Your happiness is our priority, ensuring memorable experiences
- High-Quality Equipment: We use the latest cameras and lenses for stunning results

## How to Book
Customers can book our services by:
1. Visiting our website and clicking "Book Now"
2. Calling us at +91 98765 43210
3. Sending an email to rajphotostudio@gmail.com
4. Visiting our studio during business hours
`;

// Create the chatbot chain
const createChatbotChain = () => {
  const model = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-flash",
    apiKey: process.env.GOOGLE_API_KEY,
    temperature: 0.7,
    maxOutputTokens: 500,
  });

  const promptTemplate = PromptTemplate.fromTemplate(`
You are a helpful and friendly customer service assistant for Raj Photo Studio, a professional photography studio.
Use the following knowledge base to answer customer questions accurately and helpfully.
If you don't know the answer based on the knowledge base, politely say so and suggest contacting the studio directly.
Be conversational, warm, and professional in your responses.
Keep responses concise but informative.

Knowledge Base:
{knowledge}

Chat History:
{chatHistory}

Customer Question: {question}

Assistant Response:`);

  const chain = RunnableSequence.from([
    {
      knowledge: () => knowledgeBase,
      chatHistory: (input) => input.chatHistory || "No previous messages",
      question: (input) => input.question,
    },
    promptTemplate,
    model,
    new StringOutputParser(),
  ]);

  return chain;
};

let chatbotChain = null;

// Initialize the chatbot
const initializeChatbot = () => {
  if (!process.env.GOOGLE_API_KEY) {
    console.warn('Warning: GOOGLE_API_KEY not set. Chatbot will not function.');
    return null;
  }
  chatbotChain = createChatbotChain();
  return chatbotChain;
};

// Process a chat message
const processMessage = async (message, chatHistory = []) => {
  if (!chatbotChain) {
    chatbotChain = initializeChatbot();
  }

  if (!chatbotChain) {
    return "I'm sorry, the chatbot is currently unavailable. Please contact us directly at +91 98765 43210 or rajphotostudio@gmail.com.";
  }

  try {
    // Format chat history
    const formattedHistory = chatHistory
      .map((msg) => `${msg.role === 'user' ? 'Customer' : 'Assistant'}: ${msg.content}`)
      .join('\n');

    const response = await chatbotChain.invoke({
      question: message,
      chatHistory: formattedHistory || "No previous messages",
    });

    return response;
  } catch (error) {
    console.error('Chatbot error:', error);
    return "I'm sorry, I encountered an error. Please try again or contact us directly at +91 98765 43210.";
  }
};

module.exports = {
  initializeChatbot,
  processMessage,
};
