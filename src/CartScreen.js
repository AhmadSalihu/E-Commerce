import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MessageBox from './MessageBox';
import { cartAction, removeCartItem } from './ReduxStore/cartActions';

export default function CartScreen(props) {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split('=')[1]) : [];
  useEffect(() => {
    dispatch(cartAction(qty, productId));
  }, [qty, productId, dispatch]);

  const deleteCart = (id) => {
    dispatch(removeCartItem(id));
  };

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  };

  return (
    <div className="row top">
      <div className="col-2">
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty: <Link to='/'>Go Shopping</Link>
          </MessageBox>
        ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.product}>
                  <div className="row">
                    <div>
                      <img src={item.image} alt={item.name}  className="small" />
                    </div>
                    <div className="min-30">
                      <Link to={`/product/${productId}`}>{item.name}</Link>
                    </div>
                    <div className="row">
										<div>
											{item.qty} items
										</div>
								 </div>
                  <div>₦{item.price}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => deleteCart(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                  </div>
                </li>
              ))}
            </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h1>
                Subtotal: ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : {cartItems.reduce((a, c) => a + c.price *c.qty, 0)}
              </h1>
            </li>
            <li>
              <button className="primary block" onClick={checkoutHandler}>Proceed to checkout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
