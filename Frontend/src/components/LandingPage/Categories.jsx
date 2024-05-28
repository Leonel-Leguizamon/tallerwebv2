import React from 'react'
import { sedan, suv, van, pickup, sport } from '../../assets'
import { Link } from 'react-router-dom'
const Categories = () => {
  return (
    <div id="Cars" className='flex flex-col my-3 items-center mx-10 ' >
        <div className='flex flex-col items-center'>
            <span className="bg-gradient-to-r from-color-lightblue to-color-violet text-transparent font-poppins text-5xl font-semibold bg-clip-text py-2">Your adventure, your choice</span>
            <h1 className='font-poppins font-normal text-2xl text-color-stronggray py-2'>Find the one that best suits you</h1>
        </div>
        <div className='flex flex-wrap justify-center w-full my-8'>
            <CategoryCard catName={'Sedan'} catPhoto={sedan} catPrice={'$39/day'}/>
            <CategoryCard catName={'SUV'} catPhoto={suv} catPrice={'$50/day'}/>
            <CategoryCard catName={'Pickup'} catPhoto={pickup} catPrice={'$69/day'}/>
            <CategoryCard catName={'Sport'} catPhoto={sport} catPrice={'$89/day'}/>
            <CategoryCard catName={'Van'} catPhoto={van} catPrice={'$79/day'}/>
        </div>
    </div>
  )
}

export default Categories

function CategoryCard({catName, catPhoto, catPrice}) {
    return (
    <div className='category-card group items-end bg-cover bg-center' 
    style={{backgroundImage: `url(${catPhoto})`}}>
        <div className='flex flex-row justify-between w-full p-4 items-end'>
            <div className='flex-col flex'>
                <h1 className='font-poppins font-bold text-3xl text-white'>{catName}</h1>
                <h1 className='font-poppins font-normal text-xl text-white group-hover:inline whitespace-nowrap group-hover:scale-100 hidden scale-0 bottom-0 transition-all duration-700'>Starts from {catPrice}</h1>
            </div>
            <Link 
            className='blue-btn group-hover:scale-100 scale-0 transition-all duration-300 bg-white/20 hover:bg-white hover:text-color-black border-white text-white'
            to={`/rent?type=${catName}`}
            >
                View all
            </Link>
        </div>
    </div>);
}
  