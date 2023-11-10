import Cart from './Cart';
import { ShimmerPostItem } from "react-shimmer-effects";

function List () {
   return (
    <>
        <div className='row mt-3'>
            <div className='col-3'>
                <Cart />
            </div>
            <div className='col-3'>
                <ShimmerPostItem card title text cta />
            </div>
            <div className='col-3'>
                <Cart />
            </div>
            <div className='col-3'>
                <ShimmerPostItem card title text cta />
            </div>
        </div>
        <div className="row mt-3">
            <div className='col-3'>
                <ShimmerPostItem card title text cta />
            </div>
            <div className='col-3'>
                <Cart />
            </div>
            <div className='col-3'>
                <ShimmerPostItem card title text cta />
            </div>
            <div className='col-3'>
                <Cart />
            </div>
        </div>
    </>
   );
}

export default List;