import '../styles/searchbar.css'
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom";
  
const Searchbar = () => {

  const [search, SetSearch] = useState("");
  console.log(search);

  const navigate = useState();


  function executeSearch(e) {
    if (e.charCode === 13) {
      e.preventDefault();
      navigate('/search/' + search)
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    fetch('http://localhost:3000/Publish/product_search.php/' + search)
    .then(response => response.json())
    .then(results => {
      console.log(results)
    })
    .catch(error => {
      alert(error.response === undefined ? error:error.response.data.error);
    });

  }

  return (
    <div className="searchContainer">
      <div className="inputForm d-flex position-relative" role="search">
        <form onSubmit={handleSubmit}>
        <input value={search} className="searchInput mx-2" type="search" placeholder="Haku" aria-label="Search" onKeyPress={(e)=>executeSearch(e)} onChange={(e) => SetSearch(e.target.value)}>
        </input>
        
          <button type="button" className="searchBtns">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
          </form>
      </div>
    </div>
  );
}

export default Searchbar;