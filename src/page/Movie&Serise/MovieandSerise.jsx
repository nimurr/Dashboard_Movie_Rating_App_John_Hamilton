import React from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import { FiTrash2 } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';

const movies = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    title: "The Little Mermaid",
    type: "Movie",
    year: 2023,
    score: 8.5,
    tags: ["Fantasy", "Musical", "Family"],
    description: "A live-action adaptation of Disney's classic animated film about a young mermaid who live under water as a princess and falls in love a prince who live on land.",
    img: "https://i.ibb.co/0jL4FXk/little-mermaid.jpg" // replace with your image
}));

const MovieandSerise = () => {
    return (
        <div className='py-5 '>
            <div className="p-6 bg-[#1a3c58] rounded-xl min-h-screen">
                {/* Header */}
                <div className="flex justify-between items-center mb-6 text-white">
                    <h1 className="text-3xl font-semibold flex items-center gap-2 cursor-pointer">
                        <FaChevronLeft className='text-2xl' /> Movies & Series Score
                    </h1>
                    <label className='relative' htmlFor="">
                        <input
                            type="text"
                            placeholder="Search by name or genre...."
                            className="px-4 py-2 w-full md:min-w-96 rounded bg-[#1a1f2b] text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <IoSearch className='absolute top-3 right-3' />
                    </label>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {movies.map((movie) => (
                        <div key={movie.id} className="bg-[#1a1f2b] border-gray-500 border-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition relative text-white">
                            {/* Movie Image */}
                            <img src={'https://comicsagogo.wordpress.com/wp-content/uploads/2011/11/tintin-movie-poster-horizontal.jpg'} alt={movie.title} className="w-full h-48 object-cover" />

                            {/* Movie Info */}
                            <div className="p-4 space-y-2">
                                <div className="flex justify-between items-start">
                                    <h2 className="font-semibold">{movie.title} <span className="text-red-500">🎬</span></h2>
                                    <span className="bg-orange-500 px-2 py-1 rounded text-sm font-medium">{movie.score}</span>
                                </div>
                                <p className="text-slate-400 text-sm">{movie.type} · {movie.year}</p>

                                {/* Tags */}
                                <div className="flex gap-2 mt-1">
                                    {movie.tags.map((tag) => (
                                        <span key={tag} className="bg-slate-700 px-2 py-0.5 rounded text-xs">{tag}</span>
                                    ))}
                                </div>

                                {/* Description */}
                                <p className="text-slate-300 text-sm mt-2 line-clamp-3">{movie.description}</p>

                                {/* Buttons */}
                                <div className="flex justify-between items-center mt-3">
                                    <button className="bg-orange-500 px-4 py-1 rounded text-white text-sm hover:bg-orange-600 transition">
                                        View Details
                                    </button>
                                    <FiTrash2 className="text-red-500 cursor-pointer hover:text-red-400 transition" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieandSerise;
