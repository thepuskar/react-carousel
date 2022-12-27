import './App.css'

import { ScrollingCarousel, Carousel } from 'components'

function App() {
  const uuid = crypto.randomUUID()
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
        <p>Swipeable Carousel</p>
        <Carousel
          show={3.5}
          slide={3}
          swiping={true}
          className='swipe-slider'
          hideArrows={true}
        >
          <div className='swipe-item'>Slide 1</div>
          <div className='swipe-item'>Slide 2</div>
          <div className='swipe-item'>Slide 3</div>
          <div className='swipe-item'>Slide 4</div>
          <div className='swipe-item'>Slide 5</div>
          <div className='swipe-item'>Slide 6</div>
          <div className='swipe-item'>Slide 7</div>
          <div className='swipe-item'>Slide 8</div>
          <div className='swipe-item'>Slide 9</div>
          <div className='swipe-item'>Slide 10</div>
          <div className='swipe-item'>Slide 11</div>
          <div className='swipe-item'>Slide 12</div>
        </Carousel>
      </div>
      <div className='app-container'>
        <p>Scrolling Carousel</p>
        <ScrollingCarousel
          className='scroll-slider'
          rightIcon={<></>}
          leftIcon={<></>}
        >
          {items?.map((item) => (
            <div className='item' key={item + uuid}>
              {item}
            </div>
          ))}
        </ScrollingCarousel>
      </div>
    </div>
  )
}

export default App
