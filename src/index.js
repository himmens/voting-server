import makeStore from './store';
import startServer from './server';

export const store = makeStore();
startServer(store);

// setup entries from entries.json
store.dispatch({
  type: 'SET_ENTRIES',
  entries: require('./entries.json')
});
// do next action
store.dispatch({type: 'NEXT'});