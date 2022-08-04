import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const getListings = async () => {
      let req = await fetch('http://localhost:6001/listings')
      let res = await req.json()
      setListings(res)
    }
    getListings()
  }, [refresh])

  const displayedListings = listings.filter((listing) => {
    return listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className="app">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} listing={listings} setRefresh={setRefresh} />
      <ListingsContainer listings={displayedListings} setRefresh={setRefresh} />
    </div>
  );
}

export default App;
