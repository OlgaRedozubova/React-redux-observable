import React from 'react';
import ReactDOM from 'react-dom';

import{ Router, Route, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import 'rxjs';

import App from './components/App';
import Home from './components/Home';

import store, { history } from './store';

//import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
//registerServiceWorker();
