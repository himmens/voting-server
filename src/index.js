import makeStore from './store';
import startServer from './server';

export const store = makeStore();
startServer(store);

// setup entries from entries.json
store.dispatch({
  type: 'SET_ENTRIES',
  entries: require('./entries.json')
});
store.dispatch({type: 'NEXT'}); //do next action