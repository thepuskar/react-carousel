import React, {
  FunctionComponent,
  useCallback,
  useState,
  MouseEvent,
  TouchEvent
} from 'react'
import { ItemProviderProps, SlideDirection } from 'interfaces'
import { getPageX } from 'utils'
import { useWindowWidthChange } from 'hooks'

export const ItemProvider: FunctionComponent<ItemProviderProps> = (
  props: ItemProviderProps
) => {
  const [width, setWidth] = useState(200)
  const ref = useCallback(
    (node: any) => {
      if (node !== null) {
        const calculated = node.getBoundingClientRect().width / props.show
        setWidth(calculated)
        props.widthCallBack(calculated)
      }
    },
    [width]
  )

  // tslint:disable-next-line: no-unused-expression
  props.responsive &&
    useWindowWidthChange((change: number) => {
      setWidth(width - change)
    })
  const [drag, setDrag] = useState({
    initial: props.transform,
    start: 0,
    isDown: false,
    drag: 0,
    finished: true,
    pointers: true
  })
  console.log('drag', drag)
  const handleDragStart = (e: MouseEvent | TouchEvent) => {
    e.persist()
    setDrag({
      ...drag,
      isDown: true,
      start: getPageX(e),
      initial: props.transform,
      finished: false
    })
  }
  const handleDragFinish = (e: MouseEvent | TouchEvent) => {
    e.persist()
    if (drag.finished) {
      return
    }
    if (Math.abs(drag.drag) < width * props.swipeOn) {
      props.dragCallback(props.transform)
      return setDrag({
        initial: props.transform,
        start: 0,
        isDown: false,
        drag: 0,
        finished: true,
        pointers: true
      })
    }

    props.slideCallback(
      drag.drag > 0 ? SlideDirection.Right : SlideDirection.Left
    )
    setDrag({
      ...drag,
      drag: 0,
      isDown: false,
      finished: true,
      pointers: true
    })
    return
  }
  const handleDragMove = (e: MouseEvent | TouchEvent) => {
    e.persist()
    if (!drag.isDown) {
      return
    }
    const pos = getPageX(e)
    setDrag({
      ...drag,
      drag: drag.start - pos,
      pointers: Math.abs(drag.start - pos) < props.triggerClickOn
    })
  }
  const swipeProps = props.swiping
    ? {
        onTouchCancel: handleDragFinish,
        onTouchEnd: handleDragFinish,
        onTouchMove: handleDragMove,
        onTouchStart: handleDragStart,
        onMouseDown: handleDragStart,
        onMouseLeave: handleDragFinish,
        onMouseUp: handleDragFinish,
        onMouseMove: handleDragMove
      }
    : {}

  return (
    <div ref={ref} className='item-provider'>
      <div
        data-testid='trackList'
        {...swipeProps}
        className='item-tracker'
        style={{
          transform: `translateX(${props.transform - drag.drag}px)`,
          transition: `transform ${props.transition}s ease 0s`,
          width: width * props.items.length
        }}
      >
        {props.items.map((item, i) => (
          <div
            key={i}
            style={{ width, pointerEvents: drag.pointers ? 'all' : 'none' }}
            className='item-container'
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
