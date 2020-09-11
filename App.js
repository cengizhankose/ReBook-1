import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Router from './src/Router';
import Home from './src/screens/Home/index';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/redux';
import {Provider} from 'react-redux';
const App: () => React$Node = () => {
  const middlewares = [ReduxThunk];
  if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
  }
  const store = createStore(reducers, {}, applyMiddleware(...middlewares));
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Router />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
