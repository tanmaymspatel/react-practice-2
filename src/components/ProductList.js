import Product from "./Product";

const ProductList = (props) => {

    return (
        <div className="p-4 shadow rounded-3">
            {
                props.items.map((product) => {
                    return (
                        <Product
                            key={product?.pID}
                            pName={product?.productName}
                            pDescription={product?.productDescription}
                            pPrice={product?.productPrice}
                        />)
                })
            }
        </div>
    )
}

export default ProductList