import React from "react";
import BuyButton from "./buyButton";
import './product.scss';

const Products = ({products}) => {
    if (!products || !products.length) {
        return null;
    }

    return (
        <div>
            {products.map((product) => {
                return (
                    <div key={product.sku} className="product">
                        <img alt={product.name} src={product.image.publicURL} className="product-image" />
                        <div className="product-details">
                            <h1>{product.name}</h1>
                            <small>{product.price}$</small>
                        </div>
                        <div>
                            <BuyButton product={product} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Products;