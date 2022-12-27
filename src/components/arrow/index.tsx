import { ArrowProps } from 'interfaces';

export const Arrow = (props: ArrowProps) => {
  return (
    <button
      className="carouselArrow"
      onClick={props?.onClick}
      data-direction={props.direction}
    />
  );
};
