"use client"
import { useState } from "react"
import { LoginModal } from "../modals/LoginModal"
import { RegisterModal } from "../modals/RegisterModal"
import { LogoutButton } from "./LogoutButton"
import { useEffect } from "react";

export function NavBar() {

    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showLogin, setShowLoginModal] = useState(false)
    const [showRegister, setShowRegisterModal] = useState(false)
    
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        setToken(storedToken);
        setIsLoading(false);
    }, []);
    
    if (isLoading) {
        return null;
      }

    return (

        <nav className="bg-white shadow-md">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="text-xl font-bold text-blue-600">
                    MonLogo
                </div>

                <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <a href="#" className="hover:text-blue-600">Accueil</a>
                    <a href="#" className="hover:text-blue-600">Offres d'emplois</a>
                    <a href="#" className="hover:text-blue-600">Profils</a>
                    <a href="#" className="hover:text-blue-600">À propos</a>
                </div>
                <div className="flex space-x-4 items-center">
                    <>
                        {token && <LogoutButton handleToken={setToken}>
                        </LogoutButton>}
                    </>
                    {!token &&
                        <>
                            <a href="#" className="text-blue-600 font-medium hover:underline" onClick={() => setShowLoginModal(true)}>Connexion</a>
                            <a href="#" className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 font-medium text-sm" onClick={() => setShowRegisterModal(true)}>
                                Inscription
                            </a>
                        </>}
                </div>
            </div>

            <LoginModal isOpen={showLogin} onClose={() => setShowLoginModal(false)} handleToken={setToken} />
            <RegisterModal isOpen={showRegister} onClose={() => setShowRegisterModal(false)} />

        </nav>
    )
}