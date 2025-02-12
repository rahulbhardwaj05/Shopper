import React, { useContext } from 'react'
import './Css/ShopCatogery.css'
import all_product from '../Components/Assets/all_product';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item';


function ShopCategory(props) {

  // console.log("category ==> ",props.category)
   
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
       <img className='shopcategory-banner' src={props.banner} alt="" />
       <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1- 12 </span>Out of 36 Products
        </p>
        <div className="shopCategory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
       </div>
       <div className="shopcategory-products">
        {all_product.map((item,i) => {
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}n old_price={item.old_price}/> 
          }
          else{
            return null
          }
        })}
   
       </div>
       <div className="shopcategory-loadmore">
        Explore More
       </div>
    </div>
  )
}

export default ShopCategory;