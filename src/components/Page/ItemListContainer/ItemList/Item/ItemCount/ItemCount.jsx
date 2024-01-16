import classes from "./ItemCount.module.css"
import { useState } from "react";

const ItemCount = ({initial, stock, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > initial) {
            setQuantity(quantity-1)
        }
    }
    return (
        <div>
            <div className={classes.count}>
                <div className={classes.minus}>
                    <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/filled-minus-2-math.png" alt="filled-minus-2-math" onClick={decrement}/>
                </div>
                <span className={classes.quantity}>{quantity}</span>
                <div className={classes.plus}>
                    <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/filled-plus-2-math.png" alt="filled-plus-2-math" onClick={increment}/>
                </div>
            </div>
            <button className={classes.addCart} onClick={() => onAdd(quantity)} disabled= {!stock} >Agregar</button>
        </div>
    );
};

export default ItemCount