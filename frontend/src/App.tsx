import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0);
  const [backendMessage, setBackendMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchBackend = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/")
        console.log(import.meta.env.VITE_BACKEND_URL)
        const data = await res.text()
        setBackendMessage(data)
      } catch (e) {
        console.error(e)
        setBackendMessage("erro ao conectar ao servidor")
      }
    }
    fetchBackend()
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} balbjalba
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
        <h2>Mensagem do Backend:</h2>
        <p>{backendMessage || "Carregando..."}</p>
      </div>
    </>
  );
}

export default App;