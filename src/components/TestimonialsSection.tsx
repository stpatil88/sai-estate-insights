
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    location: 'Kolhapur',
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
    text: "Shree Sai Consultancy provided exceptional service in helping us find our dream home. Somil's knowledge of the local market was invaluable, and his attention to our specific needs made the process smooth and stress-free.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Desai',
    location: 'Pune',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: "As an investor looking for commercial properties in Kolhapur, I found Shree Sai Consultancy to be extremely professional and insightful. Their analysis helped me make a confident decision on my investment.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Patil',
    location: 'Kolhapur',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: "We were first-time home buyers and quite nervous about the process. Somil guided us through every step with patience and expertise. His negotiation skills helped us get a great deal on our new home.",
    rating: 5,
  },
  {
    id: 4,
    name: 'Neha Kulkarni',
    location: 'Mumbai',
    image: 'https://randomuser.me/api/portraits/women/66.jpg',
    text: "Looking for property in Kolhapur while living in Mumbai seemed daunting, but Shree Sai Consultancy made it incredibly easy. Their virtual tours and detailed reports helped me make informed decisions remotely.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const goToPrevious = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
    setTranslateValue(translateValue + 100);
  };

  const goToNext = () => {
    if (currentIndex === testimonials.length - 1) return;
    setCurrentIndex(currentIndex + 1);
    setTranslateValue(translateValue - 100);
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill('')
      .map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
        </svg>
      ));
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working with Shree Sai Consultancy
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(${translateValue}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full px-4"
                >
                  <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-neutral-light"
                      />
                    </div>
                    <div>
                      <Quote className="h-10 w-10 text-orange/30 mb-2" />
                      <p className="text-gray-700 mb-6 italic">{testimonial.text}</p>
                      <div className="flex items-center">
                        <div>
                          <h4 className="font-semibold text-navy">{testimonial.name}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.location}</p>
                        </div>
                        <div className="ml-auto flex">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            variant="outline"
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full p-2 md:-left-5 ${
              currentIndex === 0 ? 'text-gray-400 border-gray-200' : 'text-navy border-navy'
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            onClick={goToNext}
            disabled={currentIndex === testimonials.length - 1}
            variant="outline"
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full p-2 md:-right-5 ${
              currentIndex === testimonials.length - 1 ? 'text-gray-400 border-gray-200' : 'text-navy border-navy'
            }`}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setTranslateValue(-(index * 100));
              }}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? 'bg-orange' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
