import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ModalProvider } from './Contexts/ModalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        
        // <React.StrictMode>
        <ModalProvider>
         <BrowserRouter>
          <App />
         </BrowserRouter>
        </ModalProvider>
        //</React.StrictMode>   
);



