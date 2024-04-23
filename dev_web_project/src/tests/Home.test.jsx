import { test, assert } from 'vitest';
import { cartReducer } from './Home';

test('cartReducer should add a product to the cart', () => {
    const initialState = [];
    const action = {
        type: 'ADD',
        id: '1',
        name: 'Product Name',
        price: 10,
        quantity: 1
    };

    const newState = cartReducer(initialState, action);

    assert.equal(newState.length, 1);
    assert.deepEqual(newState[0], ['1', 'Product Name', 10, 1]);
});
