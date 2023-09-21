import Image from 'next/image';
import styles from './Card.module.css';
import Link from 'next/link';

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, cum!
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          dolorem quod ducimus culpa atque rem eaque, dolore amet blanditiis
          consectetur cumque corrupti labore ipsa incidunt architecto enim
          molestiae, natus ipsam.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}
