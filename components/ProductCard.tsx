'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './ProductCard.module.css';
import { Plus } from 'lucide-react';

interface Product {
    name: string;
    category: string;
    imageUrl: string;
}

export default function ProductCard({ product }: { product: Product }) {
    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            <div className={styles.imageWrapper}>
                <Image
                    src={product.imageUrl || 'https://placehold.co/600x400?text=No+Image'}
                    alt={product.name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.overlay}>
                    <button className={styles.addBtn}>
                        <Plus size={24} />
                    </button>
                </div>
            </div>
            <div className={styles.info}>
                <span className={styles.category}>{product.category}</span>
                <h3 className={styles.name}>{product.name}</h3>
            </div>
        </motion.div>
    );
}
