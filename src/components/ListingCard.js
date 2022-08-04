import React, {useState} from "react";

function ListingCard({listing, setRefresh}) {
  const {id, image, description, location} = listing

  const [isFavorited, setIsFavorited] = useState(false)
  
  const toggleFavorited = () => {
    setIsFavorited((isFavorited) => !isFavorited)
  }

  const handleDeleteClick = () => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
    setRefresh(prev => !prev)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={ image } alt={ description } />
      </div>
      <div className="details">
        {isFavorited ? (
          <button onClick={toggleFavorited} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={toggleFavorited} className="emoji-button favorite">☆</button>
        )}
        <strong>{ description }</strong>
        <span> · { location }</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
