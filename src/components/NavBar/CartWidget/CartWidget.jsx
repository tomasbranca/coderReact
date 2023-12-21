import cart from './assets/cart.png'

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="" />
            <p>0</p>
        </div>
    )
}

export default CartWidget