import React from "react";
import './buyButton.scss';

const BuyButton = ({product}) => {
    return (
        <button className="snipcart-add-item buy-button"
            data-item-id={product.sku}
            data-item-name={product.name}
            data-item-price={product.price}
            data-item-url="/"
            data-item-image={product.image.publicURL}>
                Acheter ce produit
            </button>
    )
}

export default BuyButton;