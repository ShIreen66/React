
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import InformationContext from "./context/InformationContext.jsx"; 

createRoot(document.getElementById('root')).render(
    <InformationContext><App /></InformationContext>
    
  
)
