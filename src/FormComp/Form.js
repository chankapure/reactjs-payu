import React from "react";
import "./Form.css";
import useForm from "./useForm";
import validate from "../ValidateInfo";
import axios from "axios";

function Form() {
  const { handleChange, inputs, handleSubmit, errors } = useForm(validate);

  const [isMount, setIsMount] = React.useState(false);

  React.useEffect(() => {
    setIsMount(true);
  }, []);

  React.useEffect(() => {
    isMount &&
      axios
        .post(process.env.REACT_APP_HASH_URL, {
          txnid: inputs.txnid,
          amount: inputs.amount,
          productinfo: inputs.productInfo,
          firstname: inputs.firstname,
          email: inputs.email,
          udf5: "Donation Request",
        })
        .then(console.log)
        .catch(console.log);
  }, [isMount]);

  return (
    <div className="form">
      <form
        onSubmit={handleSubmit}
        action={process.env.REACT_APP_PAYU_URL}
        method="POST"
      >
        <div className="form__row">
          <input
            type="text"
            name="txnid"
            value={inputs.txnid}
            onChange={handleChange}
            className={`${errors.txnid} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
            readOnly
          />

          <input
            type="text"
            name="hash"
            placeholder="Hash value *"
            value={inputs.hash}
            onChange={handleChange}
            className={`${errors.hash} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
            readOnly
          />
          <input
            type="text"
            name="productInfo"
            placeholder="Product Info *"
            value={inputs.productInfo}
            onChange={handleChange}
            className={`${errors.productInfo} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount *"
            value={inputs.amount}
            onChange={handleChange}
            className={`${errors.amount} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
        </div>
        <div className="form__row">
          <input
            type="text"
            name="firstname"
            placeholder="First Name (in english)*"
            value={inputs.firstname}
            onChange={handleChange}
            className={`${errors.firstname} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />

          <input
            type="text"
            name="lastname"
            placeholder="Last Name (in english)*"
            value={inputs.lastname}
            onChange={handleChange}
            className={`${errors.lastname} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={inputs.email}
            onChange={handleChange}
            className={`${errors.email} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone *"
            value={inputs.phone}
            onChange={handleChange}
            className={`${errors.phone} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />

          <input
            type="textarea"
            name="address1"
            placeholder="Address1"
            value={inputs.address1}
            onChange={handleChange}
            className=""
            autoComplete="off"
          />
          <input
            type="textarea"
            name="address2"
            placeholder="Address2"
            value={inputs.address2}
            onChange={handleChange}
            className=""
            autoComplete="off"
          />

          <input
            type="text"
            name="city"
            placeholder="City *"
            value={inputs.city}
            onChange={handleChange}
            className={`${errors.city} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <input
            type="text"
            name="state"
            placeholder="State *"
            value={inputs.state}
            onChange={handleChange}
            className={`${errors.state} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <input
            type="text"
            name="country"
            placeholder="Country *"
            value={inputs.country}
            onChange={handleChange}
            className={`${errors.country} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <input
            type="text"
            name="postbox"
            placeholder="ZIPCODE *"
            value={inputs.postbox}
            onChange={handleChange}
            className={`${errors.postbox} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
        </div>
        <div className="form__row">
          <button>SUBMIT</button>
        </div>

        <input type="hidden" id="udf5" name="udf5" value="Donation Request" />
        <input
          type="hidden"
          id="surl"
          name="surl"
          value={`${process.env.REACT_APP_PAYU_SUCCESS_URL}?page=success`}
        />
        <input
          type="hidden"
          id="furl"
          name="furl"
          value={`${process.env.REACT_APP_PAYU_SUCCESS_URL}?page=failure`}
        />
        <input
          type="hidden"
          id="curl"
          name="curl"
          value={`${process.env.REACT_APP_PAYU_SUCCESS_URL}?page=cancel`}
        />
        <input
          type="hidden"
          id="key"
          name="key"
          value={`${process.env.REACT_APP_PAYU_KEY}`}
        />
      </form>
    </div>
  );
}

export default Form;
