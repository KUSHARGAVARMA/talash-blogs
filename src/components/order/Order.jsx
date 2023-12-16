import React, { useState } from "react";
import './order.css';
const Order=()=>{
    const [formData, setFormData]=useState({
        name:'',
        email:'',
        number:'',
    })
    const handleSubmit=()=>{

    }
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]:value,

        }));

    };

    return(
        
        <section id="order">
        
        <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
      />

      <label htmlFor="whatsapp">WhatsApp Number</label>
      <input
        type="tel"
        id="whatsapp"
        name="whatsapp"
        value={formData.whatsapp}
        onChange={handleChange}
        placeholder="Your WhatsApp Number"
      />

      <button type="submit">Submit</button>
    </form>
    </section>
    );
};
export default Order;