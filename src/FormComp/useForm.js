import React, { useState } from "react";

const useForm = validate => {
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    jobtitle: "",
    companyname: "",
    email: "",
    website: "",
    phone: "",
    mobile: "",
    postbox: "",
    address: "",
    username: "",
    password: "",
    password2: "",
    others: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(inputs));
  };

  return { handleChange, inputs, handleSubmit, errors };
};

export default useForm;
