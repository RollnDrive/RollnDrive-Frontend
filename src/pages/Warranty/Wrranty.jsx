import Footer from "../../components/Footer/Footer";
import MyNavbar from "../../components/Navbar/MyNavbar";

const WarrantyPolicy = () => {
    return (
        <div>
            <MyNavbar />
            <div style={styles.container}>
                <h1 style={styles.title}>Warranty Policy</h1>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>1. Warranty Coverage</h2>
                    <p style={styles.paragraph}>
                        Our products are covered by a [insert duration] warranty from the date of purchase. This warranty covers defects in materials and workmanship under normal use.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>2. Exclusions</h2>
                    <p style={styles.paragraph}>
                        The warranty does not cover damage caused by accident, misuse, abuse, neglect, unauthorized modifications, or any other factors beyond normal use.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>3. Claim Process</h2>
                    <p style={styles.paragraph}>
                        To make a warranty claim, please follow these steps:
                    </p>
                    <ol style={styles.list}>
                        <li>Contact our customer support team with your proof of purchase and a detailed description of the issue.</li>
                        <li>Our team will guide you through the claim process, which may include providing photos or returning the product.</li>
                        <li>Once your claim is approved, we will repair or replace the product at our discretion.</li>
                    </ol>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>4. Limitations</h2>
                    <p style={styles.paragraph}>
                        The warranty is non-transferable and covers only the original purchaser. It does not extend to any subsequent or other owner or transferee of the product.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>5. Contact Us</h2>
                    <p style={styles.paragraph}>
                        If you have any questions about our Warranty Policy, please contact us at support@rollndrive.com.
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
        margin: "80px auto",
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
