import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { services } from '../mock';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 -z-10"></div>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#0A1A2F] mb-6">
            Nos 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1FA2FF] to-[#4FACFE]"> Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des solutions de nettoyage professionnelles adaptées à tous vos besoins, résidentiels et commerciaux
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={service.id} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-80 md:h-auto ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1FA2FF]/20 to-[#4FACFE]/20"></div>
                  </div>

                  {/* Content */}
                  <CardContent className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                    <div className="inline-block px-4 py-1 bg-blue-100 text-[#1FA2FF] rounded-full text-sm font-semibold mb-4 w-fit">
                      Service #{service.id}
                    </div>
                    <h2 className="text-3xl font-bold text-[#0A1A2F] mb-4">{service.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-6 w-6 text-[#1FA2FF] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/quote">
                      <Button className="bg-gradient-to-r from-[#1FA2FF] to-[#4FACFE] hover:from-[#1890E6] hover:to-[#45A0EB] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                        Demander un devis
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A1A2F] mb-4">Comment ça fonctionne?</h2>
            <p className="text-lg text-gray-600">Un processus simple en 4 étapes</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Demandez un devis', desc: 'Remplissez notre formulaire en ligne ou contactez-nous directement' },
              { step: '2', title: 'Recevez votre soumission', desc: 'Nous vous répondons rapidement avec un devis personnalisé' },
              { step: '3', title: 'Planifiez le service', desc: 'Choisissez la date et l’heure qui vous conviennent' },
              { step: '4', title: 'Profitez du résultat', desc: 'Notre équipe livre un service impeccable garanti' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-[#1FA2FF] to-[#4FACFE] flex items-center justify-center mb-4 text-white text-2xl font-bold shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#0A1A2F] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1FA2FF] to-[#4FACFE] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à transformer votre espace?</h2>
          <p className="text-xl mb-8 text-blue-50">
            Obtenez votre soumission gratuite dès maintenant. Réponse en moins de 24 heures!
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

export default Services;