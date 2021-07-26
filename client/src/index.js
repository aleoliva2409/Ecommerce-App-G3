import '@fontsource/roboto';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import dotenv from 'dotenv';
import theme from './styles/themeConfig';


dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001/api';

// cart in local storage (initial state)
if (!localStorage.cart) {
  localStorage.setItem('cart', JSON.stringify([]));
} else {
  localStorage.setItem('cart', localStorage.getItem('cart'));
}

//color mode in local storage (inital state)
if (!localStorage.color) {
  localStorage.setItem('color', JSON.stringify(false));
} else {
  localStorage.setItem('color', localStorage.getItem('color'));
}


//create a tag with diferents styles 
const LigthTheme = React.lazy(() => import('./styles/themeLigth'));
const DarkTheme = React.lazy(() => import('./styles/themeNigth'));


const ThemeSelector = ({ children }) => {
  const CHOSEN_THEME = JSON.parse(localStorage.getItem('color'));
  return (
    <>
      <React.Suspense fallback={<></>}>
        {(CHOSEN_THEME === false) && <LigthTheme />}
        {(CHOSEN_THEME === true) && <DarkTheme />}
      </React.Suspense>
      {children}
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <ThemeProvider theme={theme}>
        <ThemeSelector>
          <App />
        </ThemeSelector>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
