import React from 'react';
import RootRouter from './components/RootRouter';

const App = () => {
  const authenticated = false;

  return <RootRouter isLoggedIn={authenticated} />;
};

export default App;
