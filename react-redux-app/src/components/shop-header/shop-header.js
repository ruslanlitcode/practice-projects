import React from "react";
import "./shop-header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ShopHeader = ({ items }) => {
  const all = items.reduce((sum, item) => sum + item.total, 0);
  const numItems = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">ReStore</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {numItems} items (${all})
        </div>
      </Link>
    </header>
  );
};
const mapStateToProps = ({ shoppingCart: { cartItems } }) => {
  return {
    items: cartItems,
  };
};
export default connect(mapStateToProps)(ShopHeader);
