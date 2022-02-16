import shopData from '../../assets/shop_data.json';
import { CollectionRow } from '../../components/collection-row/collection-row';

export const Shop = () =>
  shopData.map(({ id, ...restProps }) => <CollectionRow {...restProps} />);
