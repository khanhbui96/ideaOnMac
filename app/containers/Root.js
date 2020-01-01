// @flow
import React, { useEffect} from 'react';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import type { Store } from '../reducers/types';
import Routes from '../Routes';


type Props = {
  store: Store,
  history: {}
};

const Root = ({ store, history }: Props) => {
  return (<Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
)}

export default hot(Root);
