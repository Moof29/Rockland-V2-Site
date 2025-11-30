import Image from 'next/image';
import styles from './history.module.css';

export default function HistoryPage() {
    return (
        <main className={styles.historyPage}>
            <section className={styles.hero}>
                <div className={styles.heroImageWrapper}>
                    <Image
                        src="https://www.rocklandbakery.com/images/about_us_history.jpg"
                        alt="Rockland Bakery History"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                    <div className={styles.heroOverlay} />
                </div>
                <div className="container relative z-10">
                    <h1 className={styles.heroTitle}>Our History</h1>
                    <p className={styles.heroSubtitle}>
                        Four decades of baking excellence
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>1980s</div>
                            <div className={styles.timelineContent}>
                                <h3>The Beginning</h3>
                                <p>Rockland Bakery opened its doors in Nanuet, New York, with a simple mission: provide fresh, quality baked goods to the community.</p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>1990s</div>
                            <div className={styles.timelineContent}>
                                <h3>Expansion Begins</h3>
                                <p>As demand grew, we expanded our operations and began distributing throughout the New York metropolitan area.</p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>2000s</div>
                            <div className={styles.timelineContent}>
                                <h3>Regional Growth</h3>
                                <p>Opened additional distribution centers in Brooklyn, Albany, and New Jersey to better serve the Northeast.</p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>2010s</div>
                            <div className={styles.timelineContent}>
                                <h3>Pennsylvania Expansion</h3>
                                <p>Extended our reach into Pennsylvania with new facilities in Allentown and Stroudsburg.</p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>Today</div>
                            <div className={styles.timelineContent}>
                                <h3>Premium Bakery of the Northeast</h3>
                                <p>Over 100 trucks, 6 distribution centers, and thousands of daily customers. Still staying true to "Always Fresh."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.legacySection}`}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Our Legacy</h2>
                    <p className={styles.legacyText}>
                        For over 40 years, we've maintained our commitment to quality, freshness, and exceptional service. Every product that leaves our bakery carries the tradition of excellence that has made Rockland Bakery a trusted name throughout the Northeast.
                    </p>
                </div>
            </section>
        </main>
    );
}
