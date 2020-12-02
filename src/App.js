import React from 'react';
import RootRouter from './components/RootRouter';
import { useSelector } from 'react-redux';

const App = () => {
  const { me } = useSelector((state) => state.user);

  return <RootRouter isLoggedIn={me} />;
};

export default App;
