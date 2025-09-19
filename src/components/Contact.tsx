import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    subtitle: "Mon-Fri 9AM-6PM",
  },
  {
    icon: Mail,
    title: "Email",
    details: "contact@luxuryrealty.com",
    subtitle: "24/7 Support",
  },
  {
    icon: MapPin,
    title: "Office",
    details: "123 Luxury Ave, Downtown",
    subtitle: "Visit Our Showroom",
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Fri: 9AM-6PM",
    subtitle: "Sat-Sun: 10AM-4PM",
  },
];

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to find your dream property? Contact our expert team for personalized assistance.
          </p>
        </div>

        {/* Container */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white border border-gray-200 shadow-xl rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input
                        placeholder="Enter your first name"
                        className="h-12 bg-white text-gray-900 border-gray-300 focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input
                        placeholder="Enter your last name"
                        className="h-12 bg-white text-gray-900 border-gray-300 focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="h-12 bg-white text-gray-900 border-gray-300 focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        placeholder="Enter your phone"
                        className="h-12 bg-white text-gray-900 border-gray-300 focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type
                    </label>
                    <select className="w-full h-12 px-3 rounded-md bg-white text-gray-900 border border-gray-300 focus:ring-2 focus:ring-yellow-400">
                      <option>Select property type</option>
                      <option>House</option>
                      <option>Apartment</option>
                      <option>Villa</option>
                      <option>Penthouse</option>
                      <option>Commercial</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your property needs..."
                      className="min-h-[120px] bg-white text-gray-900 border-gray-300 focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>

                  <Button variant="default" size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 shadow-md rounded-xl"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-yellow-100 rounded-lg">
                        <IconComponent className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-700 font-medium">
                          {info.details}
                        </p>
                        <p className="text-sm text-gray-500">{info.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* CTA Card */}
            <Card className="bg-gradient-to-br from-yellow-500 to-yellow-400 text-black border-0 shadow-xl rounded-xl">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold mb-2">Ready to Get Started?</h4>
                <p className="mb-4 text-black/80">
                  Schedule a free consultation with our expert agents today.
                </p>
                <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-lg">
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
