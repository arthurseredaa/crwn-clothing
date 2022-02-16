import styles from './collection-item.module.scss';

export const CollectionItem = ({ name, imageUrl, price }) => {
  return (
    <div className={styles.card}>
      <button className={styles.button}>add to cart</button>
      <div className={styles.image_wrapper}>
        <img src={imageUrl} alt={name} className={styles.image} />
      </div>
      <div className={styles.item_details}>
        <span>{name}</span> <span>${price}</span>
      </div>
    </div>
  );
};
