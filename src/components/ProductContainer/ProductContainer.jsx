/* eslint-disable react/prop-types */
// ProductContainer.jsx
import "./ProductContainer.scss";
import mdrImage from "../../assets/products/MDR_hero.png"
import ProductTypes from "../ProductTypes/ProductTypes";

const ProductContainer = ({ productData, productTypes }) => {
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
                </div>
            </div>

            <div style={{
                marginTop: "30px"
            }} className="product-types">
                <ProductTypes productTypes={productTypes} />
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
            <div className="product-applications">
                <h3>Applications:</h3>
                <ul>
                    {product.Applications.map((application, index) => (
                        <li key={index}>{application}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductContainer;
