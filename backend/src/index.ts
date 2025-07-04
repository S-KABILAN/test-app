import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS configuration for Vercel deployment
const corsOptions = {
  origin: process.env.FRONTEND_URL || [
    'http://localhost:5173', // Your Vite frontend
    'http://127.0.0.1:5173', // Alternative localhost
    'http://localhost:3000', // Alternative React port
    // Add your Vercel frontend URL here when deployed
  ],
  credentials: true,
  optionsSuccessStatus: 200 // For legacy browser support
};

app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());

// Health check route
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API route
app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the TypeScript backend!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});