"use client";
import { FormEvent, useState } from "react";
import {
  BACKGROUND_CTA,
  BACKGROUND_SECONDARY,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "../constants/colors";

interface FormContent {
  name?: string;
  email?: string;
  message?: string;
}

export default function MarketPlace() {
  const [formContent, setFormContent] = useState<FormContent>({});

  const fieldClass = "flex flex-col gap-2";
  const labelClass = `${TEXT_PRIMARY} font-Libre text-md`;
  const inputClass = `${BACKGROUND_SECONDARY} ${TEXT_SECONDARY} font-Hanken rounded px-2 py-1`;
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formContent);
    setFormContent({});
  };
  return (
    <main className="grow flex flex-col">
      <h1
        className={`${TEXT_PRIMARY} font-Libre text-2xl text-center mt-10 md:hidden`}
      >
        Contact
      </h1>
      <form
        className="flex flex-col p-10 gap-10 grow w-full md:w-4/5 max-w-[1000px] self-center"
        onSubmit={handleSubmit}
      >
        <div className={fieldClass}>
          <label htmlFor="name" className={labelClass}>
            Nom
          </label>
          <input
            type="text"
            id="name"
            placeholder="Nom"
            className={inputClass}
            autoComplete="name"
            value={formContent.name}
            onChange={(e) =>
              setFormContent((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div className={fieldClass}>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className={inputClass}
            autoComplete="email"
            value={formContent.email}
            onChange={(e) =>
              setFormContent((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div className={`${fieldClass} grow`}>
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            className={`${inputClass} grow`}
            placeholder="Message"
            value={formContent.message}
            onChange={(e) =>
              setFormContent((prev) => ({ ...prev, message: e.target.value }))
            }
          />
        </div>
        <button
          type="submit"
          className={`${BACKGROUND_CTA} ${TEXT_SECONDARY} self-center font-Hanken px-2 py-1 rounded text-lg`}
        >
          Envoyer
        </button>
      </form>
    </main>
  );
}
