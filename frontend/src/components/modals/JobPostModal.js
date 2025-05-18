"use client"
import { PostModal } from "./PostModal";
import { useState, useEffect, useRef } from "react";

export function JobPostModal({ isOpen, onClose }) {

    const [company, setCompany] = useState("");
    const [city, setCity] = useState("");
    const [jobType, setJobType] = useState("Temps plein");
    const [workLocation, setWorkLocation] = useState("À distance");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState({});
    const [profession, setProfession] = useState({});
    const [contractType, setContractType] = useState("CDD");
    const [salary, setSalary] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    const [professionCategories, setProfessionCategories] = useState([]);
    const [professions, setProfessions] = useState([]);

    const prevIsOpen = useRef();
    const prevProfessionCategories = useRef();


    useEffect(() => {
        if (prevIsOpen.current !== undefined && prevIsOpen.current !== isOpen) {
            if (!isOpen) {
                setCompany("");
                setTitle("");
                setDescription("");
                setCity("");
                setJobType("");
                setWorkLocation("");
                setSalary("");
                setError({});
                setMsg("");
            }
            else if (isOpen) {
                getProfessionCategories();
            }
        }

        else if (prevProfessionCategories.current !== undefined && prevProfessionCategories.current !== professionCategories) {
            handleCategoryChange(professionCategories[0].title);
            setProfession(professionCategories[0].category_professions[0]);
        }

        prevIsOpen.current = isOpen;
        prevProfessionCategories.current = professionCategories;
    }, [isOpen, professionCategories]);

    const getProfessionCategories = async () => {
        try {
            const response = await fetch("http://localhost:8000/jobs/categories");
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message);
            }
            const data = await response.json();
            setProfessionCategories(data.categories);
        }
        catch (error) {
            console.log(error);
        }
    }
    const handleCategoryChange = (value) => {
        professionCategories.forEach(category => {
            if (category.title == value) {
                setProfessions(category.category_professions);
                setCategory(category);
            }
        });
    }
    const handleProfessionChange = (value) => {
        console.log(value);
        professions.forEach(profession => {
            if (profession.title == value) {
                setProfession(profession);
            }
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            "company": company,
            "title": title,
            "description": description,
            "profession_category": [category.id],
            "profession": profession.id,
            "city": city,
            "contract_type": contractType,
            "job_type": jobType,
            "work_location": workLocation,
            "salary": salary
        }

        try {
            const response = await fetch("http://127.0.0.1:8000/jobs/jobposts", {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${localStorage.getItem("token")}`
                },
                "body": JSON.stringify(payload),
            })
            if (!response.ok) {
                const error = await response.json();
                throw error
            }

            const data = await response.json();
            setMsg(data.msg)
            console.log(msg);
        }
        catch (error) {
            console.log(error.title);
            setError(error);
        }
    }
    return (
        <PostModal isOpen={isOpen} onClose={onClose}>
            <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-2">Publier une annonce</h2>
                <p className="text-center text-sm text-gray-600 mb-6">Publiez votre annonce d'emploi en remplissant ce formulaire</p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Company */}
                    <div className="flex items-center gap-4">
                        <label className="w-1/4 text-sm font-medium text-gray-700">Compagnie</label>
                        <div className="w-3/4">
                            <input value={company} type="text" placeholder="compagnie"
                                className="w-full border px-3 py-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                onChange={(e) => setCompany(e.target.value)} />
                            {error.company && <p className="text-red-500 text-sm">{error.company}</p>}
                        </div>
                    </div>

                    {/* Title */}
                    <div className="flex items-center gap-4">
                        <label className="w-1/4 text-sm font-medium text-gray-700">Titre</label>
                        <div className="w-3/4">
                            <input value={title} type="text" placeholder="titre"
                                className="w-full border px-3 py-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                onChange={(e) => setTitle(e.target.value)} />
                            {error.title && <p className="text-red-500 text-sm">{error.title}</p>}
                        </div>
                    </div>

                    {/* Description */}
                    <div className="flex items-center gap-4">
                        <label className="w-1/4 text-sm font-medium text-gray-700">Déscription</label>
                        <div className="w-3/4">
                            <input value={description} type="text" placeholder="Déscription"
                                className="w-full border px-3 py-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                onChange={(e) => setDescription(e.target.value)} />
                            {error.description && <p className="text-red-500 text-sm">{error.description}</p>}
                        </div>
                    </div>

                    {/* Category */}
                    <div className="flex items-center gap-4">
                        <label className="w-1/4 text-sm font-medium text-gray-700">Catégorie</label>
                        <div className="w-3/4">
                            <select onChange={(e) => handleCategoryChange(e.target.value)} value={category.title}
                                className="w-full border px-3 py-2 rounded-md">
                                {professionCategories.map((categoryOption) => (
                                    <option key={categoryOption.id}>{categoryOption.title}</option>
                                ))}
                            </select>
                            {error.profession_category && <p className="text-red-500 text-sm">{error.profession_category}</p>}
                        </div>
                    </div>

                    {/* Profession */}
                    <div className="flex items-center gap-4">
                        <label className="w-1/4 text-sm font-medium text-gray-700">Métier</label>
                        <div className="w-3/4">
                            <select onChange={(e) => handleProfessionChange(e.target.value)} value={profession.title}
                                className="w-full border px-3 py-2 rounded-md">
                                {professions.map((profession) => (
                                    <option key={profession.id}>{profession.title}</option>
                                ))}
                            </select>
                            {error.profession && <p className="text-red-500 text-sm">{error.profession}</p>}
                        </div>
                    </div>

                    {/* City */}
                    <div className="flex items-center gap-4">
                        <label className="w-1/4 text-sm font-medium text-gray-700">Ville/Pays</label>
                        <div className="w-3/4">
                            <input value={city} type="text" placeholder="ville, pays"
                                className="w-full border px-3 py-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                onChange={(e) => setCity(e.target.value)} />
                            {error.city && <p className="text-red-500 text-sm">{error.city}</p>}
                        </div>
                    </div>

                    {/* Contract Type */}
                    <div className="flex items-center gap-4">
                        <label className="w-1/4 text-sm font-medium text-gray-700">Contrat</label>
                        <div className="w-3/4">
                            <select onChange={(e) => setContractType(e.target.value)} value={contractType}
                                className="w-full border px-3 py-2 rounded-md">
                                <option>CDD</option>
                                <option>CDI</option>
                                <option>ALTERNANCE</option>
                                <option>STAGE</option>
                            </select>
                            {error.contract_type && <p className="text-red-500 text-sm">{error.contract_type}</p>}
                        </div>
                    </div>

                    {/* Job Type */}
                    <div className="flex items-center gap-4">
                        <label className="w-1/4 text-sm font-medium text-gray-700">Type</label>
                        <div className="w-3/4">
                            <select onChange={(e) => setJobType(e.target.value)} value={jobType}
                                className="w-full border px-3 py-2 rounded-md">
                                <option>Temps plein</option>
                                <option>Temps partiel</option>
                            </select>
                            {error.job_type && <p className="text-red-500 text-sm">{error.job_type}</p>}
                        </div>
                    </div>

                    {/* Work Location */}
                    <div className="flex items-center gap-4">
                        <label className="w-1/4 text-sm font-medium text-gray-700">Lieu</label>
                        <div className="w-3/4">
                            <select onChange={(e) => setWorkLocation(e.target.value)} value={workLocation}
                                className="w-full border px-3 py-2 rounded-md">
                                <option>À distance</option>
                                <option>Sur site</option>
                                <option>Hybride</option>
                            </select>
                            {error.work_location && <p className="text-red-500 text-sm">{error.work_location}</p>}
                        </div>
                    </div>

                    {/* Salary */}
                    <div className="flex items-center gap-4">
                        <label className="w-1/4 text-sm font-medium text-gray-700">Salaire</label>
                        <div className="w-3/4">
                            <input value={salary} type="text" placeholder="Salaire (utilisez - pour un intervalle)"
                                className="w-full border px-3 py-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                onChange={(e) => setSalary(e.target.value)} />
                            {error.salary && <p className="text-red-500 text-sm">{error.salary}</p>}
                        </div>
                    </div>

                    {/* Submit and Messages */}
                    <div className="flex justify-center mt-6">
                        <button type="submit"
                            className="bg-blue-600 text-white py-2 px-8 rounded-md hover:bg-blue-700 transition">
                            Publier
                        </button>
                    </div>
                    {error.non_field_errors && <p className="text-red-500 text-sm text-center">{error.non_field_errors}</p>}
                    {msg && <p className="text-green-500 text-sm text-center">{msg}</p>}
                </form>
            </div>

        </PostModal>
    )
}