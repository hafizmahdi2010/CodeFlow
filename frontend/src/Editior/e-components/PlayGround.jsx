import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'
import { DiCss3Full } from 'react-icons/di'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { HiMiniComputerDesktop } from 'react-icons/hi2'
import { IoLogoHtml5, IoMdRefresh } from 'react-icons/io'
import { IoArrowBack, IoArrowForward, IoLogoJavascript, IoPlayOutline } from 'react-icons/io5'
import { MdOpenInFull } from 'react-icons/md'
import { VscTerminalPowershell } from 'react-icons/vsc'

const PlayGround = () => {

  const [isFullScreenCodeEditior, setIsFullScreenCodeEditior] = useState(false);

  return (
    <>
      <div className="flex playground">
        <div className={`code-editior ${isFullScreenCodeEditior ? "w-full" : "w-[55%]"}`}>
          <div className='top-tab-bar-con w-full h-[35px] flex items-center justify-between px-[5px] bg-[#1e1e1e] text-white'>
            <div className="tabs flex items-center gap-[5px]">
              <div className="tab text-[13px] p-[3px] border-[1.5px] border-zinc-500 px-[10px] flex items-center gap-[5px] cursor-pointer"><i><IoLogoHtml5 /></i> index.html</div>
              <div className="tab text-[13px] p-[3px] border-[1.5px] border-zinc-500 px-[10px] flex items-center gap-[5px] cursor-pointer"><i><DiCss3Full /></i> style.css</div>
              <div className="tab text-[13px] p-[3px] border-[1.5px] border-zinc-500 px-[10px] flex items-center gap-[5px] cursor-pointer"><i><IoLogoJavascript /></i> script.js</div>
            </div>

            <div className="icons ml-auto mr-2 flex items-center gap-[5px]">
              <i className='mr-2 cursor-pointer text-[gray] hover:text-white' onClick={() => { setIsFullScreenCodeEditior(!isFullScreenCodeEditior) }}><MdOpenInFull /></i>
              <button className="btnBlue"><IoPlayOutline /> Run</button>
            </div>
            <div className="icons flex items-center gap-[5px]"></div>
          </div>
          <Editor height="100%" theme='vs-dark' className='p-[5px]' defaultLanguage="html" defaultValue="<body></body>" />
        </div>

        {
          isFullScreenCodeEditior === false ?
            <div className="code-prev w-[50%] bg-white">
              <div className="broswer-head w-full h-[75px] bg-[#1F1F1F] pl-4">
                <div className="broser-windows-tabs-con flex items-center justify-between gap-[5px]">
                  <div className="browser-windows-tabs flex items-center gap-[5px]">
                    <div className="window-tab flex items-center gap-[5px] text-[13px] cursor-pointer px-[10px] py-[5px] border-x-[1.5px] border-zinc-500"><HiMiniComputerDesktop /> Web View</div>
                    <div className="window-tab flex items-center gap-[5px] text-[13px] cursor-pointer px-[10px] py-[5px] border-x-[1.5px] border-zinc-500"><VscTerminalPowershell /> Shell</div>
                  </div>
                </div>
                <div className='flex mt-2 items-center gap-[7px]'>
                  <i className='text-[18px] text-[gray] cursor-pointer'><IoArrowBack /></i>
                  <i className='text-[18px] text-[gray] cursor-pointer'><IoArrowForward /></i>
                  <i className='text-[18px] text-[#fff] cursor-pointer'><IoMdRefresh /></i>

                  <input type="text" className='text-[13px] p-[5px] w-[65%] rounded-[30px]' placeholder='CodeFlow Preview URL...' />

                  <button className='ml-auto text-[13px] p-[3px] px-[10px] mr-3 flex items-center gap-[5px]'><i><HiOutlineExternalLink /></i> New Tab</button>
                </div>
              </div>
            </div> : ""
        }

      </div>
    </>
  )
}

export default PlayGround