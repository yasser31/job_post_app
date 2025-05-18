"use client"
import Image from "next/image";
import {NavBar} from "@/components/layout/NavBar"
import { HeroSection } from "@/components/layout/HeroSection";
export default function Home() {
  return (
    <div>
      {/* navbar section  */}
     <NavBar></NavBar>
     {/* navbar section  */}
      {/* hero section  */}
      
      {/* hero section  */}
      <HeroSection>

      </HeroSection>
      {/* search section */}
      <div className="relative z-10 flex justify-center -mt-10">
        <div
          className="bg-white shadow-lg rounded-lg w-full max-w-7xl px-6 py-6 flex flex-col items-center justify-between border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">
            Rechercher des opportunités
          </h3>
          <form className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Mot-clé</label>
              <input type="text" placeholder="Titre-compétences ou entreprise"
                className="border border-gray-300 rounded px-3 h-[42px] w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Lieu</label>
              <input type="text" placeholder="Ville ou région"
                className="border border-gray-300 rounded px-3 h-[42px] w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Catégories</label>
              <select
                className="border border-gray-300 rounded px-2 h-[42px] w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Toutes les catégories</option>
              </select>
            </div>
            <div>
              <button type="submit"
                className="bg-blue-700 text-white w-full h-[42px] rounded hover:bg-blue-800 text-sm font-medium">
                Rechercher
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* search section  */}
      {/* offers section  */}
      <section className="bg-gray-100 py-16 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Offres d'emploi en vedette
          </h2>
          <p className="text-gray-600 mt-2 mb-10">
            Découvrez les dernières opportunités professionnelles
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div
              className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-1 hover:shadow-lg text-left flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-black">Développeur Full Stack</h3>
                <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">CDI</span>
              </div>
              <p className="text-blue-600 mt-2 font-medium">TechCorp</p>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M19.5 10.5c0 7.5-7.5 12-7.5 12s-7.5-4.5-7.5-12a7.5 7.5 0 1115 0z" />
                </svg>
                Paris, France
              </div>
              <div className="flex items-center text-gray-600 text-sm mt-1">
                <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                Temps plein
              </div>
              <p className="text-gray-700 text-sm mt-3 line-clamp-3">
                Nous recherchons un développeur full stack passionné pour rejoindre notre équipe dynamique et
                contribuer à la création de produits innovants.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">Node.js</span>
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">React</span>
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">MongoDB</span>
              </div>
              <div className="mt-4 flex justify-between items-end">
                <span className="text-gray-800 text-sm font-medium">Salaire: 45k€ - 60k€</span>
                <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">Voir détails</a>
              </div>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-1 hover:shadow-lg text-left flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-black">Designer UI/UX</h3>
                <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">CDD</span>
              </div>
              <p className="text-blue-600 mt-2 font-medium">DesignPro</p>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M19.5 10.5c0 7.5-7.5 12-7.5 12s-7.5-4.5-7.5-12a7.5 7.5 0 1115 0z" />
                </svg>
                Lyon, France
              </div>
              <div className="flex items-center text-gray-600 text-sm mt-1">
                <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                Temps partiel
              </div>
              <p className="text-gray-700 text-sm mt-3 line-clamp-3">
                En tant que designer UI/UX, vous travaillerez sur des projets variés visant à améliorer
                l'expérience utilisateur sur nos plateformes.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">Figma</span>
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">Prototyping</span>
              </div>
              <div className="mt-4 flex justify-between items-end">
                <span className="text-gray-800 text-sm font-medium">Salaire: 30k€ - 40k€</span>
                <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">Voir détails</a>
              </div>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-1 hover:shadow-lg text-left flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-black">Ingénieur DevOps</h3>
                <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">CDI</span>
              </div>
              <p className="text-blue-600 mt-2 font-medium">CloudGen</p>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M19.5 10.5c0 7.5-7.5 12-7.5 12s-7.5-4.5-7.5-12a7.5 7.5 0 1115 0z" />
                </svg>
                Marseille, France
              </div>
              <div className="flex items-center text-gray-600 text-sm mt-1">
                <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                Temps plein
              </div>
              <p className="text-gray-700 text-sm mt-3 line-clamp-3">
                Rejoignez notre équipe DevOps pour automatiser, sécuriser et optimiser notre infrastructure
                cloud de manière innovante.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">Docker</span>
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">Kubernetes</span>
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">AWS</span>
              </div>
              <div className="mt-4 flex justify-between items-end">
                <span className="text-gray-800 text-sm font-medium">Salaire: 55k€ - 70k€</span>
                <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">Voir détails</a>
              </div>
            </div>
          </div>
          <a href="#"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 text-sm">
            Voir toutes les offres
          </a>
        </div>
      </section>
      {/* offers section */}
      {/* how it works section  */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Comment ça marche
          </h2>
          <p className="text-gray-600 mt-2 mb-12">
            Un processus simple pour connecter talent et opportunités
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full p-6 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M5.121 17.804A10.97 10.97 0 0112 15c2.4 0 4.615.755 6.455 2.037M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Créez votre profil</h3>
              <p className="text-gray-600 text-sm max-w-xs">
                Inscrivez-vous et créez un profil détaillé mettant en valeur vos compétences et expériences.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full p-6 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Explorez les opportunités</h3>
              <p className="text-gray-600 text-sm max-w-xs">
                Parcourez les offres d'emploi ou les profils de candidats qui correspondent à vos critères.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full p-6 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-2M7 8H5a2 2 0 00-2 2v8a2 2 0 002 2h2m10-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v3m10 0H7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Connectez-vous</h3>
              <p className="text-gray-600 text-sm max-w-xs">
                Entrez en contact avec les entreprises ou les candidats et démarrez votre collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* how it works section  */}
      {/* testimony section  */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Témoignages
          </h2>
          <p className="text-gray-600 mt-2 mb-12">
            Ce que disent nos utilisateurs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 text-left">
              <div className="flex items-center mb-4">
                <div
                  className="bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold mr-4">
                  JD
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Julie Dupont</h3>
                  <p className="text-sm text-gray-500">Développeuse Web</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Grâce à JobConnect, j’ai trouvé un poste qui correspond parfaitement à mes compétences et à mes
                ambitions.
              </p>
              <div className="flex space-x-1 text-yellow-400">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                </svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                </svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                </svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                </svg>
                <svg className="w-5 h-5 fill-current text-gray-300" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                </svg>
              </div>
            </div>


            <div className="bg-white shadow-md rounded-lg p-6 text-left">
              <div className="flex items-center mb-4">
                <div
                  className="bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold mr-4">
                  MB
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Marc Bernard</h3>
                  <p className="text-sm text-gray-500">Responsable RH</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Un outil formidable pour recruter efficacement. Interface intuitive et base de données très
                riche.
              </p>
              <div className="flex space-x-1 text-yellow-400">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                </svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                </svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                </svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                </svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                </svg>
              </div>
            </div>


            <div className="bg-white shadow-md rounded-lg p-6 text-left">
              <div className="flex items-center mb-4">
                <div
                  className="bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold mr-4">
                  KL
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Karim Lahlou</h3>
                  <p className="text-sm text-gray-500">Designer UX</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Interface très ergonomique. J’ai été contacté par plusieurs entreprises en quelques jours
                seulement !
              </p>
              <div className="flex space-x-1 text-yellow-400">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                </svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                </svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                </svg>
                <svg className="w-5 h-5 fill-current text-gray-300" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                </svg>
                <svg className="w-5 h-5 fill-current text-gray-300" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* testimony section  */}
      {/* call to action section  */}
      <section className="bg-blue-600 text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">


          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Prêt à démarrer votre aventure professionnelle ?
          </h2>


          <p className="text-md sm:text-lg text-blue-100 mb-8">
            Rejoignez notre communauté de professionnels et trouvez l'opportunité qui vous correspond
          </p>


          <div className="flex justify-center space-x-4 flex-wrap">
            <a href="#" className="bg-white text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition">
              Créer votre compte
            </a>
            <a href="#" className="bg-blue-700 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-800 transition">
              En savoir plus
            </a>
          </div>

        </div>
      </section>
      {/* call to action section  */}
    </div>
  );
}
