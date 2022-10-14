import React, { useState } from "react";


const ProductForm = (props) => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const productNameChangeHandler = (event) => {
        setProductName(event.target.value);
    }
    const productDescriptionChangeHandler = (event) => {
        setProductDescription(event.target.value);
    }
    const productPriceChangeHandler = (event) => {
        setProductPrice(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const productDetails = {
            productName: productName,
            productDescription: productDescription,
            productPrice: productPrice
        }

        props.onSubmit(productDetails);

        setProductName('');
        setProductDescription('');
        setProductPrice('');
    }


    return (
        <div className="bg-secondary p-4 my-3 rounded-3">
            <form onSubmit={submitHandler}>
                <div className="row mt-1 mb-3">
                    <div className="col-6 form-group">
                        <input type="text" value={productName} className="form-control" placeholder="Enter Product Name" onChange={productNameChangeHandler} />
                    </div>
                    <div className="col-6 form-group">
                        <input type="number" value={productPrice} className="form-control" placeholder="Enter Product Price" onChange={productPriceChangeHandler} />
                    </div>
                </div>
                <div className="my-3">
                    <div className="form-group">
                        <textarea className="form-control" value={productDescription} id="productDescription" rows="3" placeholder="Enter Product Details" onChange={productDescriptionChangeHandler} />
                    </div>
                </div>
                <div className="text-end mt-3">
                    <button type="submit" className="btn btn-primary rounded-3">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ProductForm;