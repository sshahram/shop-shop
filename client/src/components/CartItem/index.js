import React from 'react';

import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';

const CartItem = ({ item }) => {
    const [, dispatch] = useStoreContext();
    // to remove items directly from the cart
    const removeFromCart = item => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: item._id
        });
    };

    // allow users to manually edit the quantity in shopping cart items by typing directly in the <input> elements
    // anytime and <input> element's value changes, an onChange event will occur.
    // we can capture that event and send the element's new value to the reducer
    const onChange = (e) => {
        const value = e.target.value;

        if (value === '0') {
            dispatch({
                type: REMOVE_FROM_CART,
                _id: item._id
            });
        } else {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: item._id,
                purchaseQuantity: parseInt(value)
            });
        }
    };
    
    return (
        <div className="flex-row">
            <div>
                <img
                    src={`/images/${item.image}`}
                    alt=""
                />
            </div>
            <div>
                <div>{item.name}, ${item.price}</div>
                <div>
                    <span>Qty:</span>
                    <input
                        type="number"
                        placeholder="1"
                        value={item.purchaseQuantity}
                        onChange={onChange}
                    />
                    <span
                        role="img"
                        aria-label="trash"
                        onClick={() => removeFromCart(item)}
                    >
                        🗑️
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CartItem;