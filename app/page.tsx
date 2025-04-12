import { Grid } from '../components/grid/Grid';
import { 
  cardData,
  //  cardWithImageData
} from '@/lib/dummy-data';

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
          Grid Layout Demo
        </h1>

        <div className="space-y-16">
          <Grid items={cardData} sectionTitle={'Basic Cards'} />
        </div>
      </div>
    </main>
  );
}
