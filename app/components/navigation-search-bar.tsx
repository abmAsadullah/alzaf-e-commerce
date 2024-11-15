import React from 'react'

const SearchBar = () => {
  return (
    <form>   
        <div className="relative">
            <input type="search" id="default-search" className="w-[100%] p-2 ps-3 text-sm border border-gray-100 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-white " placeholder="Search Product" required />
            <div className="bg-orange-500 rounded-lg absolute inset-y-0 end-0 flex items-center px-3 pointer-events-none">
                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
        </div>
    </form>

  )
}

export default SearchBar