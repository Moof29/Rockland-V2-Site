import Image from 'next/image';
import styles from './store.module.css';

export default function StorePage() {
    return (
        <main className={styles.storePage}>
            <section className={styles.hero}>
                <div className={styles.heroImageWrapper}>
                    <Image
                        src="https://www.rocklandbakery.com/images/_header-our-store.png"
                        alt="Rockland Bakery Store"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                    <div className={styles.heroOverlay} />
                </div>
                <div className="container relative z-10">
                    <h1 className={styles.heroTitle}>Our Distribution Network</h1>
                    <p className={styles.heroSubtitle}>
                        Serving the Northeast with fresh baked goods daily
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className={styles.sectionTitle}>Distribution Centers</h2>
                    <p className={styles.intro}>
                        Rockland Bakery is one of the largest bakeries in the Northeast. With over 100 trucks on the road and six strategically located distribution centers, we ensure fresh products reach our customers every day.
                    </p>

                    <div className={styles.centersGrid}>
                        <div className={styles.centerCard}>
                            <div className={styles.centerIcon}>📍</div>
                            <h3 className={styles.centerName}>Nanuet, NY</h3>
                            <p className={styles.centerDesc}>Main Production Facility</p>
                        </div>
                        <div className={styles.centerCard}>
                            <div className={styles.centerIcon}>📍</div>
                            <h3 className={styles.centerName}>Brooklyn, NY</h3>
                            <p className={styles.centerDesc}>Metro Distribution</p>
                        </div>
                        <div className={styles.centerCard}>
                            <div className={styles.centerIcon}>📍</div>
                            <h3 className={styles.centerName}>Albany, NY</h3>
                            <p className={styles.centerDesc}>Upstate Distribution</p>
                        </div>
                        <div className={styles.centerCard}>
                            <div className={styles.centerIcon}>📍</div>
                            <h3 className={styles.centerName}>Pennsauken, NJ</h3>
                            <p className={styles.centerDesc}>New Jersey Distribution</p>
                        </div>
                        <div className={styles.centerCard}>
                            <div className={styles.centerIcon}>📍</div>
                            <h3 className={styles.centerName}>Allentown, PA</h3>
                            <p className={styles.centerDesc}>Pennsylvania Distribution</p>
                        </div>
                        <div className={styles.centerCard}>
                            <div className={styles.centerIcon}>📍</div>
                            <h3 className={styles.centerName}>Stroudsburg, PA</h3>
                            <p className={styles.centerDesc}>Pocono Region</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.coverageSection}`}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Service Area</h2>
                    <p className={styles.coverageText}>
                        We deliver as far north as the <strong>Massachusetts border</strong> and as far south as <strong>Delaware</strong>, including:
                    </p>
                    <ul className={styles.areaList}>
                        <li>Metro New York</li>
                        <li>Connecticut</li>
                        <li>Philadelphia</li>
                        <li>Albany</li>
                        <li>Harrisburg</li>
                        <li>Lehigh Valley</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
