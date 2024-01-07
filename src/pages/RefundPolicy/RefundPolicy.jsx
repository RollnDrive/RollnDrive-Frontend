import Footer from "../../components/Footer/Footer";
import MyNavbar from "../../components/Navbar/MyNavbar";

const RefundPolicy = () => {
    return (
        <div>
            <MyNavbar />
            <div style={styles.container}>
                <h1 style={styles.title}>Refund Policy</h1>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>1. No Refunds</h2>
                    <p style={styles.paragraph}>
                        RollnDrive does not offer refunds on any purchases. All sales are final. Please ensure that you carefully review your order before completing the purchase. If you have any questions or concerns about a product, please contact our customer support team at [Contact Information] before placing an order.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>2. Damaged or Defective Products</h2>
                    <p style={styles.paragraph}>
                        In the rare event that you receive a damaged or defective product, please contact our customer support team within [number of days, e.g., 7 days] of receiving your order. We will work with you to address the issue and, if necessary, provide a replacement or alternative resolution.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>3. Product Descriptions</h2>
                    <p style={styles.paragraph}>
                        While we strive to provide accurate and up-to-date product information on our website, RollnDrive does not warrant that product descriptions or other content on the site are error-free. If you believe that a product you received does not match its description on our website, please contact our customer support team, and we will assist you in resolving the issue.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>4. Cancellation of Orders</h2>
                    <p style={styles.paragraph}>
                        Once an order is placed and confirmed, it cannot be canceled or modified. Please review your order carefully before completing the purchase.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>5. Contact Us</h2>
                    <p style={styles.paragraph}>
                        If you have any questions or concerns regarding our Refund Policy, please contact our customer support team.
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

export default RefundPolicy;
