import { useEffect, useState, useMemo } from "react"
import { db } from "../data/db"
export const useCart = () => {
    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
      }
      const [products] = useState(db)
      const [cart, setCart] = useState(initialCart)
    
      const MAX_PRODUCTS_CART = 5
      const MIN_PRODUCTS_CART = 1
    
      function addToCart(product) {
        const productExists = cart.findIndex(item => product.id === item.id)
        if(productExists >= 0) {
          if (cart[productExists].quantity >= MAX_PRODUCTS_CART) return
          const updatedCart = [...cart]
          updatedCart[productExists].quantity++
          setCart(updatedCart)
        } else {
          product.quantity = 1
          setCart([...cart, product])
        }
      }
    
      function removeFromCart(id) {
        setCart(prevCart => prevCart.filter(product => product.id !== id))
      }
    
      function increaseQuantity(id) {
        const updatedCart = cart.map( product => {
          if (product.id === id && product.quantity < MAX_PRODUCTS_CART) {
            return {
              ...product,
              quantity: product.quantity + 1
            }
          }
          return product
        })
        setCart(updatedCart)
      }
    
      function decreaseQuantity(id) {
        const updatedCart = cart.map( product => {
          if (product.id === id && product.quantity > MIN_PRODUCTS_CART) {
            return {
              ...product,
              quantity: product.quantity - 1
            }
          }
          return product
        })
        setCart(updatedCart)
      }
    
      function clearCart() {
        setCart([])
      }

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
    
      useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
      }, [cart])
    return {
        products,
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }   
}