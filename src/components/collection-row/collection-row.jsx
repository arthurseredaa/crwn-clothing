import { Link } from 'react-router-dom';
import { CollectionItem } from '../collection-item/collection-item';

import styles from './collection-row.module.scss';

export const CollectionRow = (data) => {
  const { title, routeName, items } = data;

  const itemsToShow = items.slice(0, 4); // show only 4 items

  return (
    <div className={styles.collectionRow}>
      <Link to={routeName} className={styles.rowTitleLink}>
        <h4 className={styles.rowTitle}>{title}</h4>
      </Link>

      <div className={styles.row}>
        {itemsToShow.map(({ id, ...restProps }) => (
          <CollectionItem key={id} {...restProps} />
        ))}
      </div>
    </div>
  );
};
