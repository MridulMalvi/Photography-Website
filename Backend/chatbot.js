const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { PromptTemplate } = require("@langchain/core/prompts");
const { StringOutputParser } = require("@langchain/core/output_parsers");
const { RunnableSequence } = require("@langchain/core/runnables");
require('dotenv').config(); // Load environment variables

// ... (Keep your existing knowledgeBase string exactly as it is) ...
const knowledgeBase = `
# Raj Photo Studio - Knowledge Base
... (rest of your knowledge base) ...
`;

// Create the chatbot chain
const createChatbotChain = () => {
  // Use GOOGLE_API_KEY for better compatibility with LangChain defaults
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("API Key not found. Please set GOOGLE_API_KEY in your environment variables.");
  }

  const model = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-flash",
    apiKey: apiKey, 
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
  // Check for both possible variable names
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error("❌ CRITICAL ERROR: GOOGLE_API_KEY is missing in environment variables.");
    return null;
  }
  
  try {
    chatbotChain = createChatbotChain();
    console.log("✅ Chatbot initialized successfully.");
    return chatbotChain;
  } catch (error) {
    console.error("❌ Failed to create chatbot chain:", error.message);
    return null;
  }
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
    // Format chat history safely
    const formattedHistory = Array.isArray(chatHistory) 
      ? chatHistory
          .map((msg) => `${msg.role === 'user' ? 'Customer' : 'Assistant'}: ${msg.content}`)
          .join('\n')
      : "No previous messages";

    const response = await chatbotChain.invoke({
      question: message,
      chatHistory: formattedHistory,
    });

    return response;
  } catch (error) {
    console.error('Chatbot error during processing:', error);
    return "I'm sorry, I encountered an error. Please try again or contact us directly at +91 98765 43210.";
  }
};

module.exports = {
  initializeChatbot,
  processMessage,
};
