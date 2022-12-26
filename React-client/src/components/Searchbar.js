import '../styles/searchbar.css'
import { useEffect, useState } from "react"
import SearchProduct from './SearchProduct'
  
const Searchbar = (props) => {

  const [search, SetSearch] = useState([]);
  const [items, SetItems] = useState([]);

  function OnSearch(e) {
    SetSearch(e.target.value)
}

  function onSubmit() {
    getData()
}

  async function getData() {
    const address = "http://localhost:3000/Publish/search.php/" + search
    try {
    const response = await fetch(address);
    if (response.ok) {
    const json = await response.json();
    setIsActive(!isActive)
    SetItems(json)
    console.log(json)
  } else {
    console.log('Error retrieving data from server')
  }
  } catch (error) {
    console.log(error)
    alert('Try to write correct product name')
  }
}

  const [isActive,setIsActive] = useState(false)


  return (
    <div className="searchContainer">
      <div className="inputForm d-flex position-relative" role="search">
  
        <input value={search} className="searchInput mx-2" type="search" placeholder="Haku" aria-label="Search" onChange={OnSearch} />

          <button style={{color: isActive? "#F8A700" : "white"}} className="searchBtns" type="button" onClick={onSubmit}>
            <svg id="searchbarIcon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>

        <div className="searchbarShow" style={{display: isActive? "block" : "none"}}>
        <div className="searchbarArea p-4 w-100 h-100">
          <h2 className="searchbarHeader px-1">Hakutulokset</h2>
          {items.map(item => (
          <SearchProduct
            key={item.id}
            image={'http://localhost:3000/Publish/images/' + item.kuva}
            name={item.tuotenimi}
            price={item.hinta}
            path={item.polku} // pass the path property here
            productId={item.id}
          />
        ))}
        </div>
        </div>


         
      </div>
    </div>
  );
}

export default Searchbar;