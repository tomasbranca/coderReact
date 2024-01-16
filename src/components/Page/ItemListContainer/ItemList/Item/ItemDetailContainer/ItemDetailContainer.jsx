import Swal from "sweetalert2";
import classes from "./ItemDetailContainer.module.css";

const ItemDetailContainer = ({brand, name, model, category, id, img}) => {
  const showDetails = () => {
      Swal.fire({
        title: `${brand} ${name} - ${category}`,
        text: `${model}`,
        imageUrl: img,
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: name,
        footer: `ID del producto: ${id}`,
    });
  };

  return (
    <button className={classes.detailsButton} onClick={showDetails}>
      Detalles
    </button>
  );
};

export default ItemDetailContainer;
