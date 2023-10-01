import { React, useState } from "react";

const Searchbar = () => {

    const [searchInput, setSearchInput] = useState('');

    // create method for searched input and set state on form submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
            return false;
        }

        setSearchInput('');

    }

    return (
        <div class="flex flex-1 items-center justify-center p-6">
            <div class="w-full max-w-lg">
                <form class="mt-5 sm:flex sm:items-center"  >
                    <input id="q" name="q" class="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-[#577c72]-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#577c72]-600 sm:text-sm" placeholder="Type here" type="search" autofocus="" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} /><button type="submit" class="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-[#577c72] px-4 py-2 font-medium text-white shadow-sm hover:bg-[#577c72]-200 focus:outline-none focus:ring-2 focus:ring-[#577c72]-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onSubmit={handleFormSubmit}>Search</button>
                </form>
            </div>
        </div>
    )

}

export default Searchbar;