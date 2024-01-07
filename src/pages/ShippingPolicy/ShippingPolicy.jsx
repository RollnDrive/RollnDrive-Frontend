import Footer from "../../components/Footer/Footer";
import MyNavbar from "../../components/Navbar/MyNavbar";

const ShippingPolicy = () => {
    return (
        <div>
            <MyNavbar />
            <div style={styles.container}>
                <h1 style={styles.title}>Shipping Policy</h1>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>1. Order Processing Time</h2>
                    <p style={styles.paragraph}>
                        Orders placed on our website will be processed within [number of business days, e.g., 2 business days] from the date of purchase. Processing includes order verification, quality checks, and packaging.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>2. Shipping Timeframes</h2>
                    <p style={styles.paragraph}>
                        Our standard shipping time is typically 2-4 weeks from the date of order. However, please note that shipping times may vary based on factors such as product availability, destination location, customs processing, and other unforeseen circumstances.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>3. Extended Shipping Times</h2>
                    <p style={styles.paragraph}>
                        While we strive to meet our standard shipping times, please be aware that in certain situations, shipping times may be extended. At the time of order placement, it might be possible for the shipping period to extend up to 8 weeks. This extended timeframe is rare but can occur due to factors beyond our control.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>4. Tracking Information</h2>
                    <p style={styles.paragraph}>
                        Once your order has been shipped, you will receive a shipping confirmation email containing tracking information. This information allows you to track the progress of your shipment and estimate its arrival date.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>5. Shipping Costs</h2>
                    <p style={styles.paragraph}>
                        Shipping costs are calculated based on the weight of your order and the destination address. The applicable shipping costs will be displayed during the checkout process.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>6. International Shipping</h2>
                    <p style={styles.paragraph}>
                        RollnDrive offers international shipping to various destinations. Please note that additional customs fees, taxes, or import duties may apply and are the responsibility of the recipient.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>7. Address Accuracy</h2>
                    <p style={styles.paragraph}>
                        It is the responsibility of the customer to provide accurate shipping information. RollnDrive is not liable for any delays or additional costs resulting from inaccurate or incomplete shipping addresses.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>8. Order Status and Inquiries</h2>
                    <p style={styles.paragraph}>
                        To inquire about the status of your order or if you have any questions related to shipping, please contact our customer support team at [Contact Information].
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>9. Changes to Shipping Policy</h2>
                    <p style={styles.paragraph}>
                        RollnDrive reserves the right to update or modify this Shipping Policy at any time without prior notice. Changes will be effective immediately upon posting on the website.
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

export default ShippingPolicy;
