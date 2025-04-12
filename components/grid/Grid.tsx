'use client';
import React from 'react';

import { CardWithImage } from '@/components/ui/card-with-image';
import { cardData, cardWithImageData } from '@/lib/dummy-data';
import Layouter from 'react-broken-layouter';

export const Grid: React.FunctionComponent<{
  items: any[];
  sectionTitle: string;
}> = ({ items, sectionTitle }) => {
  return (
    <section>
      {sectionTitle && (
        <h2 className="text-2xl font-semibold mb-6 text-foreground">
          {sectionTitle}
        </h2>
      )}
      {items?.length > 0 && (
        <div className="grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((card, index) => (
            <CardWithImage
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card?.imageUrl}
              ctaText={card.ctaText}
              onCtaClick={() => console.log(`Clicked ${card.title}`)}
            />
          ))}
        </div>
      )}

      <br />
      <hr />
      <br />

      <h2 className="text-2xl font-semibold mb-6 text-foreground">
        Using the layouter library
      </h2>

      <Layouter
        cols={1}
        items={cardData}
        breakpoints={{
          768: {
            cols: 2,
          },
        }}
        render={({ item }):any => (
          <CardWithImage description={item.description} title={item.title} />
        )}
      />
    </section>
  );
};
