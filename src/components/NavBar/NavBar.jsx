import classes from './NavBar.module.css'
import Button from './Button/Button'
import CartWidget from './CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav>
            <div className={classes.main}>
                <section>
                    <h1 className={classes.title}>Barg Shoes</h1> 
                    <h5 className={classes.title}>Tienda de zapatillas</h5>
                </section>   
                <section>
                    <Button label={'Últimos Ingresos'} />
                    <Button label={'Sneakers'} />
                    <Button label={'Basketball'} />
                    <Button label={'Running'} />
                </section>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar