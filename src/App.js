import "./App.css";
import { Card } from "./Card";
import db from "./db";
import React from "react";

function App() {
  const { images, people } = db;
  const [list, setList] = React.useState(people);
  const [selectedCarts, setSelectedCarts] = React.useState(
    localStorage.getItem("selectedCarts")
      ? JSON.parse(localStorage.getItem("selectedCarts"))
      : []
  );
  const popularityValuePairs = {
    "Extremely Hated": 1,
    Unpopular: 2,
    Likeable: 3,
    Popular: 4,
    "Very Popular": 5,
  };

  const handleSortingByPopularity = () => {
    const sortedList = list.sort((a, b) =>
      popularityValuePairs[a.popularity] > popularityValuePairs[b.popularity]
        ? -1
        : 1
    );
    setList([...sortedList]);
  };

  const handleClearList = () => {
    setSelectedCarts([]);
    localStorage.removeItem("selectedCarts");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>People List</h1>
      <div style={{ display: "flex" }}>
        <button style={{ marginRight: 5 }} onClick={handleSortingByPopularity}>
          Popularity
        </button>
        <button style={{ marginRight: 5 }} onClick={handleClearList}>
          Clear All
        </button>
        <div>Clicked Carts: {selectedCarts.length}</div>
      </div>
      <div style={{ display: "flex", maxWidth: "90%", flexWrap: "wrap" }}>
        {list.map((person, index) => {
          return (
            <Card
              key={person.name}
              photoUrl={images[person.image]}
              name={person.name}
              age={person.age}
              popularity={person.popularity}
              setSelectedCarts={setSelectedCarts}
              selectedCarts={selectedCarts}
              id={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
