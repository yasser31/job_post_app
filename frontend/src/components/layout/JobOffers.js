"use client";

import { useState, useEffect } from "react";
import { JobCard } from "../../components/ui/JobCard.js";


export function JobOffers() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getJobs = async () => {
        try {
            const response = await fetch("http://localhost:8000/jobs/jobposts")
            if (!response.ok) {
                const error = await response.json();
                throw error
            }
            const jsonData = await response.json();
            setData(jsonData.job_posts);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const fetchJobs = async () => {
            await getJobs();
            setIsLoading(false);
        };
        fetchJobs();
    }, []);


    if (isLoading) return (
        <p> Waiting for job offers to be received</p>
    )
    return (
        <section className="bg-gray-100 py-16 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    Offres d'emploi en vedette
                </h2>
                <p className="text-gray-600 mt-2 mb-10">
                    Découvrez les dernières opportunités professionnelles
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {data.map((offer, index) => (
                        <JobCard
                            key={index}
                            title={offer.title}
                            company={offer.company}
                            contractType={offer.contract_type}
                            city={offer.city}
                            jobType={offer.job_type}
                            description={offer.description}
                            workLocation={offer.work_location}
                            salary={offer.salary}
                        />
                    ))}
                </div>
                <a href="#"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 text-sm">
                    Voir toutes les offres
                </a>
            </div>
        </section>
    )
}