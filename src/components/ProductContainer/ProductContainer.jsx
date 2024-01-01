/* eslint-disable react/prop-types */
// ProductContainer.jsx
import "./ProductContainer.scss";
import mdrImage from "../../assets/products/MDR_hero.png"
import ProductTypes from "../ProductTypes/ProductTypes";
import partTable from "../../assets/products/MDR_Part-Number.png"
import { useState } from "react";

const ProductContainer = ({ productData, productTypes }) => {
    const [visibleApplication, setVisibleApplication] = useState(false);
    const [visiblePartTable, setVisiblePartTable] = useState(false);

    const handleClickApplication = () => {
        setVisibleApplication(!visibleApplication);
    }
    const handleClickPartTable = () => {
        setVisiblePartTable(!visiblePartTable);
    }

    const product = productData[0];

    return (
        <div className="product-container">
            <div className="product-top">
                <div className="product-image">
                    <img src={mdrImage} alt={product.title} />
                </div>
                <div className="product-details">
                    <h2>{product.title}</h2>
                    <p className="product-description">{product.description}</p>
                    <div className="product-types">
                        <h3>Types:</h3>
                        <ul>
                            {product.types.map((type, index) => (
                                <li key={index}>{type}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="req-drawings-btn">
                        <button>Request Drawings</button>
                    </div>
                </div>
            </div>

            <div className="product-features">
                <h3>Features:</h3>
                <ul>
                    {Object.entries(product.Features[0]).map(([feature, description], index) => (
                        <li key={index}>
                            <strong>{feature}:</strong> {description}
                        </li>
                    ))}
                </ul>
            </div>

            <div style={{
                marginTop: "30px"
            }} className="product-types">
                <ProductTypes productTypes={productTypes} />
            </div>

            <div className="product-applications">
                <h3>Applications: <i onClick={handleClickApplication} style={{ cursor: "pointer" }} className="fa-solid fa-circle-chevron-down"></i></h3>
                {visibleApplication &&
                    <ul>
                        {product.Applications.map((application, index) => (
                            <li key={index}>{application}</li>
                        ))}
                    </ul>
                }
            </div>

            <div className="part-no-image">
                <h3>Part Number Table: <i onClick={handleClickPartTable} style={{ cursor: "pointer" }} className="fa-solid fa-circle-chevron-down"></i></h3>
                {
                    visiblePartTable && <img width={"100%"} height={"100%"} src={partTable} alt="part-no" />
                }
            </div>
        </div>
    );
};

export default ProductContainer;
