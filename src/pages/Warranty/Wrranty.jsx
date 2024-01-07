import Footer from "../../components/Footer/Footer";
import MyNavbar from "../../components/Navbar/MyNavbar";

const WarrantyPolicy = () => {
    return (
        <div>
            <MyNavbar />
            <div style={styles.container}>
                <h1 style={styles.title}>Warranty Policy</h1>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>1. Warranty Period</h2>
                    <p style={styles.paragraph}>
                        RollnDrive offers a limited warranty for a period of 12 months from the date of purchase on all eligible products. This warranty covers defects in materials and workmanship under normal use.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>2. Warranty Coverage</h2>
                    <p style={styles.paragraph}>
                        During the warranty period, RollnDrive will repair or replace, at its discretion, any product that proves to be defective in materials or workmanship. This coverage is subject to the terms and conditions outlined below.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>3. Exclusions from Warranty Coverage</h2>
                    <p style={styles.paragraph}>
                        The warranty will be void under the following circumstances:
                    </p>
                    <ol style={styles.list}>
                        <li>Overload Conditions: The warranty does not cover damage caused by the use of motors in overload conditions or any other form of misuse beyond the products intended capacity or specifications.</li>
                        <li>
                            Opening of Assembly: Opening or attempting to repair the product by unauthorized personnel or any party other than RollnDrives authorized service providers will void the warranty.
                        </li>
                        <li>
                            Unauthorized Modifications: Any unauthorized modifications or alterations to the product that are not explicitly approved by RollnDrive will void the warranty.
                        </li>
                        <li>Failure to Follow Instructions: Failure to follow the products installation, operation, and maintenance instructions as provided in the product documentation may void the warranty.
                        </li>
                    </ol>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>4. Warranty Claim Procedure</h2>
                    <p style={styles.paragraph}>
                        To make a warranty claim, please contact our customer support team at [Contact Information] within the warranty period. Provide proof of purchase and a detailed description of the issue. RollnDrive reserves the right to request additional information or documentation to assess the validity of the warranty claim.

                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>5. Warranty Remedies</h2>
                    <p style={styles.paragraph}>
                        If the warranty claim is deemed valid, RollnDrive will, at its discretion:
                    </p>
                    <ul>
                        <li>Repair the defective product.
                        </li>
                        <li>Replace the defective product with a new or refurbished unit.
                        </li>
                        <li>Provide a refund or credit for the purchase price of the defective product.</li>
                    </ul>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>6. Limitation of Liability</h2>
                    <p style={styles.paragraph}>
                        RollnDrives liability under this warranty is limited to the repair, replacement, or refund of the defective product as specified in these Warranty Terms. RollnDrive is not liable for any indirect, consequential, or incidental damages.
                    </p>
                </section>
                <section style={styles.section}>
                    <h2 style={styles.subtitle}>7. Changes to Warranty Terms</h2>
                    <p style={styles.paragraph}>
                        RollnDrive reserves the right to update or modify these Warranty Terms at any time without prior notice. Changes will be effective immediately upon posting on the website.
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "800px",
        margin: "90px auto",
        marginBottom: 0,
        padding: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: "30px",
        marginBottom: "20px",
        textAlign: "center",
    },
    subtitle: {
        fontSize: "22px",
        marginBottom: "12px",
        color: "var(--text-color-ink)",
    },
    paragraph: {
        fontSize: "16px",
        marginBottom: "12px",
        lineHeight: "1.5",
        color: "#777",
    },
    section: {
        marginBottom: "40px",
    },
    list: {
        paddingLeft: "20px",
        color: "#777",
        listStyleType: "circle"
    },
};

export default WarrantyPolicy;
