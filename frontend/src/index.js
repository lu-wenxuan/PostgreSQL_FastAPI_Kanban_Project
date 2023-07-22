import React from 'react';
import ReactDOM from 'react-dom/client';
import Baord from './components/Board';

function App() {
  return(
    <div>
      <Baord />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
