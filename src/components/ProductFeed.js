import React from 'react'
import Product from './Product'

const ProductFeed = ({ products }) => {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 mx-auto'>
      {products.slice(0, 4).map(({id, title, price, description, category, image }) => (
       <Product
       key={id}
       title={title}
       id={id}
       price={price}
       image={image}
       category={category}
       description={description}
       />

    ))}
    <img className='md:col-span-full' src="https://links.papareact.com/dyz" alt="" />

    <div className='md:col-span-2'>
    {products.slice(4, 5).map(({id, title, price, description, category, image }) => (
      <Product
       key={id}
       title={title}
       price={price}
       id={id}
       image={image}
       category={category}
       description={description}
       />

    ))}
      </div>

      {products.slice(4, products.length).map(({id, title, price, description, category, image }) => (
      <Product
       key={id}
       title={title}
       price={price}
       image={image}
       id={id}
       category={category}
       description={description}
       />

    ))} 

</div>
)
}
export default ProductFeed