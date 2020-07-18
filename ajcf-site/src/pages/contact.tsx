import React, { ChangeEvent, FormEvent } from "react";
import { navigate } from "gatsby-link";
import Layout from "../components/Shared/Components/Layout";
import Sidebar from "../components/Shared/Sidebar/Sidebar";
import { ContactForm } from "../components/ContactComponents/ContactForm";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Contact = () => {
  const [state, setState] = React.useState({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  return (
    <Layout>
      <Sidebar />
      <ContactForm handleChange={handleChange} handleSubmit={handleSubmit} />
    </Layout>
  );
};

export default Contact;
