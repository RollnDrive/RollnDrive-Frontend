/* eslint-disable react/prop-types */
// ProductTypes.jsx

import { useState } from "react";
import "./ProductTypes.scss";

const ProductTypes = ({ productTypes }) => {
    const [selectedProductIndex, setSelectedProductIndex] = useState(0);

    const handleProductSelect = (index) => {
        setSelectedProductIndex(index);
    };

    return (
        <div className="product-types-container">
            <div className="product-type-selector">
                {productTypes.map((type, index) => (
                    <button
                        key={index}
                        className={index === selectedProductIndex ? "active" : ""}
                        onClick={() => handleProductSelect(index)}
                    >
                        {type.name}
                    </button>
                ))}
            </div>

            <div className="product-type">
                <h2 style={{
                    color: "var(--text-color-ink)", fontSize: "25px",
                    "marginBottom": "12px"
                }}>{productTypes[selectedProductIndex].name}</h2>

                {
                    productTypes[selectedProductIndex].image ? <img className="type-image" src={productTypes[selectedProductIndex].image} alt="img" /> : <></>
                }
                <p>{productTypes[selectedProductIndex].description}</p>

                <div className="key-features">
                    <h3 style={{
                        color: "var(--text-color-ink)", fontSize: "25px",
                        "marginBottom": "12px"
                    }}>
                        Key Features:
                    </h3>
                    <ul>
                        {Object.entries(
                            productTypes[selectedProductIndex].KeyFeatures
                        ).map(([key, value], i) => (
                            <li key={i}>
                                <strong>{key}:</strong> {value}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="technical-details">

                    {
                        productTypes[selectedProductIndex].tech_image ?
                            (
                                <>
                                    <h3 style={{
                                        color: "var(--text-color-ink)", fontSize: "25px",
                                        "marginBottom": "12px"
                                    }}>
                                        Technical Details:
                                    </h3>
                                    <img className="tech-image" src={productTypes[selectedProductIndex].tech_image} alt="img" />
                                </>
                            ) :
                            <></>
                    }
                </div>


            </div>
        </div>
    );
};

export default ProductTypes;
