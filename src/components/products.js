import React from "react";

const Products = ({products}) => {
    if (!products || !products.length) {
        return null;
    }

    return (
        <div>
        {products.map((product) => {
            return (
                <div key={product.sku}>
                    <h1>{product.sku}</h1>
                </div>
            )
        })}
        </div>
    )
}

export default Products;