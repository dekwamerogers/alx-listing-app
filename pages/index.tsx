import React from 'react';
import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';



// A simple array of objects to act as placeholder data for our listings.
const listings = [
  {
    id: 1,
    title: 'Cozy Apartment in the City Center',
    description: 'A beautiful apartment with great city views.',
    imageUrl: 'https://placehold.co/600x400/FF5A5F/FFFFFF?text=Listing+1',
  },
  {
    id: 2,
    title: 'Modern Villa with a Private Pool',
    description: 'Luxurious villa featuring a large pool and garden.',
    imageUrl: 'https://placehold.co/600x400/4B5563/FFFFFF?text=Listing+2',
  },
];

const HomePage: React.FC = () => {
  const handleButtonClick = (listingId: number | string) => {
    console.log(`Button clicked for listing: ${listingId}`); 
    alert(`Button clicked for listing: ${listingId}`);
  };

  return (
    <>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="An Airbnb clone listing page." />
      </Head>
      <main className="min-h-screen bg-gray-100 p-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">Welcome!</h1>
          <p className="text-xl text-gray-600">Explore amazing properties.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {listings.map((listing) => (
            <div key={listing.id} className="flex flex-col items-center">
              <Card
                id={listing.id}
                title={listing.title}
                description={listing.description}
                imageUrl={listing.imageUrl}
              />
              <div className="mt-4">
                <Button label="View Details" onClick={() => handleButtonClick(listing.id)} />
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default HomePage;