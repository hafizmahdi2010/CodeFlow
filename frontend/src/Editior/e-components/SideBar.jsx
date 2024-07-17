import React from 'react'
import { DiCss3Full } from 'react-icons/di'
import {  FaHtml5 } from 'react-icons/fa'
import { FcFolder } from 'react-icons/fc'
import { IoLogoJavascript } from 'react-icons/io5'
import { VscChevronDown, VscChevronRight, VscCollapseAll, VscDebugAltSmall, VscExtensions, VscFiles, VscNewFile, VscNewFolder, VscRefresh, VscSearch, VscSettingsGear, VscSourceControl } from 'react-icons/vsc'

const SideBar = () => {
  return (
    <>
      <div className="sideBar w-[20vw] bg-[#1f1f1f] flex">
        <div className="sideBarTabs h-full w-[70px] bg-zinc-800 border-t-[2px] flex flex-col items-center border-t-zinc-900"> 

        <div className="tab text-2xl hover:text-white mt-5 cursor-pointer"><VscFiles /></div>
        <div className="tab text-2xl hover:text-white mt-[40px] cursor-pointer"><VscSearch /></div>
        <div className="tab text-2xl hover:text-white mt-[40px] cursor-pointer"><VscSourceControl /></div>
        <div className="tab text-2xl hover:text-white mt-[40px] cursor-pointer"><VscDebugAltSmall /></div>
        <div className="tab text-2xl hover:text-white mt-[40px] cursor-pointer"><VscExtensions /></div>
        <div className="tab text-2xl hover:text-white mt-[auto] mb-6 cursor-pointer"><VscSettingsGear /></div>

        </div>

        <div className="files w-full p-[10px]">
        <div className='flex items-center w-full justify-between'>
          <b className='text-[13px]'>EXPLORER</b>

          <div className="icons flex items-center gap-[5px] ">
            <i className="icon font-semibold cursor-pointer p-[3px] hover:bg-zinc-700 rounded-md"><VscNewFile /></i>
            <i className="icon font-semibold cursor-pointer p-[3px] hover:bg-zinc-700 rounded-md"><VscNewFolder /></i>
            <i className="icon font-semibold cursor-pointer p-[3px] hover:bg-zinc-700 rounded-md"><VscRefresh /></i>
            <i className="icon font-semibold cursor-pointer p-[3px] hover:bg-zinc-700 rounded-md"><VscCollapseAll /></i>
          </div>


        </div>

         <div className="filesList mt-[10px]">
         <div className="folder gap-[5px]"><i><VscChevronRight /></i> <i><FcFolder /></i> Images</div>
        <div className="file gap-[5px]"><i><FaHtml5 /></i> index.html</div>
        <div className="file gap-[5px]"><i><DiCss3Full /></i> style.css</div>
        <div className="file gap-[5px]"><i><IoLogoJavascript/></i> script.js</div>
         </div>
        </div>
      </div>
    </>
  )
}

export default SideBar