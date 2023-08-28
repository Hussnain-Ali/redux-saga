import { addToCart,removeFromCart,emptyCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import { productListing } from '../redux/productAction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData)
  console.log(data)
  //   const removeItemsHandler = (itemID) => {
//    dispatch(removeFromCart(itemID))
//  }
  useEffect(() => {
   dispatch(productListing()) 
  },[])
  return (
    <div className='App'>
     
     
      <div>
      <button onClick={()=> dispatch(emptyCart())}> Empty cart</button>
      </div>
      
      <div className='product-container'>
        {
          data.map((item) => <div key={item.id} className='product-item'>
            <img src={item.photo} alt='photos' />
            <div>Name:{item.name} </div>
            <div>Color:{item.color} </div>
            <div>Price:{item.price} </div>
            <div>Category:{item.category} </div>
            <div>Brand:{item.brand} </div>
            <div>
               <button onClick={()=> dispatch(addToCart(item))}> Add To Cart</button>
               <button onClick={()=> dispatch(removeFromCart(item.id))}> remove Items</button>

            </div>
          </div>
          )
        }
      </div>
    </div>
  );
}

export default Main;
