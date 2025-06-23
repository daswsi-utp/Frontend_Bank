'use client'; 

import { useRef, useEffect } from 'react';
import styles from '../../styles/components/Card3D.module.css'; 

export default function Card3D() {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const card = cardRef.current;
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 20;
      const y = (e.clientY - top - height / 2) / 20;
      
      card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    const card = cardRef.current;
    card.addEventListener('mousemove', handleMouseMove);
    
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={styles.cardContainer}>
      <div ref={cardRef} className={styles.card}>
        <div className={styles.cardFront}>
          <div className={styles.cardLogo}>BankNet</div>
          <div className={styles.cardNumber}>•••• •••• •••• 4242</div>
          <div className={styles.cardFooter}>
            <span className={styles.cardName}>XXXXX XXXXXX XXXXX XXXXX</span>
            <span className={styles.cardExpiry}>09/28</span>
          </div>
        </div>
      </div>
    </div>
  );
}