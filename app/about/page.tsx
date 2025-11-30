import Image from 'next/image';
import styles from './about.module.css';

export default function AboutPage() {
    return (
        <main className={styles.aboutPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroImageWrapper}>
                    <Image
                        src="https://www.rocklandbakery.com/images/_header-about-us.png"
                        alt="Rockland Bakery About Us"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                    <div className={styles.heroOverlay} />
                </div>
                <div className="container relative z-10">
                    <h1 className={styles.heroTitle}>Premium Bakery of the Northeast</h1>
                    <p className={styles.heroSubtitle}>
                        Over 40 years of baking excellence
                    </p>
                </div>
            </section>

            {/* History Section */}
            <section className={`section ${styles.historySection}`}>
                <div className="container">
                    <div className={styles.historyGrid}>
                        <div className={styles.historyImageWrapper}>
                            <Image
                                src="https://www.rocklandbakery.com/images/about_us_history.jpg"
                                alt="Rockland Bakery History"
                                width={800}
                                height={600}
                                className={styles.historyImage}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                        <div className={styles.historyContent}>
                            <h2 className={styles.sectionTitle}>Our History</h2>
                            <p className={styles.paragraph}>
                                Rockland Bakery was established over 75 years ago as a small retail bakery in Rockland County, New York. In 1986, the <strong>Battaglia Family</strong> purchased the bakery. The family of 5 brothers and their father used their experience, combined talents, and passion for baking to mold the bakery into what it is today: <strong>The Premier Bakery in the Northeast</strong>.
                            </p>
                            <p className={styles.paragraph}>
                                Starting with just one small bakery and one truck, we have grown exponentially. Today, we operate <strong>5 baking facilities</strong> in the NY & NJ area and possess a fleet of over <strong>100 vehicles</strong> delivering fresh baked products across six states.
                            </p>
                            <p className={styles.paragraph}>
                                Through strategic acquisitions including <em>Pechter’s Bakery</em> (2006), <em>Sabrett Baking</em> (2010), and <em>Voila Sweets</em> (2011), we have expanded our capabilities to provide an unrivaled product line. We are the only true one-stop-shop bakery in the country.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Content */}
            <section className="section">
                <div className="container">
                    <div className={styles.content}>
                        <div className={styles.textContent}>
                            <h2 className={styles.sectionTitle}>Always Fresh</h2>
                            <p className={styles.paragraph}>
                                Rockland Bakery is the <strong>Premium Bakery of the Northeast</strong>. We are located in Nanuet, New York, just outside of New York City. Rockland Bakery is known for providing the highest quality freshly baked products at affordable prices with always exceptional service.
                            </p>
                            <p className={styles.paragraph}>
                                Since opening our doors for business over 40 years ago, we have stayed true to our mantra of <strong>"Always Fresh"</strong>. Every product that leaves our bakery is made with the finest ingredients and traditional baking methods that have been perfected over generations.
                            </p>
                            <p className={styles.paragraph}>
                                Our commitment to quality and freshness has made us one of the most trusted bakeries in the region, serving thousands of customers daily with pride and dedication.
                            </p>
                        </div>

                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>40+</div>
                                <div className={styles.statLabel}>Years in Business</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>100+</div>
                                <div className={styles.statLabel}>Delivery Trucks</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>6</div>
                                <div className={styles.statLabel}>Distribution Centers</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>1000s</div>
                                <div className={styles.statLabel}>Daily Customers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className={`section ${styles.missionSection}`}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Our Mission</h2>
                    <p className={styles.missionText}>
                        To provide the highest quality freshly baked products at affordable prices with exceptional service, staying true to our tradition of excellence that has served the Northeast for over four decades.
                    </p>
                </div>
            </section>
        </main>
    );
}
