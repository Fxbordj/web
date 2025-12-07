import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l’excellence dans chaque service que nous offrons, sans compromis sur la qualité.'
    },
    {
      icon: Heart,
      title: 'Engagement',
      description: 'Nous nous engageons à dépasser vos attentes avec un service personnalisé et attentif.'
    },
    {
      icon: Users,
      title: 'Confiance',
      description: 'Équipe qualifiée, assurée et vérifiée pour votre tranquillité d’esprit totale.'
    },
    {
      icon: Award,
      title: 'Professionnalisme',
      description: 'Formation continue et standards élevés garantissent un service professionnel irréprochable.'
    }
  ];

  const stats = [
    { number: '5+', label: 'Années d’expérience' },
    { number: '500+', label: 'Clients satisfaits' },
    { number: '100%', label: 'Satisfaction garantie' },
    { number: '24/7', label: 'Support client' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#0A1A2F] mb-6">
              À propos de 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1FA2FF] to-[#4FACFE]"> SANIPRO</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Votre partenaire de confiance pour tous vos besoins en nettoyage professionnel à Montréal
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1FA2FF] to-[#4FACFE] mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="p-10 border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1FA2FF] to-[#4FACFE] flex items-center justify-center">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#0A1A2F]">Notre Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Offrir des services de nettoyage exceptionnels qui transforment les espaces de vie et de travail 
                en environnements impeccables, sains et accueillants. Nous nous engageons à dépasser les attentes 
                de nos clients par notre professionnalisme, notre fiabilité et notre attention méticuleuse aux détails.
              </p>
            </Card>

            {/* Vision */}
            <Card className="p-10 border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1FA2FF] to-[#4FACFE] flex items-center justify-center">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#0A1A2F]">Notre Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Devenir le leader reconnu des services de nettoyage professionnel à Montréal et environs, 
                en établissant de nouvelles normes d'excellence dans l'industrie. Nous aspirons à créer des 
                relations durables avec nos clients basées sur la confiance, la qualité et la satisfaction garantie.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0A1A2F] mb-6">Notre histoire</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-10 md:p-14">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                SANIPRO est né d'une passion pour la propreté et d'un engagement profond envers l'excellence. 
                Fondée par des professionnels du nettoyage avec plusieurs années d'expérience, notre entreprise 
                s'est rapidement démarquée par son approche méticuleuse et son service client exceptionnel.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Chaque membre de notre équipe est soigneusement sélectionné, formé et équipé pour offrir le meilleur 
                service possible. Nous utilisons des produits écologiques de haute qualité et des techniques éprouvées 
                pour garantir des résultats impeccables tout en respectant l'environnement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Aujourd'hui, nous sommes fiers de servir des centaines de clients à Montréal et environs, 
                qu'il s'agisse de particuliers, de propriétaires Airbnb ou d'entreprises. Notre réputation 
                repose sur la confiance, la ponctualité et surtout, sur notre engagement indéfectible à 
                offrir un service de qualité supérieure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A1A2F] mb-4">Nos valeurs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 border-gray-200 group">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-[#1FA2FF] to-[#4FACFE] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1A2F] mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1FA2FF] to-[#4FACFE] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Pourquoi nous faire confiance?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expérience prouvée</h3>
              <p className="text-blue-50 leading-relaxed">
                Des années d'expérience dans l'industrie du nettoyage professionnel
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Certifié et assuré</h3>
              <p className="text-blue-50 leading-relaxed">
                Entreprise assurée et bonifiée pour votre protection complète
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Équipe dévouée</h3>
              <p className="text-blue-50 leading-relaxed">
                Professionnels formés, vérifiés et passionnés par leur travail
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;