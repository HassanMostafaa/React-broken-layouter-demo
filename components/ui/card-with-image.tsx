'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { ReactNode } from 'react';

interface CardWithImageProps {
  title: string;
  description: string;
  imageUrl?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

// export function CardWithImage({
//   title,
//   description,
//   imageUrl,
//   ctaText,
//   onCtaClick,
// }: CardWithImageProps): ReactNode {
  
// }

export const CardWithImage:React.FunctionComponent<CardWithImageProps> = ({
  description,title,ctaText,imageUrl,onCtaClick
}) => {

  return (
    <Card className="overflow-hidden">
      {imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {ctaText && (
        <CardFooter>
          <Button onClick={onCtaClick} variant="secondary" className="w-full">
            {ctaText}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}