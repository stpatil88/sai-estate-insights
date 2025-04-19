
import { ShieldCheck, TrendingUp, Building, BadgeCheck } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            About SHREE SAI CONSULTANCY
          </h2>
          <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-navy mb-4">
              Expert Guidance Since 2020
            </h3>
            <p className="text-gray-700 mb-6">
              Founded by Somil Patil, SHREE SAI CONSULTANCY has been providing expert real estate 
              guidance to investors and homeowners in Kolhapur since 2020. We combine deep market 
              knowledge with personalized service to help you make informed real estate decisions.
            </p>
            <p className="text-gray-700 mb-6">
              Our mission is simple: to guide investors and families to the right real estate decisions 
              that align with their goals, needs, and financial capabilities. We pride ourselves 
              on our integrity, expertise, and commitment to client satisfaction.
            </p>
            <div className="flex items-center">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Somil Patil" 
                className="w-16 h-16 rounded-full object-cover mr-4" 
              />
              <div>
                <h4 className="font-semibold text-navy">Somil Patil</h4>
                <p className="text-gray-600">Founder & Lead Consultant</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <ShieldCheck className="h-10 w-10 text-orange mb-3" />,
                title: "Market Research",
                description: "Comprehensive analysis of local real estate trends and opportunities."
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-orange mb-3" />,
                title: "Investment Strategy",
                description: "Custom investment plans aligned with your financial goals."
              },
              {
                icon: <Building className="h-10 w-10 text-orange mb-3" />,
                title: "Property Valuation",
                description: "Accurate assessment of property value based on market dynamics."
              },
              {
                icon: <BadgeCheck className="h-10 w-10 text-orange mb-3" />,
                title: "Transaction Guidance",
                description: "End-to-end support throughout the buying or selling process."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                {service.icon}
                <h4 className="font-semibold text-navy mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
