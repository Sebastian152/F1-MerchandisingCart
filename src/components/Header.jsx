import { useMemo } from "react"

export default function Header( {cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart} ) {

    // Derivated state, this acts as a "dependant state" from another
    const isEmpty = useMemo(() => cart.length === 0, [cart]) //useMemo will optimize rendering
    // The reduce function iterates through the array and accumulates 
    // a final value by applying a function to each element.
    // It takes three arguments:
    // 1. total: The value that accumulates the result.
    // 2. product: The current element being processed.
    // 3. initialValue (optional): The initial value for the total.
    const cartTotal = useMemo( () => cart.reduce((total, product) => total + ( product.quantity * product.price ), 0),
    [cart]) // initialValue = 0
    
    

    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="/img/logo-F1.png" alt="logo image" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div 
                            className="cart"
                        >
                            <img className="img-fluid" src="/img/cart.png" alt="shopping cart image" />

                            <div id="cart" className="bg-white p-3">
                                {
                                isEmpty ? (
                                    <p className="text-center">The cart is empty</p>
                                ) : (
                                <>
                                    <table className="w-100 table">
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map( product => (
                                                <tr key={product.id} id={`product_${product.id}`}>
                                                    <td>
                                                        <img 
                                                            className="img-fluid" 
                                                            src={`/img/${product.image}.avif`} 
                                                            alt="product image" 
                                                        />
                                                    </td>
                                                    <td>{product.name}</td>
                                                    <td className="fw-bold">
                                                            ${product.price}
                                                    </td>
                                                    <td className="flex align-items-start gap-4">
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark"
                                                            onClick={() => decreaseQuantity(product.id)}
                                                        >
                                                            -
                                                        </button>
                                                            {product.quantity}
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark"
                                                            onClick={() => increaseQuantity(product.id)}
                                                        >
                                                            +
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-danger"
                                                            type="button"
                                                            onClick={() => removeFromCart(product.id)}
                                                        >
                                                            X
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <p className="text-end">Total: <span className="fw-bold">${cartTotal}</span></p>
                                    <button 
                                        className="btn btn-dark w-100 mt-3 p-2"
                                        onClick={clearCart}
                                    >Clear cart</button>
                                </>
                                )}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}