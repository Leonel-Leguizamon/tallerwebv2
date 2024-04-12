import React from 'react'
import { chevrolet, fiat, ford, renault, toyota, vw } from '../assets'

const Partnership = () => {
  return (
    <div className='flex flex-col items-center mt-24 py-10'>
        <h1 className='font-poppins font-semibold text-color-stronggray text-2xl mb-4'>
            In partnership with
        </h1>
        <div className='flex flex-row items-center w-full justify-between max-w-[1400px]'>
            <img src={renault} className='hover:scale-110 ease-in-out duration-200'/>
            <img src={ford} className='hover:scale-110 ease-in-out duration-200'/>
            <img src={fiat} className=' hover:scale-110 ease-in-out duration-200'/>
            <img src={toyota} className=' hover:scale-110 ease-in-out duration-200'/>
            <img src={chevrolet} className=' hover:scale-110 ease-in-out duration-200'/>
            <img src={vw} className=' hover:scale-110 ease-in-out duration-200'/>
        </div>
    </div>
  )
}

export default Partnership