import React from "react";
import { useState, useEffect } from "react";

// import quoteAPI from "../provider/api.js";
export default function KanyeQuoteView() {
  const getQuote = () => {
    fetch("https://api.kanye.rest")
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "berubah");
        document.getElementById("quoteget").innerHTML = data.quote;
      })
      .catch((err) => console.error(err));
  };
  const getFavorite = () => {
    let temp = document.getElementById("quoteget").textContent;
    let temp2 = document.getElementById("favorite").textContent;
    if (temp !== temp2) {
      document.getElementById("favorite").innerHTML += `<p>${temp}</p><br>`;
    }
  };
  useEffect(() => {
    fetch("https://api.kanye.rest")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("quoteget").innerHTML = data.quote;
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <section style={{ textAlign: "center" }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: "300px" }}
      />
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>Kanye-West Quote</h1>
      <h1 id="quoteget"></h1>
      <button onClick={getQuote}>Get Quote</button>
      <button onClick={getFavorite}>Add Favorite</button>
      <div id="favorite"></div>
    </section>
  );
}
