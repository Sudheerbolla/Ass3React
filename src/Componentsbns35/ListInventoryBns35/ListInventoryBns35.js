import React, { useState, useEffect } from "react"
import { fetchInventory, addItemToCart } from "../../Servicesbns35/ApiServicesBns35"

function ListInventoryBns35() {

    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetchInventory().then(json => {
                setInventory(json);
                setLoading(false);
            }).catch(err => {
                console.log("response error");
                console.error(err)
                setError(err);
            })
    }, [])

    async function addItem(e) {
        await addItemToCart(e.target.value);
        refreshPage();
    }

    function refreshPage() {
        window.location.reload(false);
        // this.forceUpdate();
    }

    if (loading) return (<div className="alert alert-info">Please stand by while we connect your call....</div>)
    if (error) return (<div className="alert alert-danger">There was an error loading...</div>)

    return (
        <div className="row border-dark border rounded">
            <div className="container col-sm-8 col-md-8 border border-danger rounded">
            <table className="table">
                <thead>
                    <tr>
                        <th>SKU</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                    {inventory.map((inventoryItem, key) => (
                        <tr key={key}>
                            <td>{inventoryItem.sku}</td>
                            <td>{inventoryItem.name}</td>
                            <td>{inventoryItem.quantity}</td>
                            <td>{"$ "+inventoryItem.price}</td>
                            <td><button className="alert-danger alert" onClick={addItem} disabled={inventoryItem.quantity<=0} value={inventoryItem.sku}>{inventoryItem.quantity>0?"ADD":"OUT OF STOCK"}</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            </div>
            </div>)
}

export default ListInventoryBns35