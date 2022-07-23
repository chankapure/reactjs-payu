import React from "react";
import "./Form.css";
import useForm from "./useForm";
import validate from "../ValidateInfo";
import axios from "axios";

function Form() {
  const { handleChange, inputs, handleSubmit } = useForm(validate);

  const [isMount, setIsMount] = React.useState(false);
  const [hash, setHash] = React.useState("");

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
        .then((resp) => setHash(resp.data))
        .catch((error) => console.log(error.message));
  }, [isMount, inputs]);

  return (
    <div className="form">
      <form
        onSubmit={handleSubmit}
        action={process.env.REACT_APP_PAYU_URL}
        method="POST"
      >
        <div className="form__row">
          <input type="text" name="txnid" value={inputs.txnid} readOnly />

          <input
            type="text"
            name="hash"
            placeholder="Hash value *"
            value={hash}
            readOnly
          />
          <input
            type="text"
            name="productInfo"
            placeholder="Product Info *"
            value={inputs.productInfo}
            onChange={handleChange}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount *"
            value={inputs.amount}
            onChange={handleChange}
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
            onBlur={handleSubmit}
            autoComplete="off"
          />

          <input
            type="text"
            name="lastname"
            placeholder="Last Name (in english)*"
            value={inputs.lastname}
            onChange={handleChange}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={inputs.email}
            onChange={handleChange}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone *"
            value={inputs.phone}
            onChange={handleChange}
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
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <input
            type="text"
            name="state"
            placeholder="State *"
            value={inputs.state}
            onChange={handleChange}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <input
            type="text"
            name="country"
            placeholder="Country *"
            value={inputs.country}
            onChange={handleChange}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <input
            type="text"
            name="postbox"
            placeholder="ZIPCODE *"
            value={inputs.postbox}
            onChange={handleChange}
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
