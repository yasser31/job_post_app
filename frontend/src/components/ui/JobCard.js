"use client";




export function JobCard({ title, contractType, company, city, jobType, description, workLocation, salary }) {

    return (
        <div
            className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-1 hover:shadow-lg text-left flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-black">{title}</h3>
                <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">{contractType}</span>
            </div>
            <p className="text-blue-600 mt-2 font-medium">{company}</p>
            <div className="flex items-center text-gray-500 text-sm mt-1">
                <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5"
                    viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M19.5 10.5c0 7.5-7.5 12-7.5 12s-7.5-4.5-7.5-12a7.5 7.5 0 1115 0z" />
                </svg>
                {city}
            </div>
            <div className="flex items-center text-gray-600 text-sm mt-1">
                <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5"
                    viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                {jobType}
            </div>
            <div className="flex items-center text-gray-600 text-sm mt-1">
                <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5"
                    viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M19.5 10.5c0 7.5-7.5 12-7.5 12s-7.5-4.5-7.5-12a7.5 7.5 0 1115 0z" />
                </svg>
                {workLocation}
            </div>
            <p className="text-gray-700 text-sm mt-3 line-clamp-3">
                {description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">Node.js</span>
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">React</span>
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">MongoDB</span>
            </div>
            <div className="mt-4 flex justify-between items-end">
                <span className="text-gray-800 text-sm font-medium">Salaire: {salary}</span>
                <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">Voir détails</a>
            </div>
        </div>
    )
}