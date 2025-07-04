# Full-Stack TypeScript App

A simple full-stack application with React/Vite frontend and Express.js backend, ready for Vercel deployment.

## Project Structure

```
├── frontend/          # React + Vite + TypeScript
├── backend/           # Express.js + TypeScript
├── vercel.json        # Vercel deployment configuration
└── README.md
```

## Local Development

### Prerequisites
- Node.js (v18 or higher)
- npm

### Setup

1. **Install dependencies for both frontend and backend:**
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install
   
   # Install backend dependencies
   cd ../backend
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   # Copy environment files
   cp frontend/.env.example frontend/.env.local
   cp backend/.env.example backend/.env
   ```

3. **Start the development servers:**
   
   **Terminal 1 - Backend:**
   ```bash
   cd backend
   npm run dev
   ```
   
   **Terminal 2 - Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

4. **Access the application:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001/api/hello
   - Health check: http://localhost:3001/health

## Deployment to Vercel

### Option 1: Deploy Both Frontend and Backend Together

1. **Connect your repository to Vercel:**
   - Push your code to GitHub
   - Import the project in Vercel dashboard
   - Vercel will automatically detect the `vercel.json` configuration

2. **Set environment variables in Vercel:**

   **For Backend:**
   - Go to your backend project settings in Vercel
   - Add environment variables:
     - `FRONTEND_URL`: Your frontend Vercel URL (`https://test-app-two-sandy.vercel.app`)

   **For Frontend:**
   - Go to your frontend project settings in Vercel
   - Add environment variables:
     - `VITE_API_URL`: Your backend Vercel URL (`https://test-app-f16v.vercel.app`)

### Option 2: Deploy Separately

**Frontend:**
1. Deploy the `frontend` folder to Vercel
2. Set `VITE_API_URL` environment variable to your backend URL

**Backend:**
1. Deploy the `backend` folder to Vercel (or another platform)
2. Set `FRONTEND_URL` environment variable to your frontend URL

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /api/hello` - Returns a welcome message

## Technologies Used

**Frontend:**
- React 19
- TypeScript
- Vite
- CSS

**Backend:**
- Express.js
- TypeScript
- CORS
- dotenv

## Features

- ✅ TypeScript support for both frontend and backend
- ✅ CORS configuration for cross-origin requests
- ✅ Environment variable support
- ✅ Health check endpoint
- ✅ Development proxy configuration
- ✅ Production-ready Vercel deployment
- ✅ Error handling and loading states

## Troubleshooting

### Common Issues

1. **CORS errors:** Make sure the `FRONTEND_URL` environment variable is set correctly in your backend
2. **API not found:** Verify that the `VITE_API_URL` is pointing to the correct backend URL
3. **Build errors:** Ensure all dependencies are installed and TypeScript compilation is successful

### Development Tips

- The frontend development server proxies `/api` requests to `http://localhost:3001`
- Make sure both servers are running for full functionality
- Check browser console and terminal logs for error messages
