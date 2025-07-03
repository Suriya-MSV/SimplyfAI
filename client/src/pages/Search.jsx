import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult('');

    if (!query || query.trim() === '') {
      setError('Please enter a valid search query.');
      setLoading(false);
      return;
    }

    try {
      console.log('Sending search query:', query);
      const response = await axios.post('http://localhost:5000/api/search', { query });
      console.log('Response received:', response.data);
      setResult(response.data.result);
    } catch (error) {
      console.error('Error fetching search result:', error.response || error.message);
      setError(error.response?.data?.error || 'Error fetching results. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-[92%] bg-purple-100 font-mono flex items-center justify-center">
      <div className="w-full h-[90%] p-8 bg-purple-200 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-extrabold text-purple-800 text-center mb-6">
          Search with SimplyfAI
        </h1>
        <form className="w-full mb-6" onSubmit={handleSearch}>
          <div className="relative flex items-center">
            <input
              required
              placeholder="Find answer with SimplyfAI"
              className="w-full h-full py-4 px-4 text-lg text-purple-900 rounded-lg border border-purple-400 bg-purple-100 placeholder-purple-500 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all duration-300"
              id="default-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="ml-4 px-5 py-3 text-lg font-medium text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:ring-2 focus:ring-purple-300 focus:outline-none transition-all duration-300"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM12 16a4 4 0 100-8 4 4 0 000 8z"
                  ></path>
                </svg>
              ) : (
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-5 h-5"
                >
                  <path
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    strokeWidth={2}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    stroke="currentColor"
                  />
                </svg>
              )}
            </button>
          </div>
        </form>
        <div className="p-4 h-[70%] bg-purple-100 rounded-lg shadow-inner border border-purple-300">
          <div className="h-[100%] overflow-y-auto bg-white p-4 rounded-lg">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {loading ? (
              <p className="text-purple-600 text-sm">Loading...</p>
            ) : (
              <p className="text-purple-900 text-sm">{result}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
