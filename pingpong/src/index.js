import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'rxjs';

import App from './components/App';
import store from './store';

//import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
//registerServiceWorker();
