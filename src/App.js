import React from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Main from './Main';
import { Provider } from 'react-redux';
import store from './Store.js';

function App() {
  return (
      <Provider store={ store }>
          <Header />
          <Main />
          <Footer />
      </Provider>
  );
}

export default App;
