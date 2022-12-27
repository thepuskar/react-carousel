import { ArrowProps } from 'interfaces'

export const Arrow = (props: ArrowProps) => {
  return (
    <button
      className='carousel-arrow'
      onClick={props?.onClick}
      data-direction={props.direction}
    />
  )
}
