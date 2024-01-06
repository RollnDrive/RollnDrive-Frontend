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
                        By accessing or using our services, you agree to comply with and be bound by these Terms of Service.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>2. Use of Services</h2>
                    <p style={styles.paragraph}>
                        You agree to use our services only for lawful purposes and in a way that does not infringe on the rights of others or restrict their use.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>3. Privacy Policy</h2>
                    <p style={styles.paragraph}>
                        Your use of our services is also governed by our Privacy Policy. Please review the policy to understand our practices.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>4. Modifications to Services</h2>
                    <p style={styles.paragraph}>
                        We reserve the right to modify or discontinue our services at any time without notice. We are not liable to you or any third party for any modifications or discontinuation of services.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>5. Governing Law</h2>
                    <p style={styles.paragraph}>
                        These terms are governed by and construed in accordance with the laws of [Your Country], and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.subtitle}>6. Contact Us</h2>
                    <p style={styles.paragraph}>
                        If you have any questions about our Terms of Service, please contact us at support@rollndrive.com.
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

export default TermsOfService;
