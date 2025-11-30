import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay} />
            <div className={`container ${styles.content}`}>
                <h1 className={styles.title}>
                    Artisan Baking <br />
                    <span className={styles.highlight}>Since 1940</span>
                </h1>
                <p className={styles.subtitle}>
                    Experience the taste of tradition with our freshly baked breads, pastries, and cakes.
                    Made with love in Rockland.
                </p>
                <div className={styles.buttons}>
                    <Link href="#menu" className={styles.primaryBtn}>
                        View Our Menu
                    </Link>
                    <Link href="#contact" className={styles.secondaryBtn}>
                        Visit Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
