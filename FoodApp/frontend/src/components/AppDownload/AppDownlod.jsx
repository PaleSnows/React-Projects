import React from 'react'
import { assets } from '../../assets/assets'

const AppDownlod = () => {
  return (
    <div className='mx-[200px] mt-10'>
        <p className='font-semibold text-5xl text-center pt-[80px]'>For Better Expirence Download <br /> Tomato App</p>
        <div className='flex justify-center mt-5 p-5 pb-[60px] gap-5'>
            <img className='w-[180px] hover:scale-125 duration-300' src={assets.play_store} alt="" />
            <img className='w-[180px] hover:scale-125 duration-300' src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownlod