import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { MainRoute } from './Services/Routes/MainRoute'
import { Home } from './Screens/Home/Home'

function App() {

  return (
    <BrowserRouter>
        <MainRoute/>
    </BrowserRouter>
  )
}

export default App
