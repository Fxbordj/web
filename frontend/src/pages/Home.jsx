import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Shield, Clock, Award, Sparkles, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { services, testimonials, whyChooseUs } from '../mock';

const Home = () => {
  const iconMap = {
    Shield: Shield,
    Clock: Clock,
    Award: Award,
    Sparkles: Sparkles
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 -z-10"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#1FA2FF]/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4FACFE]/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in slide-in-from-left duration-700">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-[#0A1A2F] leading-tight">
                  La propreté,
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1FA2FF] to-[#4FACFE]">
                    c'est notre priorité
                  </span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  Services de nettoyage professionnel résidentiel et commercial à Montréal et environs. 
                  Fiabilité, qualité et satisfaction garanties.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quote">
                  <Button size="lg" className="bg-gradient-to-r from-[#1FA2FF] to-[#4FACFE] hover:from-[#1890E6] hover:to-[#45A0EB] text-white shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300 font-semibold text-base px-8">
                    Obtenir une soumission gratuite
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="border-2 border-[#1FA2FF] text-[#1FA2FF] hover:bg-blue-50 font-semibold text-base px-8">
                    Découvrir nos services
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-[#0A1A2F]">500+</p>
                  <p className="text-sm text-gray-600">Clients satisfaits</p>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <p className="text-3xl font-bold text-[#0A1A2F]">100%</p>
                  <p className="text-sm text-gray-600">Satisfaction garantie</p>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">5.0 étoiles</p>
                </div>
              </div>
            </div>

            <div className="relative animate-in slide-in-from-right duration-700">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1594873604892-b599f847e859"
                  alt="Service de nettoyage professionnel"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A1A2F] mb-4">Nos services principaux</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions de nettoyage adaptées à tous vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-gray-200 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0A1A2F] mb-3 group-hover:text-[#1FA2FF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <Link to="/services" className="inline-flex items-center text-[#1FA2FF] font-semibold hover:gap-2 transition-all">
                    En savoir plus
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-[#0A1A2F] hover:bg-[#0A1A2F]/90 text-white font-semibold">
                Voir tous les services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A1A2F] mb-4">Pourquoi choisir SANIPRO?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Notre engagement envers l'excellence et votre satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-[#1FA2FF] to-[#4FACFE] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1A2F] mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A1A2F] mb-4">Ce que disent nos clients</h2>
            <p className="text-lg text-gray-600">Leur satisfaction est notre meilleure récompense</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-8 hover:shadow-xl transition-all duration-300 border-gray-200">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-bold text-[#0A1A2F]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1FA2FF] to-[#4FACFE] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt pour un espace impeccable?</h2>
          <p className="text-xl mb-8 text-blue-50">
            Obtenez votre soumission gratuite aujourd'hui. Réponse rapide garantie!
          </p>
          <Link to="/quote">
            <Button size="lg" className="bg-white text-[#1FA2FF] hover:bg-gray-100 font-bold text-lg px-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              Obtenir ma soumission gratuite
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;