import React, { ChangeEvent, FormEvent } from "react";
import { css } from "@emotion/core";
import cx from "classnames";
import { colors } from "../../assets/css/variables/colors";

export interface ContactFormProps {
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const formStyle = css`
  padding: 2em;
  background-color: ${colors.ajcfWhite};
  form {
    margin-top: 3em;
    > .fields {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 2em;
      > .field {
        flex-grow: 0;
        flex-shrink: 0;
        padding-right: 1em;
        padding-bottom: 1em;
        width: calc(100% - 1.5em * 1);
        &.half {
          width: calc(50% - 1.5em * 0.5);
        }
      }
    }
  }
  label {
    display: block;
    margin-bottom: 1em;
    font-size: 1.3em;
  }
  textarea,
  input {
    border-radius: 0.25em;
    width: 100%;
    border: 1px solid ${colors.ajcfDark};
    padding: 1em;
  }
  textarea {
    height: 300px;
  }
`;

const sendButtonStyle = css`
  button {
    color: ${colors.ajcfDark};
    transition: background-color 0.1s ease-in-out;
    padding: 0 1.75em 0 1.75em;
    border-radius: 100px;
    height: 40px !important;
    box-shadow: 0 0 0.05em 0.1em ${colors.ajcfDark};
    background-color: ${colors.colorEnjoyLightest};
    border-color: ${colors.ajcfWhite};
    border-width: 0px;
    &:hover {
      background-color: ${colors.colorEnjoyLighter};
    }
  }
`;

export const ContactForm = ({ handleSubmit, handleChange }: ContactFormProps) => {
  return (
    <div className="main" css={formStyle}>
      <h1>Nous contacter</h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        data-netlify-recaptcha="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <div className="fields">
          <div className={cx("half", "field")}>
            <label>Votre nom</label>
            <input type="text" name="name" onChange={handleChange} />
          </div>
          <div className={cx("half", "field")}>
            <label>Votre email</label>
            <input type="email" name="email" onChange={handleChange} />
          </div>
          <div className={cx("field")}>
            <label>Votre message</label>
            <textarea name="message" onChange={handleChange} />
          </div>
        </div>
        <div data-netlify-recaptcha="true" />
        <div css={sendButtonStyle}>
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  );
};
