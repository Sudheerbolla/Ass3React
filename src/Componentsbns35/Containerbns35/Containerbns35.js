import React, { useState, useEffect } from "react"

import ListCartBns35 from "../ListCartBns35/ListCartBns35"
import ListInventoryBns35 from "../ListInventoryBns35/ListInventoryBns35"

function Containerbns35() {

    return (
        <div className="row border-dark border rounded">
            <h1>Assignment #3 - Bolla Naga Sudheer(300322835)</h1>
            <div className="container col-sm-8 col-md-8 border border-danger rounded">
                <ListInventoryBns35 />
                <ListCartBns35 />
            </div>
        </div>
    )

}
//                 <ListCartBns35 />

export default Containerbns35

// import React, { useState, useEffect } from "react"
// import { fetchInventory, fetchCart, checkout, addItemToCart, deleteItemFromCart } from "../../Servicesbns35/ApiServicesBns35"

// import Outputbns35 from "../Outputbns35/Outputbns35"
// import Inputbns35 from "../Inputbns35/Inputbns35"

// function Containerbns35() {

//     const [data, setData] = useState({"data_bns_35":3,"talktime_bns_35":200});
//     const [output, setOutput] = useState({"message":""});

//     async function checkdata(e) {
//         await fetchThePlan(data).then(json =>{
//             setOutput(json);
//             console.log(json);
//         }).catch(err => {
//             console.error(err)
//         });
//     }

//     function setDataVal(e) {
//         setData({
//             ...data,
//             [e.target.id]: e.target.value
//         })
//     }

//     return (
//         <div className="row border-dark border rounded">
//             <h1>Assignment #3 - Bolla Naga Sudheer(300322835)</h1>
//             <div className="container col-sm-8 col-md-8 border border-danger rounded">
//                 <Inputbns35 action={checkdata} check={setDataVal}  />
//             </div>
//             <Outputbns35 response={output} /> 
//         </div>
//     )

// }

// export default Containerbns35