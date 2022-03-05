import {Product} from "./Product";
import {Seed} from "../data/seed";
import {Fragment, useEffect, useState} from "react";
import {Divider, List, ListItem} from "@mui/material";
import "../../assets/css/ProductList.css";

export const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const products = Seed.products.sort((a, b) => (b.votes - a.votes));
        setProducts(products);
    }, [])

    const handleProductUpVote = (productId) => {
        const nextProducts = products.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product, {votes: product.votes + 1,});
            } else {
                return product;
            }
        });
        nextProducts.sort((a, b) => (b.votes - a.votes));
        setProducts(nextProducts);
    };

    return (
        <List id="ProductList">
            {products.map((product, index) => (
                <Fragment key={'list-item-' + index}>
                    <ListItem>
                        <Product
                            id={product.id}
                            title={product.title}
                            description={product.description}
                            url={product.url}
                            votes={product.votes}
                            submitterAvatarUrl={product.submitterAvatarUrl}
                            productImageUrl={product.productImageUrl}
                            onVote={handleProductUpVote}
                        />
                    </ListItem>
                    {index === products.length - 1 ? null : <Divider/>}
                </Fragment>
            ))}
        </List>
    );
}