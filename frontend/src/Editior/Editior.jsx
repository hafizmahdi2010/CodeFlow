import React from 'react'
import Editor from '@monaco-editor/react';
import Navbar from './e-components/Navbar';
import SideBar from './e-components/SideBar';
import PlayGround from './e-components/PlayGround';

const Editior = ({ project, language }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SideBar />
        <PlayGround/>
      </div>
      {/* <Editor height="90vh" defaultLanguage="javascript" theme='vs-dark' defaultValue="// some code..." /> */}
    </>
  )
}

export default Editior