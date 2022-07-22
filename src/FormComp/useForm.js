import { useState } from "react";

const useForm = (validate) => {
  const [inputs, setInputs] = useState({
    firstname: "Steve",
    lastname: "David",
    email: "test@example.com",
    phone: "9848012345",
    postbox: "500033",
    address1: "Street 1",
    address2: "Street 2",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    productInfo: "P1, P2",
    amount: "20",
    txnid: new Date().getTime(),
    hash: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    //e.preventDefault();
    setErrors(validate(inputs));
  };

  return { handleChange, inputs, handleSubmit, errors };
};

export default useForm;
