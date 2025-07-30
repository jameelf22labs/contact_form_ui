import type { JSX } from "react";
import Style from "./AddressForm.module.css";
import { useForm } from "@tanstack/react-form";
import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import type { FormFields } from "../../types";

type AddressFormProps = {
  formState: FormFields;
  setFormState: React.Dispatch<React.SetStateAction<FormFields>>;
};

const AddressForm = ({
  formState,
  setFormState,
}: AddressFormProps): JSX.Element => {
  
  const form = useForm({
    defaultValues: {
      ...formState,
    },
    onSubmit: async ({ value }) => {
      setFormState(value);
    },
  });

  return (
    <div className={Style.addressFormContainer}>
      <h6 className={Style.heading}>
        Get in <span> touch </span>
      </h6>

      <p className={Style.desc}>
        Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
        <br />
        molestie vel, ornare non id blandit netus.
      </p>

      <div className={Style.inputWrapper}>
        <div className={Style.inputField}>
          <form.Field
            name="contactName"
            children={(field) => {
              return (
                <React.Fragment>
                  <input
                    type="text"
                    value={field.state.value}
                    placeholder="Contact name"
                  />
                </React.Fragment>
              );
            }}
          />
        </div>

        <div className={Style.inputField}>
          <form.Field
            name="street"
            children={(field) => {
              return (
                <React.Fragment>
                  <input
                    type="text"
                    value={field.state.value}
                    placeholder="Street"
                  />
                </React.Fragment>
              );
            }}
          />
        </div>

        <div className={`${Style.location}`}>
          <form.Field
            name="city"
            children={(field) => {
              return (
                <React.Fragment>
                  <input
                    type="text"
                    value={field.state.value}
                    placeholder="City"
                  />
                </React.Fragment>
              );
            }}
          />

          <form.Field
            name="postcode"
            children={(field) => {
              return (
                <React.Fragment>
                  <input
                    type="text"
                    value={field.state.value}
                    placeholder="Post code"
                  />
                </React.Fragment>
              );
            }}
          />
        </div>

        <div className={Style.inputField}>
          <form.Field
            name="phone"
            children={(field) => {
              return (
                <React.Fragment>
                  <input
                    type="text"
                    value={field.state.value}
                    placeholder="Phone number"
                  />
                </React.Fragment>
              );
            }}
          />
        </div>

        <div className={Style.inputField}>
          <form.Field
            name="email"
            children={(field) => {
              return (
                <React.Fragment>
                  <input
                    type="text"
                    value={field.state.value}
                    placeholder="E - mail"
                  />
                </React.Fragment>
              );
            }}
          />
        </div>

        <div className={Style.inputField}>
          <form.Field
            name="idea"
            children={(field) => {
              return (
                <React.Fragment>
                  <input
                    type="text"
                    value={field.state.value}
                    placeholder="Let’s talk about your idea"
                  />
                </React.Fragment>
              );
            }}
          />
        </div>
      </div>

      <div className={Style.fileUpload}>
        <MdOutlineFileUpload
          style={{ width: 30, height: 30, color: "#737B7D" }}
        />
        <span> Upload Additional file </span>
      </div>

      <span
        style={{
          fontWeight: 400,
          fontSize: "13px",
          color: "#8E8E8E",
          marginTop: "10px",
        }}
      >
        {" "}
        Attach file. File size of your documents should not exceed 10MB{" "}
      </span>

      <div className={Style.agree}>
        <input type="checkbox" />
        <span> I want to protect my data by signing an NDA </span>
      </div>

      <button
        className="rounded-2xl bg-[#0982FE] text-[#ffffff] w-[80%]"
        style={{ marginTop: 20, padding: 20 }}
      >
        {" "}
        SUBMIT{" "}
      </button>
    </div>
  );
};

export default AddressForm;
