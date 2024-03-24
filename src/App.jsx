import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login.jsx'
import Registration from './components/Registration.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import FormEle from "./components/Form.jsx"
import Main from './components/Main.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<BrowserRouter>
      <Routes>
        <Route path="signup" element={<Registration />} />
        <Route path="/" element={<Login />} />
        <Route path="form" element={<Main />} />
        <Route path="*" element={<Registration />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
