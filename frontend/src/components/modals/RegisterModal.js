"use client"
import { useState } from "react"
import { Modal } from "./Modal"
import {useEffect} from "react";

export function RegisterModal({ isOpen, onClose }) {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const [error, setError] = useState({})
    const [respMsg, setresMsg] = useState({})

    useEffect(() => {
  if (!isOpen) {
    setEmail("");
    setUsername("");
    setPassword("");
    setconfirmPassword("");
    setresMsg({});
    setError({});

  }
}, [isOpen]);
    const handleRegister = async (e) => {
        e.preventDefault()
        setError({})
        setresMsg({})
        try {
            const payload = {
                "username": username,
                "email": email,
                "password": password,
                "confirm_password": confirmPassword
            }
            const response = await fetch("http://localhost:8000/users/register", {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(payload),
            })

            if (!response.ok) {
                const errorData = await response.json();
                throw errorData;
            }
            const data = await response.json();
            setresMsg(data)
        }
        catch (err) {
            setError(err);
        }
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-2">Inscription</h2>
                <p className="text-center text-sm text-gray-600 mb-6">Créez votre compte JobConnect</p>

                <form className="space-y-4" onSubmit={handleRegister}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nom d'utilisateur</label>
                        <input type="text" placeholder="Nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 w-full border px-3 py-2 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    {error.username && <p className="text-red-500 text-sm">{error.username}</p>}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 w-full border px-3 py-2 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
                        <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 w-full border px-3 py-2 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    {error.password && <p className="text-red-500 text-sm">{error.password}</p>}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Confirmer mot de passe</label>
                        <input type="password" placeholder="••••••••" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)}
                            className="mt-1 w-full border px-3 py-2 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    {error.non_field_errors && <p className="text-red-500 text-sm">{error.non_field_errors}</p>}
                    {respMsg.message && <p className="text-green-500 text-sm">{respMsg.message}</p>}
                    <button type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Créer un
                        compte</button>
                </form>

                <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="px-2 text-sm text-gray-500">ou</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                <div className="space-y-3">
                    <button
                        className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-50">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5 mr-2" />
                        S'inscrire avec Google
                    </button>
                    <button
                        className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-50">
                        <img src="https://www.svgrepo.com/show/157006/linkedin.svg" alt="LinkedIn" className="h-5 w-5 mr-2" />
                        S'inscrire avec LinkedIn
                    </button>
                </div>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Déjà un compte ?
                    <a href="/login" className="text-blue-600 hover:underline">Connectez-vous</a>
                </p>
            </div>
        </Modal>
    )
}