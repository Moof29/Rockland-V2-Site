import Image from 'next/image';
import Link from 'next/link';
import styles from './ordering.module.css';

export default function OrderingPage() {
    return (
        <main className={styles.orderingPage}>
            <section className={styles.hero}>
                <div className={styles.heroImageWrapper}>
                    <Image
                        src="https://www.rocklandbakery.com/images/_header-ordering-online.png"
                        alt="Ordering Online"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                    <div className={styles.heroOverlay} />
                </div>
                <div className="container relative z-10">
                    <h1 className={styles.heroTitle}>Ordering Information</h1>
                    <p className={styles.heroSubtitle}>
                        Fresh baked goods delivered to your business
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={styles.sectionTitle}>Wholesale Orders</h2>
                        <p className={styles.intro}>
                            Rockland Bakery serves businesses throughout the Northeast with daily deliveries of fresh baked products. We work  with restaurants, cafes, hotels, supermarkets, and food service providers.
                        </p>

                        <div className={styles.infoGrid}>
                            <div className={styles.infoCard}>
                                <div className={styles.cardIcon}>🚚</div>
                                <h3>Daily Deliveries</h3>
                                <p>Fresh products delivered daily to ensure maximum freshness and quality.</p>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.cardIcon}>📋</div>
                                <h3>Wide Selection</h3>
                                <p>Choose from our extensive catalog of breads, rolls, bagels, pastries, cakes, and more.</p>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.cardIcon}>💼</div>
                                <h3>Business Accounts</h3>
                                <p>Set up a wholesale account for convenient ordering and competitive pricing.</p>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.cardIcon}>📞</div>
                                <h3>Contact Sales</h3>
                                <p>Speak with our sales team to discuss your specific needs and set up an account.</p>
                            </div>
                        </div>

                        <div className={styles.ctaSection}>
                            <h3>Ready to Order?</h3>
                            <p>Get in touch with our sales team to set up your wholesale account.</p>
                            <Link href="/contact" className={styles.ctaButton}>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
