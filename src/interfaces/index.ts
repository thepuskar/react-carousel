import { ReactElement } from 'react';

export enum SlideDirection {
  Right = -1,
  Left = 1,
}

export const enum ArrowKeys {
  Right = 39,
  Left = 37,
}

export type Item = ReactElement;

export interface CarouselProps {
  children: Item[];
  show: number;
  slide: number;
  transition?: number;
  swiping?: boolean;
  swipeOn?: number;
  responsive?: boolean;
  infinite?: boolean;
  className?: string;
  useArrowKeys?: boolean;
  hideArrows?: boolean;
  a11y?: { [key: string]: string };
  dynamic?: boolean;
  paginationCallback?: ((direction: SlideDirection) => any) | null;
  pageCount?: number;
  leftArrow?: ReactElement | null;
  rightArrow?: ReactElement | null;
  autoSwipe?: number | null;
  navigation?: null | ((selected: boolean) => ReactElement);
  triggerClickOn?: number;
  onLeftArrowClick?: () => void;
  onRightArrowClick?: () => void;
}
export interface CarouselState {
  items: Item[];
  width: number;
  transform: number;
  transition: number;
  isSliding: boolean;
  current: number;
}

export interface ArrowProps {
  onClick?: (...args: any) => any;
  direction: string;
}

export interface ItemProviderProps {
  items: Item[];
  show: number;
  slide: number;
  widthCallBack: (width: number) => void;
  dragCallback: (transform: number) => void;
  slideCallback: (direction: SlideDirection) => void;
  transition: number;
  transform: number;
  swiping: boolean;
  swipeOn: number;
  responsive: boolean;
  infinite: boolean;
  triggerClickOn: number;
}

export interface GetShowArrowProps {
  itemCount: number;
  itemsToShow: number;
  infinite: boolean;
  current: number;
  hideArrows: boolean;
}

export interface NavigationProps {
  items: Item[];
  current: number;
  factory: (selected: boolean) => React.ReactElement;
  onClick: (i: number) => void;
}
