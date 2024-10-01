import React from 'react'
import './RelatedProduct.css'
import data_product from '../Assets/data'
import Item from '../Items/Item'

function RelatedProduct() {
  return (
    <div className='relatedProduct'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-items">
          {data_product.map((item,i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}n old_price={item.old_price}/>
          })}
        </div>
    </div>
  )
}

export default RelatedProduct