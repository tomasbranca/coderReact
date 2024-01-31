import { Item } from "./Item/Item";

const itemList = ({ products }) => {
  return products.map((prod) => {
    return <Item key={prod.id} {...prod} />;
  });
};

export default itemList;
