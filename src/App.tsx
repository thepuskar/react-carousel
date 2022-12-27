import './App.css'

import { ScrollingCarousel } from 'components'

function App() {
  const items = [
    'Slide 1',
    'Slide 2',
    'Slide 3',
    'Slide 4',
    'Slide 5',
    'Slide 6',
    'Slide 7',
    'Slide 8',
    'Slide 9',
    'Slide 10',
    'Slide 11',
    'Slide 12'
  ]
  return (
    <div className='app'>
      <div className='app-container'>
        <ScrollingCarousel
          className='scroll-slider'
          rightIcon={<></>}
          leftIcon={<></>}
        >
          {items?.map((item) => (
            <div className='item' key='item'>
              {item}
            </div>
          ))}
        </ScrollingCarousel>
      </div>
    </div>
  )
}

export default App
