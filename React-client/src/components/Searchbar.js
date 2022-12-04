import '../styles/searchbar.css'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'

import axios from "axios"
  
const Searchbar = () => {

  // const [keyword, setKeyword] = useState("");
  // const navigate = useNavigate();

  // const searchHandler = (e) => {

  //   if (keyword.trim()) {
  //     navigate(`/WalkShoesMen/${keyword}`);
  //   } else {
  //     navigate("/");
  //   }
  // };

  // console.log(keyword);

  const [input, SetInput] = useState("");

  return (
    <div className="searchContainer">
      <div className="inputForm d-flex position-relative" role="search">
        <input value={input} className="searchInput mx-2" type="text" placeholder="Haku" aria-label="Search" onChange={(e) => SetInput(e.target.value)}>
        </input>
        
          <button className="searchBtns">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        
      </div>
    </div>
  );
}

export default Searchbar;