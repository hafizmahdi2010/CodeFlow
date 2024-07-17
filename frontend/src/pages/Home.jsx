import React from 'react'
import { ReactTerminal } from 'react-terminal';

const Home = () => {
  const commands = {
    whoami: "jackharper",
    cd: (directory) => `changed path to ${directory}`
  };

  return (
    <>
      <ReactTerminal
        commands={commands}
        theme="vs-dark"
      />
      {/* <Editor height="50%" defaultLanguage="javascript"  defaultValue="// some comment" /> */}
    </>
  )
}

export default Home