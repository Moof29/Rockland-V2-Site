import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import ProductCard from './ProductCard';
import styles from './MenuGrid.module.css';

async function getProducts() {
    const filePath = path.join(process.cwd(), 'public/data/products.json');
    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const products = JSON.parse(fileContents);
        // Filter out duplicates or invalid images if needed
        return products.filter((p: any) => p.imageUrl && !p.imageUrl.includes('undefined'));
    } catch (error) {
        console.error('Error reading products:', error);
        return [];
    }
}

interface MenuGridProps {
    limit?: number;
}

export default async function MenuGrid({ limit }: MenuGridProps) {
    const products = await getProducts();

    // If limit is provided, show a mixed selection (flattened)
    if (limit) {
        const displayProducts = products.slice(0, limit);
        return (
            <section id="menu" className={`section ${styles.menuSection}`}>
                <div className="container">
                    <div className="text-center">
                        <h2 className={styles.heading}>Featured Selection</h2>
                        <p className={styles.subheading}>A taste of our fresh daily bakes.</p>
                    </div>

                    <div className={`grid md:grid-cols-3 md:grid-cols-4 ${styles.grid}`}>
                        {displayProducts.map((product: any, index: number) => (
                            <ProductCard key={`featured-${index}`} product={product} />
                        ))}
                    </div>

                    <div className={styles.viewAll}>
                        <Link href="/menu" className={styles.viewAllBtn}>View Full Menu</Link>
                    </div>
                </div>
            </section>
        );
    }

    // Otherwise, group by category for the full menu page
    const productsByCategory = products.reduce((acc: any, product: any) => {
        const category = product.category || 'Other';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {});

    // Define logical order for categories
    const categoryOrder = ['Breads', 'Rolls', 'Brioche', 'Bagels', 'Cakes', 'Pies', 'Pastries', 'Other'];

    const categories = Object.keys(productsByCategory).sort((a, b) => {
        const indexA = categoryOrder.indexOf(a);
        const indexB = categoryOrder.indexOf(b);
        // If both are in the list, sort by index
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        // If only a is in the list, it comes first
        if (indexA !== -1) return -1;
        // If only b is in the list, it comes first
        if (indexB !== -1) return 1;
        // Otherwise sort alphabetically
        return a.localeCompare(b);
    });

    return (
        <section className={`section ${styles.menuSection}`}>
            <div className="container">
                <div className={`text-center ${styles.stickyHeader}`}>
                    <h2 className={styles.heading}>Our Full Menu</h2>
                    <p className={styles.subheading}>Baked fresh daily using traditional recipes.</p>
                </div>

                <div className={styles.menuLayout}>
                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        <h3 className={styles.sidebarTitle}>Categories</h3>
                        <nav className={styles.sidebarNav}>
                            <ul>
                                {categories.map((category) => (
                                    <li key={category}>
                                        <a href={`#${category.replace(/\s+/g, '-').toLowerCase()}`} className={styles.sidebarLink}>
                                            {category}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <div className={styles.mainContent}>
                        {categories.map((category) => (
                            <div key={category} id={category.replace(/\s+/g, '-').toLowerCase()} className={styles.categorySection}>
                                <h3 className={styles.categoryTitle}>{category}</h3>
                                <div className={`grid md:grid-cols-3 ${styles.grid}`}>
                                    {productsByCategory[category].map((product: any, index: number) => (
                                        <ProductCard key={`${category}-${index}`} product={product} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
