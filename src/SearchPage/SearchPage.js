import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchPageDisplay from "./SearchPageDisplay";


const SearchPage = () => {
    const [selectItem, setSelectItem] = useState({});
    const [loaded, setLoaded] = useState(false)


    console.log(selectItem)


    return (
        <div className="searchPageMainDiv">


            <SearchBar setSelectItem={setSelectItem} setLoaded={setLoaded} />
            <SearchPageDisplay selectItem={selectItem} loaded={loaded} />
        </div>
    )
}

export default SearchPage;