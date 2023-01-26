import React from "react";
import { useState } from "react";
export default function PersonalQuoteView() {
  const [form, setForm] = useState({
    quote: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;

    const getForm = {
      quote: form.quote,
    };
    getForm[name] = value;
    console.log(getForm);
    setForm(getForm);
  };
  const submitFrom = (e) => {
    e.preventDefault();
    document.getElementById("addquote").innerHTML += `<p>${form.quote}</p><br>`;
    document.getElementById("quote").value = "";
  };

  return (
    <section style={{ textAlign: "center", marginTop: "60px" }}>
      <hr style={{ maxWidth: "30%" }} />
      <h2>My Quotes</h2>
      <form onSubmit={submitFrom}>
        <input
          type="text"
          name="quote"
          id="quote"
          placeholder="quote"
          onChange={handleChange}
          autoFocus
        />
        <button type="submit">Submit</button>
      </form>
      <div id="addquote"></div>
    </section>
  );
}
