
import Footer from "../../components/Footer/Footer";
import MyNavbar from "../../components/Navbar/MyNavbar";

const TermsOfService = () => {
    return (
        <div>
            <MyNavbar />
            <div style={styles.container}>
                <h1 style={styles.title}>Terms of Service</h1>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>1. Acceptance of Terms</h2>
                    <p style={styles.paragraph}>
                        By accessing or using the RollnDrive website Site, products, or services, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use our Site or services.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>2. Use of Our Site</h2>
                    <p style={styles.paragraph}>
                        You must be at least 18 years old to use our Site. You agree to use the Site and services for lawful purposes only and in accordance with these Terms.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>3. Intellectual Property</h2>
                    <p style={styles.paragraph}>
                        All content on the RollnDrive Site, including but not limited to text, images, graphics, logos, and software, is the property of RollnDrive and is protected by copyright, trademark, and other intellectual property laws.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>4. Product Information</h2>
                    <p style={styles.paragraph}>
                        RollnDrive manufactures gearboxes and motor-driven rollers. Product descriptions and specifications on the Site are subject to change without notice. We make reasonable efforts to ensure the accuracy of information, but we do not warrant that product descriptions or other content on the Site are accurate, complete, reliable, current, or error-free.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>5. Ordering and Payment</h2>
                    <p style={styles.paragraph}>
                        If you wish to purchase products through our Site, you may be asked to provide certain information relevant to your purchase, including your credit card number, the expiration date of your credit card, your billing address, and your shipping information. You represent and warrant that you have the legal right to use any credit card or other payment method utilized in connection with any transaction.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>6. Shipping and Delivery</h2>
                    <p style={styles.paragraph}>
                        Shipping and delivery of our products are subject to the terms and conditions outlined in our Shipping Policy, which can be found on our Site.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>7. Returns and Refunds</h2>
                    <p style={styles.paragraph}>
                        Our return and refund policy is outlined in our Returns Policy, which can be found on our Site.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>8. Privacy Policy</h2>
                    <p style={styles.paragraph}>
                        Our Privacy Policy, available on our Site, explains how we collect, use, and protect your personal information.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>9. Limitation of Liability</h2>
                    <p style={styles.paragraph}>
                        RollnDrive shall not be liable for any indirect, special, incidental, consequential, or punitive damages, including but not limited to loss of profits, business interruption, or loss of data, arising out of or in connection with the use or performance of the Site or our products.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>10. Governing Law</h2>
                    <p style={styles.paragraph}>
                        These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located within [Your Jurisdiction].
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>11. Changes to Terms</h2>
                    <p style={styles.paragraph}>
                        RollnDrive reserves the right to update or modify these Terms at any time without prior notice. Changes will be effective immediately upon posting on the Site. Your continued use of the Site after the posting of any modifications constitutes acceptance of the updated Terms.
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
};

export default TermsOfService;
