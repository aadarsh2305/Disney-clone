import React from 'react'
import disney from './../assets/Images/disney.png'
import marvel from './../assets/Images/marvel.png'
import nationalG from './../assets/Images/nationalG.png'
import pixar from './../assets/Images/pixar.png'
import starwar from './../assets/Images/starwar.png'

import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import nationalGeographicV from './../assets/Videos/national-geographic.mp4'
import pixarV from './../assets/Videos/pixar.mp4'
import starWarV from './../assets/Videos/star-wars.mp4'

function ProductionHouse() {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:marvel,
            video:marvelV
        },
        {
            id:3,
            image:nationalG,
            video:nationalGeographicV
        },
        {
            id:4,
            image:pixar,
            video:pixarV
        },
        {
            id:5,
            image:starwar,
            video:starWarV
        },
    ]
  return (
    <div className='flex gap-5 p-2 px-5 md:px-16'>
        {productionHouseList.map((item)=>(
            <div className='border-[2px] border-gray-600 rounded-lg'>
                <img src={item.image} className='w-full'/>
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse