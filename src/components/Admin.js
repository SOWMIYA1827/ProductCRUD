import { Routes, Route, Link } from "react-router-dom";

import ProductDetails from "./ProductDetails";
import AddProduct from "./AddProduct";
import Signout from "./Signout";      // Import Signout

import "./Admin.css";

function Admin(props) {

   function saveProducts(product) {
      props.saveProducts(product);
   }

   function deleteProducts(id) {
      props.deleteProducts(id);
   }

   function updateProducts(product) {
      props.updateProducts(product);
   }

   return (

      <div className="admin-container">

         <ul className="admin-menu">

            <li>
               <Link to="">
                  📦 Product Details
               </Link>
            </li>

            <li>
               <Link to="add">
                  ➕ Add Product
               </Link>
            </li>

            <li className="logout-item">
               <Signout />
            </li>

         </ul>

         <div className="admin-content">

            <Routes>

               <Route
                  index
                  element={
                     <ProductDetails
                        products={props.products}
                        deleteProducts={deleteProducts}
                        updateProducts={updateProducts}
                     />
                  }
               />

               <Route
                  path="add"
                  element={
                     <AddProduct
                        saveProducts={saveProducts}
                     />
                  }
               />

            </Routes>

         </div>

      </div>
   );
}

export default Admin;