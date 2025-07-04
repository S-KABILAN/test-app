import { useState, useEffect } from 'react'
import './App.css'

interface ApiResponse {
  message: string;
}

function App() {
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || '/api';
    fetch(`${apiUrl}/hello`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        return res.json() as Promise<ApiResponse>
      })
      .then(data => {
        setMessage(data.message)
        setLoading(false)
      })
      .catch((err: Error) => {
        console.error('Error fetching data:', err)
        setMessage('Failed to load message from server')
        setLoading(false)
      })
  }, [])

  return (
    <div className="App">
      <h1>Simple Full-Stack App</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>Server says: {message}</p>
      )}
    </div>
  )
}

export default App