
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const featuredProperties = [
  {
    id: 1,
    title: "Luxury Villa with Pool",
    location: "Rajarampuri, Kolhapur",
    price: "₹2.5 Crore",
    image: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    testimonial: "Working with Shree Sai Consultancy made our dream home a reality. Their expertise and dedication were invaluable during our search.",
    client: "Rajesh Sharma"
  },
  {
    id: 2,
    title: "Prime Commercial Space",
    location: "IT Park, Kolhapur",
    price: "₹1.8 Crore",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    testimonial: "The market insights and negotiation skills provided by Somil helped us secure an excellent deal on our office space.",
    client: "Priya Desai, CEO"
  },
  {
    id: 3,
    title: "Waterfront Property",
    location: "Rankala Lake Area, Kolhapur",
    price: "₹1.6 Crore",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    testimonial: "We were looking for something special, and Shree Sai Consultancy found us the perfect lakeside property that exceeded our expectations.",
    client: "Amit and Neha Patil"
  }
];

const SpecialHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredProperties.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredProperties.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current = featuredProperties[currentIndex];

  return (
    <section className="section-padding bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Featured Properties
          </h2>
          <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
        </div>

        <div className="relative">
          <Button
            onClick={goToPrevious}
            variant="ghost"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-navy hover:text-orange md:-left-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-72 md:h-auto relative">
                  <img 
                    src={current.image} 
                    alt={current.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange text-white py-1 px-3 rounded-full text-sm font-medium">
                    {current.price}
                  </div>
                </div>
                <CardContent className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-navy mb-2">{current.title}</h3>
                    <p className="text-gray-600 mb-4">{current.location}</p>
                    
                    <div className="mb-6">
                      <Button className="bg-navy hover:bg-navy-light text-white">
                        View Details
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 mt-auto">
                    <div className="flex items-start mb-3">
                      <Star className="h-5 w-5 text-orange mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 italic text-sm">"{current.testimonial}"</p>
                    </div>
                    <p className="text-navy font-medium">{current.client}</p>
                  </div>
                </CardContent>
              </div>
            </Card>
            
            <div className="flex justify-center mt-6">
              {featuredProperties.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    index === currentIndex ? 'bg-orange' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <Button
            onClick={goToNext}
            variant="ghost"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-navy hover:text-orange md:-right-10"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialHighlights;
