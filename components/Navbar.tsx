import Link from 'next/link';
import styles from './Navbar.module.css';
import { ShoppingBag, Menu, Search } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <img src="/logo.png" alt="Rockland Bakery" className={styles.logoImage} />
                </Link>

                <div className={styles.links}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/menu" className={styles.link}>Menu</Link>
                    <Link href="/about" className={styles.link}>About</Link>
                    <Link href="/store" className={styles.link}>Locations</Link>
                    <Link href="/contact" className={styles.link}>Contact</Link>
                </div>

                <div className={styles.actions}>
                    <button className={styles.iconBtn} aria-label="Search">
                        <Search size={20} />
                    </button>
                    <button className={styles.iconBtn} aria-label="Cart">
                        <ShoppingBag size={20} />
                    </button>
                    <button className={styles.menuBtn} aria-label="Menu">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </nav>
    );
}
