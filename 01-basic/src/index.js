import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

function Hell(){
  return(
    <h2>Hi</h2>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Hell/>
  </React.StrictMode>
);

