/* eslint-disable react/prop-types */
// ProductContainer.jsx
import "./ProductContainer.scss";
import ProductTypes from "../ProductTypes/ProductTypes";
import partTable from "../../assets/products/MDR_Part-Number.png"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const RequestDrawingsForm = ({ handleCloseRequestForm }) => {
    const [formData, setFormData] = useState({
        SENDER_NAME: "",
        COMPANY_NAME: "",
        EMAIL: "",
        CONTACT_NO: "",
        PART_NO: "",
        NOTE: "",
    });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Make API call here using formData
        fetch("https://download-specs-backend-api.vercel.app/download-images", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                toast.success(`${data.message}`, {
                    position: "top-center",
                    autoClose: 8000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                    theme: "light",
                });
                handleCloseRequestForm();
            })
            .catch(error => {
                toast.error(`${error.message}`, {
                    position: "top-center",
                    autoClose: 8000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="form-modal">
            <form onSubmit={handleSubmit}>
                <h4 style={{
                    textAlign: "center",
                    marginBottom: 30
                }}>Request for Part Diagram</h4>
                <label htmlFor="SENDER_NAME">Sender Name: <span style={{ color: "red", fontWeight: "bold" }}> *</span></label>
                <input
                    type="text"
                    id="SENDER_NAME"
                    name="SENDER_NAME"
                    value={formData.SENDER_NAME}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                />

                <label htmlFor="COMPANY_NAME">Company Name: <span style={{ color: "red", fontWeight: "bold" }}> *</span></label>
                <input
                    type="text"
                    id="COMPANY_NAME"
                    name="COMPANY_NAME"
                    value={formData.COMPANY_NAME}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                    required
                />

                <label htmlFor="EMAIL">Email: <span style={{ color: "red", fontWeight: "bold" }}> *</span></label>
                <input
                    type="email"
                    id="EMAIL"
                    name="EMAIL"
                    value={formData.EMAIL}
                    onChange={handleInputChange}
                    placeholder="Enter your Email address"
                    required
                />

                <label htmlFor="CONTACT_NO">Contact Number:</label>
                <input
                    type="text"
                    id="CONTACT_NO"
                    name="CONTACT_NO"
                    value={formData.CONTACT_NO}
                    onChange={handleInputChange}
                    placeholder="Enter your contact number"
                />

                <label htmlFor="PART_NO">Part Number: <span style={{ color: "red", fontWeight: "bold" }}> *</span></label>
                <input
                    type="text"
                    id="PART_NO"
                    name="PART_NO"
                    value={formData.PART_NO}
                    onChange={handleInputChange}
                    placeholder="Enter part number to request"
                    required
                />

                <label htmlFor="NOTE">Note:</label>
                <input
                    id="NOTE"
                    name="NOTE"
                    value={formData.NOTE}
                    onChange={handleInputChange}
                    placeholder="Any feedback or note?"
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </button>
                <button type="button" onClick={handleCloseRequestForm} disabled={loading}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

const ProductContainer = ({ productData, productTypes }) => {
    const [visibleApplication, setVisibleApplication] = useState(false);
    const [visiblePartTable, setVisiblePartTable] = useState(false);
    const [showRequestForm, setShowRequestForm] = useState(false);

    const handleClickApplication = () => {
        setVisibleApplication(!visibleApplication);
    }
    const handleClickPartTable = () => {
        setVisiblePartTable(!visiblePartTable);
    }

    const handleRequestDrawingsClick = () => {
        setShowRequestForm(true);
    }

    const handleCloseRequestForm = () => {
        setShowRequestForm(false);
    }
    const product = productData[0];

    return (
        <div className="product-container">
            <div className="product-top">
                <div className="product-image">
                    <img src={product.image} alt={product.title} />
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
                        <button onClick={handleRequestDrawingsClick}>Request Drawings</button>
                    </div>

                    {/* Render the form modal if showRequestForm is true */}
                    {showRequestForm && (
                        <RequestDrawingsForm
                            handleCloseRequestForm={handleCloseRequestForm}
                            product={product}
                        />
                    )}
                </div>
            </div>

            <div className="product-features">
                <h3>Features:</h3>
                <ul>
                    {Object.entries(product.Features[0]).map(([feature, description], index) => (
                        <li  key={index}>
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

            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                theme="light"
            />
        </div>
    );
};

export default ProductContainer;
