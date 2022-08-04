import React, {useState} from "react";

function Search({setSearchTerm , setRefresh} ) {

  const [tempSearch, setTempSearch] = useState('')

  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [location, setLocation] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setSearchTerm(tempSearch)
  }

  const handlePost = (e) => {
    e.preventDefault()
    fetch('http://localhost:6001/listings', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        description: description,
        image: image,
        location: location
      })
    })
    setDescription("")
    setImage("")
    setLocation("")
    setRefresh(prev => !prev)
  }

  return (
    <div>
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        // value={tempSearch}
        onChange={(e) => setTempSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
    <br></br>
    <br></br>
    <form className="searchbar" onSubmit={handlePost}>
      <label>Post A Listing:</label>
      <input
        type="text"
        id="description"
        placeholder="description"
        value={ description }
        onChange={(e) => setDescription(e.target.value)}
      />
        <input
          type="text"
          id="description"
          placeholder="image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          id="description"
          placeholder="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      <button type="submit">🔍</button>
    </form>
    </div>
  );
}

export default Search;
