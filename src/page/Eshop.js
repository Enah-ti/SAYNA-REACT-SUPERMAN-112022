import React from 'react'
import HeroShop from '../components/HeroShop'
import Products from '../components/products'

function Eshop() {
  return (
    <>
    <HeroShop/>
    <div className='Container'>
      <Products/>
    </div>
    </>
  )
}

export default Eshop