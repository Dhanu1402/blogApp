import Image from 'next/image';
import Pagination from '../pagination/Pagination';
import styles from './CardList.module.css';
import Card from '../card/CArd';

export default function CardList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card />
      </div>
      <Pagination />
    </div>
  );
}
