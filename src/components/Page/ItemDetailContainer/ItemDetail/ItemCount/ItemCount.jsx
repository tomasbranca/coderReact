import { classes } from "./ItemCount.module.css";
import { useState } from "react";

const ItemCount = ({ onAdd, ...sizeStock }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const stockPerSize = Object.fromEntries(
    Object.entries(sizeStock).map(([key, value]) => [key, Number(value)])
  );
  const initialQuantity = stockPerSize[selectedSize] > 0 ? 1 : 0;
  const [quantity, setQuantity] = useState(initialQuantity);

  const increment = () => {
    if (quantity < stockPerSize[selectedSize]) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > initialQuantity) {
      setQuantity(quantity - 1);
    }
  };

  const selectSize = (size) => {
    setSelectedSize(size);
    setQuantity(stockPerSize[size] > 0 ? 1 : 0);
  };

  return (
    <div>
      <div className={classes.count}>
        <div onClick={decrement} className={classes.iconContainer}>
          <img
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/filled-minus-2-math.png"
            alt="filled-minus-2-math"
          />
        </div>
        <div>
          <span className={classes.quantity}>{quantity}</span>
        </div>
        <div onClick={increment} className={classes.iconContainer}>
          <img
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/filled-plus-2-math.png"
            alt="filled-plus-2-math"
          />
        </div>
      </div>
      <div className={classes.sizesPanelContainer}>
        {Object.keys(sizeStock)
          .sort((a, b) => parseFloat(a) - parseFloat(b))
          .map(
            (size) =>
              stockPerSize[size] > 0 && (
                <div
                  key={size}
                  onClick={() => selectSize(size)}
                  className={`${classes.sizeItem} ${
                    selectedSize === size ? classes.selectedsize : ""
                  }`}
                >
                  {size}
                </div>
              )
          )}
      </div>
      <button
        onClick={() => onAdd(quantity, selectedSize)}
        disabled={!initialQuantity}
        className={classes.addButton}
      >
        Agregar
      </button>
    </div>
  );
};

export default ItemCount;
