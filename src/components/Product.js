const Product = (props) => {
    return (
        <div className="row align-items-center border-bottom pt-3">
            <p className="col-2 mb-2">{props.pName}</p>
            <p className="col-8 mb-2">{props.pDescription}</p>
            <p className="col-2 mb-2">$ {props.pPrice}</p>
        </div>
    )
}

export default Product