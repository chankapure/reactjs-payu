export default function ValidateInfo(inputs) {
  let errors = {};

  // FIRST NAME
  if (!inputs.firstname.trim()) {
    errors.firstname = "error";
  } else {
    errors.firstname = "success";
  }

  // LASTNAME
  if (!inputs.lastname.trim()) {
    errors.lastname = "error";
  } else {
    errors.lastname = "success";
  }

  //EMAIL
  if (!inputs.email) {
    errors.email = "error";
  } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
    errors.email = "error";
  } else {
    errors.email = "success";
  }

  //PHONE
  if (!inputs.phone) {
    errors.phone = "error";
  } else {
    errors.phone = "success";
  }

  //POST BOX
  if (!inputs.postbox) {
    errors.postbox = "error";
  } else {
    errors.postbox = "success";
  }

  return errors;
}
