import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Parse JSON request body
app.use(express.json());

// Parse urlencoded request body
app.use(express.urlencoded({ extended: true }));


// Enable CORS
app.use(cors());
app.options('*', cors());

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
