import React, { useState, useEffect } from "react"
import { fetchCart, checkout, deleteItemFromCart } from "../../Servicesbns35/ApiServicesBns35"

function ListCartBns35() {

    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetchCart()
            .then(json => {
                setCart(json);
                setLoading(false);
                var totalVal = 0;
                json.forEach(element => {
                    totalVal = totalVal + (element.quantity * element.price);
                });
                setTotal(totalVal);
            })
            .catch(err => {
                console.error(err)
                setError(err);
            })
            getPrice();
    }, [])

    function refreshPage() {
        window.location.reload(false);
        getPrice();
        // this.forceUpdate();
    }

    async function deleteItem(e) {
        await deleteItemFromCart(e.target.value);
        refreshPage();
    }

    async function performCheckout(e) {
        await checkout();
        refreshPage();
    }

    function getPrice() {
        var totalVal = 0;
        console.log("getPrice:" + cart.length);
        cart.forEach(element => {
            totalVal = totalVal + (element.quantity * element.price);
        });
        console.log("getPrice:" + totalVal);
        setTotal(totalVal);
    }

    if (loading) return (<div className="alert alert-info">Cart is Empty</div>)
    if (error) return (<div className="alert alert-danger">Cart is Empty</div>)

    return (
        <div className="row border-dark border rounded">
            <div className="container col-sm-8 col-md-8 border border-danger rounded">
            <table className="table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, key) =>
                        (
                        <tr key={key}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{"$ "+ item.quantity*item.price}</td>
                            <td><button className="alert-danger alert" onClick={deleteItem} value={item.sku}>Delete</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            <label>{total}</label>
            <button className="alert-danger alert" onClick={performCheckout}>Checkout</button>
            </div>
            </div>)
            
}

export default ListCartBns35