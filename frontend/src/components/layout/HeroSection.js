"use client";
import { JobPostModal } from "../modals/JobPostModal";
import { useState } from "react";


export function HeroSection({ }) {
    const [showJobPostModal, setShowJobPostModal] = useState(false)

    return (
        <section className="bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center h-[500px]">
                <div className="md:w-1/2 flex flex-col justify-center space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-bold leading-snug">
                        Trouver le talent idéal ou l'emploi de vos rêves
                    </h1>
                    <p className="text-lg">
                        JobConnect met en relation les meilleurs talents avec les entreprises qui recrutent
                    </p>
                    <div className="flex space-x-4">
                        <a href="#"
                            className="bg-white text-blue-600 px-6 py-2 rounded text-sm font-semibold hover:bg-gray-200">
                            Je cherche un emploi
                        </a>
                        <a href="#"
                            className="bg-blue-800 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-blue-900" onClick={() => setShowJobPostModal(true)}>
                            Je recrute
                        </a>
                    </div>
                </div>
                <div className="hidden md:flex md:w-1/2 items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-white bg-opacity-20 animate-pulse rounded-lg"></div>
                </div>
            </div>
            <JobPostModal isOpen={showJobPostModal} onClose={() => setShowJobPostModal(false)}>

            </JobPostModal>
        </section>
    )
}