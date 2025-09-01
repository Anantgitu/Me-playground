import React from 'react';

const Search = ({ query, onQueryChange, onClear }) => {
    return (
        <div className="mb-6">
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => onQueryChange(e.target.value)}
                    placeholder="🔍 Search projects..."
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {query && (
                    <button
                        type="button"
                        onClick={onClear}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 font-bold py-1 px-2 rounded"
                        aria-label="Clear search"
                    >
                        &times;
                    </button>
                )}
            </div>
        </div>
    );
};

export default Search;
