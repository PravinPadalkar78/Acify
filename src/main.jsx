import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import AccountList from './Components/AccountList.jsx';
import EntryForm from './Components/EntryForm.jsx';
import Login from './Components/Login.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} >
        <Route path="/" element={<AccountList/>}/>
        <Route path="/entryform" element={<EntryForm/>}/>
        <Route path="/login" element={<Login/>}/>
    </Route>
  </Routes>
</BrowserRouter>
)
