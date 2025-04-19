
import { useState } from 'react';
import { Calendar, Clock, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const AppointmentSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    propertyInterest: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here we would typically send data to a backend or Telegram Bot API
      // For demo purposes, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      
      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        propertyInterest: '',
        message: '',
      });
      
      toast({
        title: "Appointment request sent!",
        description: "We'll contact you shortly to confirm your booking.",
      });

      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="appointment" className="section-padding bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book an Appointment
          </h2>
          <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Schedule a consultation with our experts to discuss your real estate needs and receive personalized guidance.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {showSuccess ? (
            <div className="bg-green-600/20 border border-green-600/50 rounded-lg p-8 text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600/20 mb-4">
                <Check className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Appointment Request Sent!</h3>
              <p className="text-white/80 mb-6">
                Thank you for booking a consultation with us. We'll contact you shortly to confirm your appointment.
              </p>
              <Button 
                onClick={() => setShowSuccess(false)} 
                className="bg-orange hover:bg-orange-dark text-white"
              >
                Book Another Appointment
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="border-navy-light bg-navy-light/50 text-white placeholder:text-white/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                  className="border-navy-light bg-navy-light/50 text-white placeholder:text-white/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  className="border-navy-light bg-navy-light/50 text-white placeholder:text-white/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="propertyInterest">Property Interest</Label>
                <Select 
                  onValueChange={(value) => handleSelectChange('propertyInterest', value)}
                  value={formData.propertyInterest}
                >
                  <SelectTrigger className="border-navy-light bg-navy-light/50 text-white">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="rental">Rental</SelectItem>
                    <SelectItem value="plots">Plots</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Preferred Date
                </Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="border-navy-light bg-navy-light/50 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Preferred Time
                </Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="border-navy-light bg-navy-light/50 text-white"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message">Additional Information</Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us more about your requirements..."
                  className="w-full rounded-md border border-navy-light bg-navy-light/50 text-white placeholder:text-white/50 px-3 py-2"
                />
              </div>

              <div className="md:col-span-2">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-orange hover:bg-orange-dark text-white w-full md:w-auto px-8"
                >
                  {isSubmitting ? "Submitting..." : "Book Consultation"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
