import Image from 'next/image';
import styles from './contact.module.css';

export default function ContactPage() {
    return (
        <main className={styles.contactPage}>
            <section className={styles.hero}>
                <div className={styles.heroImageWrapper}>
                    <Image
                        src="https://www.rocklandbakery.com/images/_header-contact-us.png"
                        alt="Contact Rockland Bakery"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                    <div className={styles.heroOverlay} />
                </div>
                <div className="container relative z-10">
                    <h1 className={styles.heroTitle}>Contact Us</h1>
                    <p className={styles.heroSubtitle}>
                        We'd love to hear from you
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.contactGrid}>
                        <div className={styles.contactInfo}>
                            <h2 className={styles.sectionTitle}>Get In Touch</h2>
                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>📍</div>
                                <div className={styles.infoContent}>
                                    <h3>Location</h3>
                                    <p>Nanuet, New York<br />Just outside New York City</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>📞</div>
                                <div className={styles.infoContent}>
                                    <h3>Phone</h3>
                                    <p>Contact us for wholesale inquiries</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>🕒</div>
                                <div className={styles.infoContent}>
                                    <h3>Business Hours</h3>
                                    <p>Open Daily<br />Delivering fresh baked goods</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>🐦</div>
                                <div className={styles.infoContent}>
                                    <h3>Follow Us</h3>
                                    <a href="https://twitter.com/RocklandBakery" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                        @RocklandBakery
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.mapPlaceholder}>
                            <div className={styles.mapContent}>
                                <p className={styles.mapText}>Located in Nanuet, NY</p>
                                <p className={styles.mapDesc}>Serving the Northeast for over 40 years</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
