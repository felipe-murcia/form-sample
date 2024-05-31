import React from 'react';
import './App.css';
import Index from './page';
import { AppProvider } from './context/Provider';

function App() {
  return (
    <AppProvider>
      <Index />
    </AppProvider>
  );
}

export default App;
