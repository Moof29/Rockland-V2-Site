import styles from './Footer.module.css';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className={styles.footer} id="contact">
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.col}>
                        <h3 className={styles.heading}>Rockland Bakery</h3>
                        <p className={styles.text}>
                            Baking the finest breads and pastries since 1940. Quality, tradition, and taste in every bite.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink} aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" className={styles.socialLink} aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" className={styles.socialLink} aria-label="Twitter"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <h4 className={styles.subheading}>Contact Us</h4>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <MapPin size={18} className={styles.icon} />
                                <span>94 Demarest Mill Rd, Nanuet, NY 10954</span>
                            </li>
                            <li className={styles.listItem}>
                                <Phone size={18} className={styles.icon} />
                                <span>(845) 623-5800</span>
                            </li>
                            <li className={styles.listItem}>
                                <Mail size={18} className={styles.icon} />
                                <span>info@rocklandbakery.com</span>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4 className={styles.subheading}>Quick Links</h4>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><a href="/about">About Us</a></li>
                            <li className={styles.listItem}><a href="/history">Our History</a></li>
                            <li className={styles.listItem}><a href="/store">Locations</a></li>
                            <li className={styles.listItem}><a href="/ordering">Ordering</a></li>
                            <li className={styles.listItem}><a href="/donations">Donations</a></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4 className={styles.subheading}>Hours</h4>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Mon - Fri: 6:00 AM - 7:00 PM</li>
                            <li className={styles.listItem}>Saturday: 6:00 AM - 7:00 PM</li>
                            <li className={styles.listItem}>Sunday: 6:00 AM - 6:00 PM</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Rockland Bakery. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
