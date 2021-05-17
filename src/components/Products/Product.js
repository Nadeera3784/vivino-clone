
function Product(props) {
    return (
        <div className="app_product_list">
        {props.products.map(product => { 
            return (
                <div className="app_products_item bg-white shadow-md rounded p-3" key={product.id}>
                <div className="row">
                <div className="col-md-4">
                    <div className="product_image_warapper">
                        <div className="product_image_container d-flex">
                        <img src={product.image} className="product_image"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 pl-3 pl-md-0 mt-3 mt-md-0">
                    <div className="row no-gutters">
                    <div className="col-sm-9">
                        <h4><a href="#" className="text-dark text-5">{product.title}</a></h4>
                        <p className="mb-2">
                            <span className="mr-2">
                            <i className="fa fa-star text-danger"></i>
                            <i className="fa fa-star text-danger"></i>
                            <i className="fa fa-star text-danger"></i>
                            <i className="fa fa-star text-danger"></i>
                            </span>
                            <span className="border rounded-pill text-1 text-nowrap px-2">{product.category}</span>
                        </p>
                        <p className="d-flex align-items-center mb-2 text-4">
                        {product.made}
                        </p>
                        <p className="reviews mb-2">
                            <span className="reviews-score px-2 py-1 rounded font-weight-600 text-light mr-2">4.5</span> 
                            <span className="font-weight-600">Excellent</span> 
                            <a className="text-black-50" href="#">({product.reviews}reviews)</a>
                        </p>
                        <p className="text-danger mb-0">Availability - {product.Availability} bottles in stock</p>
                    </div>
                    <div className="col-sm-3 text-right d-flex d-sm-block align-items-center">
                        <div className="text-danger text-3 mb-0 mb-sm-1 order-2 ">16% Off!</div>
                        <div className="d-block text-3 text-black-50 mb-0 mb-sm-2 mr-2 mr-sm-0 order-1"><del className="d-block">$250</del></div>
                        <div className="text-dark text-7 font-weight-500 mb-0 mb-sm-2 mr-2 mr-sm-0 order-0">$210</div>
                        <a href="#" className="btn btn-red btn-round order-4 ml-auto">Buy Now</a>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            )
        })}
        </div>
    );
}

export default Product;