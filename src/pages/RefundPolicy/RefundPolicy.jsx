import Footer from "../../components/Footer/Footer";
import MyNavbar from "../../components/Navbar/MyNavbar";

const RefundPolicy = () => {
    return (
        <div>
            <MyNavbar />
            <div style={styles.container}>
                <h1 style={styles.title}>Refund Policy</h1>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>1. Refund Eligibility</h2>
                    <p style={styles.paragraph}>
                        We want you to be fully satisfied with your purchase. If you are not satisfied, we are here to help.
                    </p>
                    <p style={styles.paragraph}>
                        To be eligible for a refund, please ensure the following conditions are met:
                    </p>
                    <ul style={styles.list}>
                        <li>The item must be unused and in the same condition as received.</li>
                        <li>The item must be in the original packaging.</li>
                        <li>Proof of purchase is required.</li>
                        <li>Refund requests must be made within 30 days of the purchase date.</li>
                    </ul>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>2. Refund Process</h2>
                    <p style={styles.paragraph}>
                        Follow these steps to initiate the refund process:
                    </p>
                    <ol style={styles.list}>
                        <li>Contact our customer support team within 30 days of your purchase.</li>
                        <li>Provide your order number and a detailed explanation of the reason for the refund.</li>
                        <li>Our team will guide you through the return process if applicable.</li>
                        <li>Once your return is received and inspected, we will notify you of the approval or rejection of your refund.</li>
                        <li>If approved, your refund will be processed, and a credit will be automatically applied to your original method of payment within a certain number of days.</li>
                    </ol>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>3. Non-Refundable Items</h2>
                    <p style={styles.paragraph}>
                        Certain items are non-refundable, including gift cards, downloadable software products, and personalized or customized items.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>4. Cancellation Policy</h2>
                    <p style={styles.paragraph}>
                        You may cancel your order within 24 hours of purchase for a full refund. Cancellation requests made after 24 hours will be subject to our standard refund policy.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>5. Damaged or Defective Items</h2>
                    <p style={styles.paragraph}>
                        If you receive a damaged or defective item, please contact our customer support team immediately for assistance.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>6. Contact Us</h2>
                    <p style={styles.paragraph}>
                        If you have any questions about our Refund Policy, please contact us at support@rollndrive.com.
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

export default RefundPolicy;

