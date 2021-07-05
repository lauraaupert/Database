import React, { Component } from "react";
import AddProductForm from "../components/AddProductForm.js/index";
import ProductTable from "../components/ProductTable"


function AddProduct() {

    return(
        <div>
        <AddProductForm />
        <ProductTable />
        </div>
    )
}

export default AddProduct;