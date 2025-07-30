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
  const [isChecked, setIsChecked] = React.useState(true);

  const form = useForm({
    defaultValues: {
      ...formState,
    },
    onSubmit: async ({ value }) => {
      setFormState(value);
      console.log(value);
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
            validators={{
              onChange: ({ value }) =>
                value.trim().length === 0
                  ? "Contact field name is required"
                  : undefined,
            }}
          >
            {(field) => (
              <div className={Style.inputBox}>
                <input
                  type="text"
                  value={field.state.value}
                  placeholder="Contact name"
                  onChange={(e) => field.handleChange(e.target.value)}
                  onClick={() => field.handleChange(field.state.value)}
                />
                {!field.state.meta.isValid && (
                  <em role="alert" className={Style.error}>
                    {field.state.meta.errors.join(", ")}
                  </em>
                )}
              </div>
            )}
          </form.Field>
        </div>
        <div className={Style.inputField}>
          <form.Field
            name="street"
            validators={{
              onChange: ({ value }) =>
                value.trim().length === 0
                  ? "Street field is required"
                  : undefined,
            }}
          >
            {(field) => (
              <div className={Style.inputBox}>
                <input
                  type="text"
                  value={field.state.value}
                  placeholder="Street"
                  onChange={(e) => field.handleChange(e.target.value)}
                  onClick={() => field.handleChange(field.state.value)}
                />
                {!field.state.meta.isValid && (
                  <em role="alert" className={Style.error}>
                    {field.state.meta.errors.join(", ")}
                  </em>
                )}
              </div>
            )}
          </form.Field>
        </div>
        <div className={Style.location}>
          <form.Field
            name="city"
            validators={{
              onChange: ({ value }) =>
                value.trim().length === 0
                  ? "City field is required"
                  : undefined,
            }}
          >
            {(field) => (
              <div className={Style.inputBox}>
                <input
                  type="text"
                  value={field.state.value}
                  placeholder="City"
                  onChange={(e) => field.handleChange(e.target.value)}
                  onClick={() => field.handleChange(field.state.value)}
                />
                {!field.state.meta.isValid && (
                  <em role="alert" style={{ marginTop : 90 }} className={Style.error}>
                    {field.state.meta.errors.join(", ")}
                  </em>
                )}
              </div>
            )}
          </form.Field>

          <form.Field
            name="postcode"
            validators={{
              onChange: ({ value }) => {
                const pinRegex = /^[1-9][0-9]{5}$/;
                if (value.trim().length === 0) return "Post field is required";
                if (!pinRegex.test(value))
                  return "Please enter a valid 6-digit postcode";
              },
            }}
          >
            {(field) => (
              <div className={Style.inputBox}>
                <input
                  type="text"
                  value={field.state.value}
                  placeholder="Post code"
                  onChange={(e) => field.handleChange(e.target.value)}
                  onClick={() => field.handleChange(field.state.value)}
                />
                {!field.state.meta.isValid && (
                  <em role="alert" style={{ marginTop : 90 }} className={Style.error}>
                    {field.state.meta.errors.join(", ")}
                  </em>
                )}
              </div>
            )}
          </form.Field>
        </div>
        <div className={Style.inputField}>
          <form.Field
            name="phone"
            validators={{
              onChange: ({ value }) => {
                const trimmed = value.trim();
                if (trimmed.length === 0) {
                  return "Phone number field is required";
                }
                if (!/^\d{10}$/.test(trimmed)) {
                  return "Phone number must be 10 digits";
                }
                return undefined;
              },
            }}
          >
            {(field) => (
              <div className={Style.inputBox}>
                <input
                  type="text"
                  value={field.state.value}
                  placeholder="Phone number"
                  onChange={(e) => field.handleChange(e.target.value)}
                  onClick={() => field.handleChange(field.state.value)}
                />
                {!field.state.meta.isValid && (
                  <em role="alert" className={Style.error}>
                    {field.state.meta.errors.join(", ")}
                  </em>
                )}
              </div>
            )}
          </form.Field>
        </div>
        <div className={Style.inputField}>
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (value.trim().length === 0) return "Email field is required";
                if (!emailRegex.test(value))
                  return "Please enter a valid email address";
              },
            }}
          >
            {(field) => (
              <div className={Style.inputBox}>
                <input
                  type="text"
                  value={field.state.value}
                  placeholder="E - mail"
                  onChange={(e) => field.handleChange(e.target.value)}
                  onClick={() => field.handleChange(field.state.value)}
                />
                {!field.state.meta.isValid && (
                  <em role="alert" className={Style.error}>
                    {field.state.meta.errors.join(", ")}
                  </em>
                )}
              </div>
            )}
          </form.Field>
        </div>

        <div className={Style.inputField}>
          <form.Field name="idea">
            {(field) => (
              <div className={Style.inputBox}>
                <input
                  type="text"
                  value={field.state.value}
                  placeholder="Let’s talk about your idea"
                  onChange={(e) => field.handleChange(e.target.value)}
                  onClick={() => field.handleChange(field.state.value)}
                />
                {!field.state.meta.isValid && (
                  <em role="alert" className={Style.error}>
                    {field.state.meta.errors.join(", ")}
                  </em>
                )}
              </div>
            )}
          </form.Field>
        </div>
      </div>

      <div
        className={Style.fileUpload}
        onClick={() => {
          const elem = document.createElement("input");
          elem.type = "file";
          elem.click();
        }}
      >
        <MdOutlineFileUpload className={Style.uploadIcon} />
        <span>Upload Additional file</span>
      </div>

      <span className={Style.fileNote}>
        Attach file. File size of your documents should not exceed 10MB
      </span>

      <div className={Style.agree}>
        <input
          type="checkbox"
          checked={isChecked}
          onClick={(e) => setIsChecked(!isChecked)}
        />
        <span onClick={(e) => setIsChecked(!isChecked)}>
          I want to protect my data by signing an NDA
        </span>
      </div>

      <button
        disabled={!form.state.canSubmit}
        className={Style.submitButton}
        type="submit"
        onClick={() => {
          console.log(form.state.errors);
          console.log(form.state.canSubmit);
        }}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default AddressForm;
