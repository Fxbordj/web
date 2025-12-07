import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Calendar } from '../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { CalendarIcon, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { toast } from 'sonner';
import { createQuote } from '../utils/api';

const Quote = () => {
  const [date, setDate] = useState();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    address: '',
    details: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service_type: formData.serviceType,
        address: formData.address,
        preferred_date: date ? date.toISOString() : null,
        details: formData.details
      };
      
      await createQuote(submissionData);
      
      toast.success('Soumission envoyée avec succès!', {
        description: 'Nous vous contacterons dans les 24 heures.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        address: '',
        details: ''
      });
      setDate(undefined);
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
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#0A1A2F] mb-6">
            Obtenez votre 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1FA2FF] to-[#4FACFE]"> soumission gratuite</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Remplissez le formulaire ci-dessous et recevez une réponse rapide garantie
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-[#1FA2FF] to-[#4FACFE] text-white rounded-t-lg">
              <CardTitle className="text-2xl">Formulaire de soumission</CardTitle>
              <p className="text-blue-50 text-sm">Tous les champs sont requis</p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-semibold text-[#0A1A2F]">
                    Nom complet *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Votre nom complet"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                    className="h-12 border-gray-300 focus:border-[#1FA2FF] focus:ring-[#1FA2FF]"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-semibold text-[#0A1A2F]">
                      Courriel *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                      className="h-12 border-gray-300 focus:border-[#1FA2FF] focus:ring-[#1FA2FF]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-semibold text-[#0A1A2F]">
                      Téléphone *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(514) 654-7510"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      required
                      className="h-12 border-gray-300 focus:border-[#1FA2FF] focus:ring-[#1FA2FF]"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <Label htmlFor="serviceType" className="text-base font-semibold text-[#0A1A2F]">
                    Type de service *
                  </Label>
                  <Select value={formData.serviceType} onValueChange={(value) => handleChange('serviceType', value)} required>
                    <SelectTrigger className="h-12 border-gray-300 focus:border-[#1FA2FF] focus:ring-[#1FA2FF]">
                      <SelectValue placeholder="Sélectionnez un service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Nettoyage résidentiel</SelectItem>
                      <SelectItem value="apartment">Nettoyage d'appartements / condos</SelectItem>
                      <SelectItem value="deep">Nettoyage en profondeur</SelectItem>
                      <SelectItem value="commercial">Nettoyage commercial / bureaux</SelectItem>
                      <SelectItem value="construction">Nettoyage après construction</SelectItem>
                      <SelectItem value="moving">Nettoyage déménagement</SelectItem>
                      <SelectItem value="airbnb">Nettoyage Airbnb</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-base font-semibold text-[#0A1A2F]">
                    Adresse *
                  </Label>
                  <Input
                    id="address"
                    placeholder="Adresse complète"
                    value={formData.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                    required
                    className="h-12 border-gray-300 focus:border-[#1FA2FF] focus:ring-[#1FA2FF]"
                  />
                </div>

                {/* Preferred Date */}
                <div className="space-y-2">
                  <Label className="text-base font-semibold text-[#0A1A2F]">
                    Date souhaitée (optionnel)
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-12 justify-start text-left font-normal border-gray-300 hover:border-[#1FA2FF]"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, 'PPP', { locale: fr }) : <span>Sélectionnez une date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <Label htmlFor="details" className="text-base font-semibold text-[#0A1A2F]">
                    Détails supplémentaires (optionnel)
                  </Label>
                  <Textarea
                    id="details"
                    placeholder="Informations additionnelles sur vos besoins..."
                    value={formData.details}
                    onChange={(e) => handleChange('details', e.target.value)}
                    rows={5}
                    className="border-gray-300 focus:border-[#1FA2FF] focus:ring-[#1FA2FF] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#1FA2FF] to-[#4FACFE] hover:from-[#1890E6] hover:to-[#45A0EB] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Envoyer ma demande
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 text-center border-gray-200">
              <div className="text-3xl font-bold text-[#1FA2FF] mb-2">24h</div>
              <p className="text-gray-600 text-sm">Réponse garantie</p>
            </Card>
            <Card className="p-6 text-center border-gray-200">
              <div className="text-3xl font-bold text-[#1FA2FF] mb-2">100%</div>
              <p className="text-gray-600 text-sm">Gratuit, sans engagement</p>
            </Card>
            <Card className="p-6 text-center border-gray-200">
              <div className="text-3xl font-bold text-[#1FA2FF] mb-2">5★</div>
              <p className="text-gray-600 text-sm">Service de qualité</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;