import { expect } from 'chai';
import { fromJS, Map } from 'immutable';
import makeStore from '../src/store';

describe('store test', () => {

  it('store is initialized and changed after dispatching action', () => {
    const store = makeStore();
    expect(store.getState()).to.equal(Map()); // empty state

    store.dispatch({
      type: 'SET_ENTRIES',
      entries: ['Trainspotting', '28 Days Later']
    });
    expect(store.getState()).to.equal(fromJS({
      entries: ['Trainspotting', '28 Days Later']
    }));
  });

});