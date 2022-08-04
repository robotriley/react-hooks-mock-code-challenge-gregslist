import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, setRefresh} ) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => {
          return(
          <ListingCard listing={listing} key={listing.id} setRefresh={setRefresh} />
          )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
