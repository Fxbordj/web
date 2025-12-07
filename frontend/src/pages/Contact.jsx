import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Phone, Mail, MapPin, Instagram, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';
import { createContact } from '../utils/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await createContact(formData);
      
      toast.success('Message envoyé!', {
        description: 'Nous vous répondrons rapidement.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      toast.error('Erreur lors de l\'envoi', {
        description: 'Veuillez réessayer plus tard.'
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 -z-10"></div>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#0A1A2F] mb-6">
            Contactez
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1FA2FF] to-[#4FACFE]"> SANIPRO</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Notre équipe est prête à répondre à toutes vos questions
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#0A1A2F] mb-6">Nos coordonnées</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  N'hésitez pas à nous contacter pour toute question ou pour planifier un service. 
                  Nous sommes là pour vous aider!
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <Card className="p-6 border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1FA2FF] to-[#4FACFE] flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0A1A2F] mb-2">Téléphone</h3>
                      <a href="tel:+15146547510" className="text-gray-600 hover:text-[#1FA2FF] transition-colors">
                        (514) 654-7510
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Lun - Dim: 8h - 20h</p>
                    </div>
                  </div>
                </Card>

                {/* Email */}
                <Card className="p-6 border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1FA2FF] to-[#4FACFE] flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0A1A2F] mb-2">Courriel</h3>
                      <a href="mailto:leservices.sanipro@gmail.com" className="text-gray-600 hover:text-[#1FA2FF] transition-colors">
                        leservices.sanipro@gmail.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Réponse en 24h</p>
                    </div>
                  </div>
                </Card>

                {/* Location */}
                <Card className="p-6 border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1FA2FF] to-[#4FACFE] flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0A1A2F] mb-2">Zone desservie</h3>
                      <p className="text-gray-600">Montréal et environs</p>
                      <p className="text-sm text-gray-500 mt-1">Québec, Canada</p>
                    </div>
                  </div>
                </Card>

                {/* Instagram */}
                <Card className="p-6 border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1FA2FF] to-[#4FACFE] flex items-center justify-center flex-shrink-0">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0A1A2F] mb-2">Instagram</h3>
                      <a
                        href="https://instagram.com/services.sanipro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#1FA2FF] transition-colors"
                      >
                        @services.sanipro
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Suivez-nous!</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Hours */}
              <Card className="p-6 bg-gradient-to-r from-[#1FA2FF] to-[#4FACFE] text-white border-0">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-3">Heures d'ouverture</h3>
                    <div className="space-y-1 text-blue-50">
                      <p>Lundi - Vendredi: 8h00 - 20h00</p>
                      <p>Samedi: 9h00 - 18h00</p>
                      <p>Dimanche: 10h00 - 16h00</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-2xl border-0">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#0A1A2F] mb-6">Envoyez-nous un message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name" className="text-base font-semibold text-[#0A1A2F]">
                        Nom *
                      </Label>
                      <Input
                        id="contact-name"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                        className="h-12 border-gray-300 focus:border-[#1FA2FF] focus:ring-[#1FA2FF]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-email" className="text-base font-semibold text-[#0A1A2F]">
                        Courriel *
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                        className="h-12 border-gray-300 focus:border-[#1FA2FF] focus:ring-[#1FA2FF]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-phone" className="text-base font-semibold text-[#0A1A2F]">
                        Téléphone (optionnel)
                      </Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        placeholder="(514) 654-7510"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="h-12 border-gray-300 focus:border-[#1FA2FF] focus:ring-[#1FA2FF]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-message" className="text-base font-semibold text-[#0A1A2F]">
                        Message *
                      </Label>
                      <Textarea
                        id="contact-message"
                        placeholder="Votre message..."
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        required
                        rows={6}
                        className="border-gray-300 focus:border-[#1FA2FF] focus:ring-[#1FA2FF] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#1FA2FF] to-[#4FACFE] hover:from-[#1890E6] hover:to-[#45A0EB] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;