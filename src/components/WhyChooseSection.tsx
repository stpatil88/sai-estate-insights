
import { Search, BarChart3, Briefcase, Clock } from 'lucide-react';

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: <Search className="h-12 w-12 text-orange" />,
      title: "Market Analysis",
      description: "We provide in-depth market research and analysis, going beyond simple listings to help you understand property value trends and investment potential."
    },
    {
      icon: <Clock className="h-12 w-12 text-orange" />,
      title: "Long-Term Guidance",
      description: "Unlike agents focused only on transactions, we offer ongoing guidance and support for your real estate journey, from acquisition through maintenance and future sales."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-orange" />,
      title: "Investment Strategy",
      description: "We develop personalized investment strategies based on your financial goals, risk tolerance, and timeline, ensuring optimal returns on your real estate investments."
    },
    {
      icon: <Briefcase className="h-12 w-12 text-orange" />,
      title: "Asset Management",
      description: "Our services include comprehensive asset management, helping you maximize the value and performance of your real estate portfolio over time."
    }
  ];

  return (
    <section id="services" className="section-padding bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose a Property Consultant?
          </h2>
          <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Working with a dedicated property consultant offers advantages that go far beyond what traditional real estate agents provide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-navy-light p-6 rounded-lg text-center hover:transform hover:scale-105 transition-transform"
            >
              <div className="flex justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-white/70 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
