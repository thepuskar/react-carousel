import './App.css'

import { Carousel as OwnCarousel } from 'components'
import { Carousel } from '@trendyol-js/react-carousel'

function App() {
  return (
    <div className='app'>
      <div className='app-container'>
        <Carousel
          show={3}
          slide={3}
          swiping={true}
          className='slider'
          hideArrows={true}
        >
          <div className='slide'>Slide 1</div>
          <div className='slide'>Slide 2</div>
          <div className='slide'>Slide 3</div>
          <div className='slide'>Slide 4</div>
          <div className='slide'>Slide 5</div>
          <div className='slide'>Slide 6</div>
          <div className='slide'>Slide 7</div>
          <div className='slide'>Slide 8</div>
          <div className='slide'>Slide 9</div>
          <div className='slide'>Slide 10</div>
          <div className='slide'>Slide 11</div>
          <div className='slide'>Slide 12</div>
        </Carousel>
      </div>
      <div className='app-container'>
        <OwnCarousel
          show={3}
          slide={3}
          swiping={true}
          className='slider'
          hideArrows={true}
        >
          <div className='slide'>Slide 1</div>
          <div className='slide'>Slide 2</div>
          <div className='slide'>Slide 3</div>
          <div className='slide'>Slide 4</div>
          <div className='slide'>Slide 5</div>
          <div className='slide'>Slide 6</div>
          <div className='slide'>Slide 7</div>
          <div className='slide'>Slide 8</div>
          <div className='slide'>Slide 9</div>
          <div className='slide'>Slide 10</div>
          <div className='slide'>Slide 11</div>
          <div className='slide'>Slide 12</div>
        </OwnCarousel>
      </div>
    </div>
  )
}

export default App
