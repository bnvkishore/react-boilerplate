module.exports = `
import React from 'react';
import { Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import store from './store';
import theme from './theme';
import App from './App';
 
ReactDOM.render(
  <>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </>
, document.getElementById('root'));

`
