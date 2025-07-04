import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS configuration for both development and production
const corsOptions = {
  origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      'http://localhost:5173', // Vite dev server
      'http://127.0.0.1:5173', // Alternative localhost
      'http://localhost:3000', // Alternative React port
      'http://localhost:4173', // Vite preview
      process.env.FRONTEND_URL // Production frontend URL
    ].filter(Boolean); // Remove undefined values
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log('CORS blocked origin:', origin);
      callback(new Error('Not allowed by CORS'), false);
    }
  },
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