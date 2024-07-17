import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { FaCodeFork } from 'react-icons/fa6'
import { IoMdSettings, IoMdShare } from 'react-icons/io'
import { TbWorldUpload } from 'react-icons/tb'

const Navbar = () => {
  return (
    <>
      <div className="flex w-full h-[40px] bg-zinc-800 px-[30px] items-center justify-between">
        <div className="left flex items-center gap-[20px]">
          <h1 className="text-white text-[15px] ">CodeFlow</h1>
          <div className="btns ml-3 flex items-center gap-[25px]">
            <p className='text-[13px] font-[700] cursor-pointer'>File</p>
            <p className='text-[13px] font-[700] cursor-pointer'>Edit</p>
            <p className='text-[13px] font-[700] cursor-pointer'>Selection</p>
            <p className='text-[13px] font-[700] cursor-pointer'>View</p>
            <p className='text-[13px] font-[700] cursor-pointer'>Go</p>
            <p className='text-[13px] font-[700] cursor-pointer'>Help</p>
          </div>
        </div>
        <div className="center w-fit">
          <p className='text-[gray]'>Mahdi/ <span className='text-white'>27s-aw-1s-a7ts</span></p>
        </div>
        <div className="right flex items-center gap-[20px]">
          <i className='w-[7px] h-[7px] mb-2 m-0 p-0 cursor-pointer hover:text-white'><IoMdSettings /></i>
          <i className='w-[7px] h-[7px] mb-2 m-0 p-0 cursor-pointer hover:text-white'><FaPlus /></i>
         
          <button className="btnBlue m-0"><IoMdShare /> Share</button>
          <button className="btnOutline -ml-2"><FaCodeFork /> Fork</button>
          <button className="btnBlue -ml-2"><TbWorldUpload /> Publish</button>
        </div>
      </div>
    </>
  )
}

export default Navbar