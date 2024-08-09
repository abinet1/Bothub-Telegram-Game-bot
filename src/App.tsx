import React from 'react'
import { TutorialScreens, WelcomeScreen, WelcomeScreenThree, WelcomeScreenTwo } from './pages'
import { Modal } from './components'

function App() {
  const [isOpen, setIsOpen] = React.useState(0)
  const [isOpenModel, setIsOpenModel] = React.useState(false)
  return (
    <>
      {isOpen===1&&
        <WelcomeScreen />}
      {isOpen===2&&
        <WelcomeScreenTwo />}
      {isOpen===3&&
        <WelcomeScreenThree />}
      {isOpen===4&&
      <TutorialScreens />}
      {isOpen===5&&
        <>
          <button
            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setIsOpen(priv=>priv+1)}
          >
            Open regular modal
          </button>
          <Modal 
            isOpen={isOpenModel} 
            onClose={()=>{
              setIsOpen(1)
              setIsOpenModel(false)
            }}
          />
          <button
            className="absolute bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setIsOpen(priv=>priv+1)}
          >
            Open regular modal
          </button>
        </>
      }
    </>
  )
}

export default App
