import type { JSX } from "react";
import { AddressForm, MapView } from "./components";
import Style from "./ContactForm.module.css";
import React from "react";
import type { FormFields } from "./types";

const ContactForm = (): JSX.Element => {
  const [formState, setFormState] = React.useState<FormFields>({
    contactName: "",
    street: "",
    city: "",
    postcode: "",
    phone: "",
    email: "",
    idea: "",
  });

  return (
    <div className={Style.root}>
      <div className={Style.contactFormWrapper}>
        <div className={Style.formWrapper}>
          <AddressForm setFormState={setFormState} formState={formState} />
        </div>

        <div className={Style.mapWrapper}>
          <MapView />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
