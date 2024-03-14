"use client";
import { useState } from "react";
import styles from "./sendMessage.module.scss";
import { UInput } from "../UComponents/UInput";
import { SendMessageIcon } from "../icons";
type Contact = {
  contact: string;
  desc: string;
  message: string;
  YourName: string;
  YourEmail: string;
  YourMessage: string;
  EnterYourName: string;
  EnterYourEmail: string;
  EnterYourNeeds: string;
  SendMessage: string;
};

type InitialState = {
  name: string;
  email: string;
  message: string;
};

export const FormSendMessage = ({
  content,
  errorSubmit,
}: {
  content: Contact;
  errorSubmit: {
    messageError: string;
    success: string;
  };
}) => {
  const [initialState, setInitialState] = useState<InitialState>({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");
  const TOKEN = process.env.NEXT_PUBLIC_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;

  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  const messageTg = `<b>New message resume</b>\n<b>Name: ${initialState.name}</b>\n<b>Email: ${initialState.email}</b>\n<pre>Message: ${initialState.message}</pre>`;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    const { name, value } = target;

    setInitialState({ ...initialState, [name]: value });
  };

  const handlerSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const reset = {
      name: "",
      email: "",
      message: "",
    };
    const sendMessage = await fetch(`${URI_API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: messageTg,
      }),
    });
    if (!sendMessage.ok) {
      return setErrorMessage(errorSubmit.messageError);
    }
    setSuccess(errorSubmit.success);
    setInitialState(reset);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles["wrapper__message-box"]}>
        <h2>{content.message}</h2>
      </div>
      <form action="" className={styles.form} onSubmit={handlerSubmit}>
        <div className={styles["input-box"]}>
          <label>
            <p className={styles.signature}>{content.YourName}</p>
            <UInput
              name="name"
              type="text"
              placeholder={content.EnterYourName}
              value={initialState.name}
              change={handleChange}
              required={true}
            />
          </label>
          <label>
            <p className={styles.signature}>{content.YourEmail}</p>
            <UInput
              name="email"
              type="email"
              value={initialState.email}
              placeholder={content.EnterYourEmail}
              change={handleChange}
              required={true}
            />
          </label>
        </div>
        {errorMessage ? (
          <p className={styles.errorMessage}>{errorMessage}</p>
        ) : (
          <div className={styles.bottomBox}>
            <p className={styles.signature}>{content.YourMessage}</p>
            <textarea
              name="message"
              value={initialState.message}
              placeholder={content.EnterYourNeeds}
              onChange={(e) => {
                e.target.value;

                setInitialState({ ...initialState, message: e.target.value });
              }}
              required={true}
            ></textarea>
            {success && <p className={styles.success}>{success}</p>}
            <button type="submit">
              <span>{content.SendMessage}</span>
              <SendMessageIcon className="" />
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
