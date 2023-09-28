import { useState } from "react";

export const Card = ({
  name,
  photoUrl,
  age,
  popularity,
  onClick,
  setSelectedCarts,
  id,
  selectedCarts,
}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      style={{
        backgroundColor: selectedCarts.includes(id) ? "orange" : "lightgray",
        width: "400px",
        height: "200px",
        padding: 5,
        borderRadius: 5,
        margin: 10,
        display: "flex",
        alignItems: "center",
      }}
      onClick={() => {
        setSelectedCarts((prev) => {
          localStorage.setItem(
            "selectedCarts",
            JSON.stringify(
              !clicked ? [...prev, id] : prev.filter((item) => item !== id)
            )
          );
          return !clicked ? [...prev, id] : prev.filter((item) => item !== id);
        });
        setClicked(!clicked);
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          alignItems: "center",
        }}
      >
        <img src={photoUrl} alt={name} width="60%" />
        <p style={{ fontWeight: "bold", color: "dodgerblue" }}>{name}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>
          <b>Age:</b> {age}
        </p>
        <p>
          <b>Popularity:</b> {popularity}
        </p>
      </div>
    </div>
  );
};
