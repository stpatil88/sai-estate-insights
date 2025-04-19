
import { useState } from 'react';
import { MapPin, Home, Building2, Key, Landmark } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Mock property data
const propertyData = {
  residential: [
    {
      id: 1,
      title: 'Modern Family Home',
      price: '₹85 Lakhs',
      location: 'Rajarampuri, Kolhapur',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80',
      features: '3 BHK, 1800 sq.ft., Garden'
    },
    {
      id: 2,
      title: 'Luxury Apartment',
      price: '₹75 Lakhs',
      location: 'Nagala Park, Kolhapur',
      image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      features: '2 BHK, 1200 sq.ft., Pool'
    },
    {
      id: 3,
      title: 'Contemporary Villa',
      price: '₹1.2 Crore',
      location: 'Tarabai Park, Kolhapur',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      features: '4 BHK, 3000 sq.ft., Private Garden'
    },
  ],
  commercial: [
    {
      id: 4,
      title: 'Office Space',
      price: '₹65 Lakhs',
      location: 'IT Park, Kolhapur',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      features: '1500 sq.ft., Modern Amenities'
    },
    {
      id: 5,
      title: 'Retail Space',
      price: '₹45 Lakhs',
      location: 'Laxmipuri, Kolhapur',
      image: 'https://images.unsplash.com/photo-1604328471151-b52226907017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      features: '800 sq.ft., Prime Location'
    },
  ],
  rental: [
    {
      id: 6,
      title: 'Furnished Apartment',
      price: '₹18,000/month',
      location: 'Rajarampuri, Kolhapur',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      features: '2 BHK, Fully Furnished'
    },
    {
      id: 7,
      title: 'Commercial Office',
      price: '₹25,000/month',
      location: 'Shahupuri, Kolhapur',
      image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
      features: '1000 sq.ft., Ready to Move'
    },
  ],
  plots: [
    {
      id: 8,
      title: 'Residential Plot',
      price: '₹25 Lakhs',
      location: 'New Shahupuri, Kolhapur',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
      features: '1200 sq.ft., Corner Plot'
    },
    {
      id: 9,
      title: 'Agricultural Land',
      price: '₹15 Lakhs',
      location: 'Outskirts, Kolhapur',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
      features: '1 Acre, Fertile Land'
    },
  ],
  premium: [
    {
      id: 10,
      title: 'Luxury Bungalow',
      price: '₹2.5 Crore',
      location: 'Rajarampuri 10th Lane, Kolhapur',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      features: '5 BHK, 5000 sq.ft., Swimming Pool'
    },
    {
      id: 11,
      title: 'Premium Penthouse',
      price: '₹1.8 Crore',
      location: 'Central Kolhapur',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      features: '4 BHK, 3500 sq.ft., Panoramic View'
    },
  ]
};

type PropertyCategory = 'residential' | 'commercial' | 'rental' | 'plots' | 'premium';

const PropertyCard = ({ property }: { property: any }) => {
  return (
    <Card className="overflow-hidden h-full">
      <div className="h-48 relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-orange text-white py-1 px-3 rounded-full text-sm font-medium">
          {property.price}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-navy mb-2">{property.title}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{property.location}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{property.features}</p>
        <Button variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-white">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

const PropertiesSection = () => {
  const [activeCategory, setActiveCategory] = useState<PropertyCategory>('residential');

  const categories = [
    { value: 'residential', label: 'Residential', icon: <Home className="h-4 w-4 mr-1" /> },
    { value: 'commercial', label: 'Commercial', icon: <Building2 className="h-4 w-4 mr-1" /> },
    { value: 'rental', label: 'Rental', icon: <Key className="h-4 w-4 mr-1" /> },
    { value: 'plots', label: 'Plots', icon: <MapPin className="h-4 w-4 mr-1" /> },
    { value: 'premium', label: 'Premium', icon: <Landmark className="h-4 w-4 mr-1" /> },
  ];

  return (
    <section id="properties" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Browse Properties
          </h2>
          <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of properties across various categories. Each property is carefully verified and evaluated to ensure quality and value.
          </p>
        </div>

        <Tabs defaultValue="residential" className="w-full" onValueChange={(value) => setActiveCategory(value as PropertyCategory)}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-neutral-light">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.value} 
                  value={category.value}
                  className="flex items-center data-[state=active]:bg-navy data-[state=active]:text-white"
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.value} value={category.value}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {propertyData[category.value as PropertyCategory].map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <Button className="bg-navy hover:bg-navy-light text-white px-8">
                  View All {category.label} Properties
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default PropertiesSection;
