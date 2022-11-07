import React from "react";
import { BookContex } from "../../services/context";
import BookList from "../book-list";
import ShoppingCartTable from "../shopping-cart-table/shopping-cart-table";

const HomePage = () => {
  return (
    <div>
      <BookContex.Consumer>
        {(bookstoreService) => (
          <BookList bookstoreService={bookstoreService} />
        )}
      </BookContex.Consumer>
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
