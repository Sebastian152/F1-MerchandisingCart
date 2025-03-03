import type { Product } from "../types"

type ProductProps = {
    product : Product, 
    addToCart : (item:Product) => void
}

export default function Product( { product , addToCart } : ProductProps) {

    const {id, name, image, description, price } = product

    return (
        <div id={`${id}`} className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.avif`} alt="product image" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">${price}</p>
                <button 
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addToCart(product)}
                >Add to cart</button>
            </div>
        </div>
    )
}
