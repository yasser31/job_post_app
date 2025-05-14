"use client"
import { useState } from "react"
import { Modal } from "./Modal"
import { useEffect } from "react";

export function LoginModal({ isOpen, onClose, handleToken }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (!isOpen) {
            setEmail("");
            setPassword("");
            setError();

        }
    }, [isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        const payload = {
            "email": email,
            "password": password
        }
        try {
            const response = await fetch("http://localhost:8000/users/login", {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(payload),
            })
            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.message);
            }

            const data = await response.json();
            localStorage.setItem("token", data.token);
            handleToken(data.token);
            onClose();


        }
        catch (error) {
            setError(error.message);
        }
    }
    return (<Modal isOpen={isOpen} onClose={onClose}>
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-2">Connexion</h2>
            <p className="text-center text-sm text-gray-600 mb-6">Connectez-vous pour accéder à votre compte</p>

            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" placeholder="you@example.com" className="mt-1 w-full border px-3 py-2 rounded-md focus:ring-blue-500 focus:border-blue-500" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
                    <input type="password" placeholder="••••••••" className="mt-1 w-full border px-3 py-2 rounded-md focus:ring-blue-500 focus:border-blue-500" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Se connecter</button>
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </form>

            <div className="flex items-center my-6">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="px-2 text-sm text-gray-500">ou</span>
                <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            <div className="space-y-3">
                <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-50">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5 mr-2" />
                    Continuer avec Google
                </button>
                <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-50">
                    <img src="https://www.svgrepo.com/show/157006/linkedin.svg" alt="LinkedIn" className="h-5 w-5 mr-2" />
                    Continuer avec LinkedIn
                </button>
            </div>

            <p className="text-center text-sm text-gray-600 mt-6">
                Pas encore de compte ?
                <a href="/register" className="text-blue-600 hover:underline">Inscrivez-vous</a>
            </p>
        </div>
    </Modal>
    )

}