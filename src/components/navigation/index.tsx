import { Item, NavigationProps } from 'interfaces';

export const Navigation = ({
  items,
  current,
  onClick,
  factory,
}: NavigationProps) => {
  return (
    <div className="carouselNavigation">
      {items.map((_: any, i: number) => (
        <div onMouseOver={() => onClick(i)} key={i}>
          {factory(current === i)}
        </div>
      ))}
    </div>
  );
};
