export async function fetchInventory()  {
    return fetch(`${process.env.REACT_APP_FETCH_INVENTORY_URL}`,
    {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }).then (response => response.json())
}

export async function fetchCart()  {
    return fetch(`${process.env.REACT_APP_CART_URL}`,
    {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }).then (response => response.json())
}

export async function checkout()  {
    return fetch(`${process.env.REACT_APP_CHECKOUT_URL}`,
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }).then (response => response.json())
}

export async function addItemToCart(request)  {
    const jsonRequest={"sku":request}
    const requestData = JSON.stringify(jsonRequest)
    console.log("called api"+requestData);
    return fetch(`${process.env.REACT_APP_CART_URL}`,
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: requestData
    }).then (response => response.json())
}

export async function deleteItemFromCart(request)  {
    const jsonRequest={"sku":request}
    const requestData = JSON.stringify(jsonRequest)
    return fetch(`${process.env.REACT_APP_CART_URL}`,
    {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: requestData
    }).then (response => response.json())
}