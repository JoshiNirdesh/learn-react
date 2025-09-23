import React, { useState } from "react";

const FormHandling = () => {
  const [form, setForm] = useState({ name: "", age: "", email: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form action="">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </form>
      <p>Name: {form.name}</p>
      <p>Age: {form.age}</p>
      <p>Email: {form.email}</p>{" "}
    </div>
  );
};

export default FormHandling;
