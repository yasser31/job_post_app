"use client"
import {useState} from "react";

export function LogoutButton ({handleToken}) {
    const [resMsg, setResMsg] = useState("")
    const handleLogout = async (e) =>{
        
        try {
            const response = await fetch("http://localhost:8000/users/logout", {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${localStorage.getItem("token")}`
                },
            })
            if (!response.ok) {
                error = await response.json();
                throw new Error(error.message);
            }
            const data = await response.json();
            setResMsg(data.message);
            localStorage.removeItem("token");
            handleToken(null);
        }
        
        catch (error){
             console.log("Token not found")
        }
    }
    return (
        <div className="flex space-x-4 items-center">
                    <a href="#" className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 font-medium text-sm" onClick={handleLogout}>Déconnexion</a>
        </div>
    )
} 