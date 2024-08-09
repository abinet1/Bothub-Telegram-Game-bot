import './App.css'
import {Button, Dropdown} from './components/button'

function App() {
  return (
    <>
      <Dropdown text={'Choose country'} options={[{
            'label': 'USA',
            'value': 'usa'
        },{
            'label': 'USA',
            'value': 'usa'
        },{
            'label': 'USA',
            'value': 'usa'
        },{
            'label': 'USA',
            'value': 'usa'
        },{
            'label': 'USA',
            'value': 'usa'
        },
      ]}/>
    </>
  )
}

export default App
