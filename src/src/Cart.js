import './App.css';

function Cart() {
  return (
      <div className="card">
          <div className='card-header p-0'>
              <img src="http://192.168.15.214/my-app/public/assets/image/bird.jpg" className="card-image"></img>
          </div>

          <div className='card-body'>
            <div className='card-product-name'>
                Product Name
            </div>

            <div className=''>UI product card template for web site. Design with interface elements, button and text for shopping products and adding to the</div>

            <div className='d-flex justify-content-between'>
              <h5 className="text-muted">1 X 250 ml</h5>
              <h4>$4.99</h4>
            </div>

            <div className='d-flex justify-content-between text-muted'>
              <span className='card-qty-button'>
                <h4 className='minus'> - </h4> 
                <h4 className='qty-count'>1</h4>
                <h4 className='plus'>+</h4>
              </span>
              <span className='card-add-to-card'>
                <button className='add-to-card'>
                  add to cart
                </button>
              </span>
            </div>
          </div>
      </div>
  );
}

export default Cart;
