import { useState } from "react";

function SearchBar(props) {
    let [searchTerm, setSearchTerm] = useState('')

    return(
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
            <input type="text" placeholder="Enter a search term here"/>
            <input type="submit" onChange={(e) => setSearchTerm(e.target.value)} />
        </form>
    )
}

export default SearchBar