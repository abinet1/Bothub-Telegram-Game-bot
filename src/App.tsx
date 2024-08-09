import React from 'react'

import { TutorialScreens } from './pages'
// import { Modal } from './components' WelcomeScreen,WelcomeScreenTwo, WelcomeScreenThree, 
// import { Dropdown } from './components/button'

function App() {
  // const [isOpen, setIsOpen] = React.useState(false)
  return (
    // <WelcomeScreen />
    // <WelcomeScreenTwo />
    // <WelcomeScreenThree />
    <TutorialScreens />

    // <>
    //   <Dropdown 
    //     placeholder='Choose country' 
    //     options={[
    //       {
    //         'label': 'English',
    //         'value': 'English'
    //       },{
    //           'label': 'Russian',
    //           'value': 'Russian'
    //       },{
    //           'label': 'Japanese',
    //           'value': 'Japanese'
    //       },{
    //           'label': 'Chinese',
    //           'value': 'Chinese'
    //       },{
    //         'label': 'Mexico',
    //         'value': 'Mexico'
    //       },{
    //         'label': 'Canada',
    //         'value': 'Canada'
    //       },
    //     ]}
    //   />
    //   <button
    //     className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    //     type="button"
    //     onClick={() => setIsOpen(true)}
    //   >
    //     Open regular modal
    //   </button>
    //   <Modal isOpen={isOpen} onClose={()=>{setIsOpen(false)}}/>
    // </>
  )
}

export default App
