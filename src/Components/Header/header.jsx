import SearchBar from "../Searchbar/searchbar"
import "./header.css"

function Header() {

    return (
        <>
            <div className="head">
                <div className="logo">
                    <p>STREAMX</p>
                </div>
                <div className="redir">
                    <div>Home</div>
                    <div>Movies</div>
                    <div>Series</div>
                    <div>Trending</div>
                    <div>Catigories</div>
                </div>
                <div>
                    <SearchBar />
                </div>
            </div>

        </>
    )
}

export default Header
