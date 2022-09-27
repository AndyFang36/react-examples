import {Product} from "./Product";
import {Data} from "./data";
import {Fragment, useEffect, useState} from "react";
import {Divider, List, ListItem} from "@mui/material";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const products = Data.products.sort((a, b) => (b.votes - a.votes));
    setProducts(products);
  }, []);

  const vote = (productId) => {
    const nextProducts = products.map(product =>
      (product.id === productId) ? Object.assign({}, product, {votes: product.votes + 1}) : product
    );
    nextProducts.sort((a, b) => (b.votes - a.votes));
    setProducts(nextProducts);
  };

  return (
    <List id="ProductList">
      {products.map((product, index) => (
        <Fragment key={"list-item-" + index}>
          <ListItem>
            <Product
              id={product.id}
              title={product.title}
              description={product.description}
              url={product.url}
              votes={product.votes}
              submitterAvatar={product.submitterAvatarUrl}
              productImg={product.productImageUrl}
              onVote={vote}
            />
          </ListItem>
          {index === products.length - 1 ? <></> : <Divider sx={{m: 2}}/>}
        </Fragment>
      ))}
    </List>
  );
};
