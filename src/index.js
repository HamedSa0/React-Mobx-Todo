import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "../src/styles/bootstrap.min.css";

import { Provider} from 'mobx-react';
import TodoStore from './stores/TodoStore';

const Root = (
  <Provider TodoStore={TodoStore}>
    <App/>
  </Provider>

)

ReactDOM.render(Root, document.getElementById('root'));
serviceWorker.unregister();
