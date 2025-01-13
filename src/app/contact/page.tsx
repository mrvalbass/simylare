"use client";
import { FormEvent, useState } from "react";
import {
  BACKGROUND_CTA,
  BACKGROUND_SECONDARY,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "../constants/colors";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { VscError } from "react-icons/vsc";

interface FormContent {
  name: string;
  email: string;
  message: string;
}

interface FormStyle {
  name: string;
  email: string;
  message: string;
}

enum FormStatus {
  default = "default",
  loading = "loading",
  success = "success",
  error = "error",
}

export default function MarketPlace() {
  const defaultFormContent = {
    name: "",
    email: "",
    message: "",
  };
  const defaultFormStyle = {
    name: "",
    email: "",
    message: "",
  };

  const [formContent, setFormContent] =
    useState<FormContent>(defaultFormContent);
  const [formStatus, setFormStatus] = useState<FormStatus>(FormStatus.default);
  const [formStyle, setFormStyle] = useState<FormStyle>(defaultFormStyle);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    for (const field in formContent) {
      if (
        !formContent[field as keyof FormContent] ||
        (field === "email" &&
          !emailRegex.test(formContent[field as keyof FormContent]))
      ) {
        setFormStyle((prev) => ({ ...prev, [field]: "bg-red-500" }));
        setFormStatus(FormStatus.error);
        setTimeout(() => {
          setFormStatus(FormStatus.default);
          setFormStyle(defaultFormStyle);
        }, 2000);
        return;
      }
    }

    setFormStatus(FormStatus.loading);
    const options = {
      method: "POST",
      body: JSON.stringify(formContent),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      "https://simylare-back.vercel.app/contact/email",
      options
    ).then((r) => r.json());
    if (response.success) {
      setFormStatus(FormStatus.success);
    } else {
      setFormStatus(FormStatus.error);
    }
    setTimeout(() => {
      setFormStatus(FormStatus.default);
      setFormContent(defaultFormContent);
    }, 2000);
  };

  const fieldClass = "flex flex-col gap-2";
  const labelClass = `${TEXT_PRIMARY} font-Libre text-md`;
  const inputClass = `${BACKGROUND_SECONDARY} ${TEXT_SECONDARY} font-Hanken rounded px-2 py-1 transition-all duration-200`;

  return (
    <main className="grow flex flex-col">
      <h1
        className={`${TEXT_PRIMARY} font-Libre text-2xl text-center mt-10 md:hidden font-bold`}
      >
        Contact
      </h1>
      <form
        className="flex flex-col p-10 gap-10 grow w-full md:w-4/5 max-w-[1000px] self-center"
        onSubmit={handleSubmit}
      >
        <div className={fieldClass}>
          <label htmlFor="name" className={labelClass}>
            Nom*
          </label>
          <input
            type="text"
            id="name"
            placeholder="Nom"
            className={`${inputClass} ${formStyle.name}`}
            autoComplete="name"
            value={formContent.name}
            onChange={(e) =>
              setFormContent((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div className={fieldClass}>
          <label htmlFor="email" className={labelClass}>
            Email*
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className={`${inputClass} ${formStyle.email}`}
            autoComplete="email"
            value={formContent.email}
            onChange={(e) =>
              setFormContent((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div className={`${fieldClass} grow`}>
          <label htmlFor="message" className={labelClass}>
            Message*
          </label>
          <textarea
            id="message"
            className={`${inputClass} ${formStyle.message} grow`}
            placeholder="Message"
            value={formContent.message}
            onChange={(e) =>
              setFormContent((prev) => ({ ...prev, message: e.target.value }))
            }
          />
        </div>
        <button
          type="submit"
          className={`${BACKGROUND_CTA} ${TEXT_SECONDARY} w-1/4 h-10 self-center font-Hanken rounded text-lg flex justify-center items-center`}
        >
          {formStatus === FormStatus.default && "Envoyer"}
          {formStatus === FormStatus.loading && (
            <AiOutlineLoading3Quarters className="animate-spin" size={25} />
          )}
          {formStatus === FormStatus.success && (
            <BsCheck2Circle size={25} className="text-green-600" />
          )}
          {formStatus === FormStatus.error && (
            <VscError size={25} className="text-red-600" />
          )}
        </button>
      </form>
    </main>
  );
}
