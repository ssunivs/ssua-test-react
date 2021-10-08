import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer, { rootSaga } from './modules';
import { loadAnswer } from './modules/question';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

const loadStoreFromLocalStorage = () => {
  let answer = JSON.parse(localStorage.getItem('answer'));

  if (Array.isArray(answer)) {
    store.dispatch(loadAnswer({ answer }));
  }
};

sagaMiddleware.run(rootSaga);
loadStoreFromLocalStorage();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
