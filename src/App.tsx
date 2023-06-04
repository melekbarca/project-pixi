import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'
import { persistor, store } from './redux/Store/store';
import './assets/index.css'
import AppRoute from './routes/AppRoute';
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <AppRoute/>
      </PersistGate>
    </Provider>
  );
}

export default App;
