import Footer from "../../components/Footer/Footer";
import MyNavbar from "../../components/Navbar/MyNavbar";

const ShippingPolicy = () => {
    return (
        <div>
            <MyNavbar />
            <div style={styles.container}>
                <h1 style={styles.title}>Shipping Policy</h1>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>1. Shipping Time</h2>
                    <p style={styles.paragraph}>
                        All orders are processed within [insert processing time] business days. Delivery times vary based on your location and selected shipping method.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>2. Shipping Rates</h2>
                    <p style={styles.paragraph}>
                        Shipping charges for your order will be calculated and displayed at checkout. We offer various shipping options to choose from.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>3. Order Tracking</h2>
                    <p style={styles.paragraph}>
                        Once your order is shipped, you will receive a tracking number via email, allowing you to track the progress of your delivery.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>4. International Shipping</h2>
                    <p style={styles.paragraph}>
                        We offer international shipping to select countries. Customs and import duties may be applied to international orders when the shipment reaches its destination. Such charges are the responsibility of the recipient and vary from country to country.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>5. Lost or Damaged Items</h2>
                    <p style={styles.paragraph}>
                        We are not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier or our support team directly to file a claim.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>6. Contact Us</h2>
                    <p style={styles.paragraph}>
                        If you have any questions about our Shipping Policy, please contact us at support@rollndrive.com.
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

export default ShippingPolicy;
