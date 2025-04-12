export interface BaseCard {
  id: string;
  title: string;
  description: string;
  ctaText: string;
}

export interface BasicCard extends BaseCard {}

export interface ImageCard extends BaseCard {
  imageUrl: string;
}

export type GridProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string;
};
