import Image from 'next/image';
import Link from 'next/link';
import styles from './donations.module.css';

export default function DonationsPage() {
    return (
        <main className={styles.donationsPage}>
            <section className={styles.hero}>
                <div className={styles.heroImageWrapper}>
                    <Image
                        src="https://www.rocklandbakery.com/images/_header-donations.png"
                        alt="Community Donations"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                    <div className={styles.heroOverlay} />
                </div>
                <div className="container relative z-10">
                    <h1 className={styles.heroTitle}>Community Involvement</h1>
                    <p className={styles.heroSubtitle}>
                        Giving back to the communities we serve
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={styles.sectionTitle}>Donation Requests</h2>
                        <p className={styles.intro}>
                            Rockland Bakery is proud to support local communities, schools, charitable organizations, and events throughout the Northeast. We believe in giving back and helping make our communities stronger.
                        </p>

                        <div className={styles.guidelinesCard}>
                            <h3>Donation Guidelines</h3>
                            <ul className={styles.guidelinesList}>
                                <li>We primarily support organizations within our service area</li>
                                <li>Requests should be submitted at least 3 weeks in advance</li>
                                <li>We consider requests for fundraisers, charity events, and community programs</li>
                                <li>Due to high demand, we cannot fulfill all requests</li>
                            </ul>
                        </div>

                        <div className={styles.ctaSection}>
                            <h3>Submit a Request</h3>
                            <p>For donation requests, please contact us with details about your organization and event.</p>
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
