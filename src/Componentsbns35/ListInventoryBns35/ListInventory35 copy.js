// import React, { useState, useEffect } from "react"
// import { getCars, deleteCar, addCar } from "../../Services/carService"

// function ListInventoryBns35() {

//     //State (store the cars, store the state)
//     const [cars, setCars] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [action, setAction] = useState();
//     const [newCar, setNewCar] = useState();

//     const [dummy, reload] = useState(false);

//     //When the component loads go and get a list of cars
//     useEffect(() => {
//         getCars()
//             .then(json => {
//                 setCars(json);
//                 setLoading(false);
//             })
//             .catch(err => {
//                 console.error(err)
//                 setError(err);
//             })
//     }
//         , [])

//     function refreshPage() {
//         window.location.reload(false);
//     }

//     //We have to make this function async because we have to wait for the browser to finish deleting the item before we call a page reload... otherwise the HTTP call will be aborted.
//     async function deleteItem(e) {
//         console.log("Deleting:" + e.target.value);
//         //Wait for it before you refresh the page!
//         await deleteCar(e.target.value);
//         //Reload the page
//         refreshPage();

//     }


//     //Check if there was an error
//     //Check if we are loading
//     if (loading) return (<div className="alert alert-info">Please stand by while we connect your call....</div>)
//     if (error) return (<div className="alert alert-danger">There was an error loading...</div>)

//     return (
//         <div className="row border-dark border rounded">
//             <h1>Here is a list of cars</h1>
//             <div className="container col-sm-8 col-md-8 border border-danger rounded">
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>id (hide from user)</th>
//                         <th>Name</th>
//                         <th>Model</th>
//                         <th>Delete</th>
//                     </tr>

//                 </thead>
//                 <tbody>
//                     {cars.map((car, key) => (
//                         <tr key={key}>
//                             <td>{car.id}</td>
//                             <td>{car.name}</td>
//                             <td>{car.model}</td>
//                             <td><button className="alert-danger alert" onClick={deleteItem} value={car.id}>Delete</button></td>
//                         </tr>
//                     ))

//                     }
//                 </tbody>
//             </table>
//             </div>
//             </div>)
            
// }

// export default ListInventoryBns35