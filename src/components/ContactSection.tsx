
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Location & Contact
          </h2>
          <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61271.46652178113!2d74.19022449813455!3d16.7089168920524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec07a29%3A0xece8ea642952e42f!2sKolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1682066761320!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shree Sai Consultancy Location"
              ></iframe>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-neutral-light p-8 rounded-lg h-full">
              <h3 className="text-2xl font-semibold text-navy mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-orange mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-navy mb-1">Address</h4>
                    <p className="text-gray-600">
                      123 Rajarampuri, 8th Lane<br />
                      Near City Center Mall<br />
                      Kolhapur, Maharashtra 416008
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-orange mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-navy mb-1">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 12345 67890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-orange mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-navy mb-1">Email</h4>
                    <p className="text-gray-600">info@shreesaiconsultancy.com</p>
                    <p className="text-gray-600">somil@shreesaiconsultancy.com</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-medium text-navy mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="rounded-full border-navy">
                      <Facebook className="h-5 w-5 text-navy" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full border-navy">
                      <Instagram className="h-5 w-5 text-navy" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full border-navy">
                      <Linkedin className="h-5 w-5 text-navy" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
