"use client";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const DM = () => {
  const [showForm, setShowForm] = useState(false);
  const handleClose = () => {
    setShowForm(false);
  };
  return (
    <>
      <div
        onClick={(e) => {
          setShowForm((prev) => !prev);
        }}
        className="primary-gradient fixed bottom-4 right-8 z-[9999999999999999999] h-12 w-12 rounded-full p-2"
      >
        <ChatBubbleLeftEllipsisIcon className="h-full w-full " />
      </div>

      {showForm && <ContactForm handleClose={handleClose} />}
    </>
  );
};

const ContactForm = ({ handleClose }) => {
  const [formState, setFormState] = useState({
    email: {
      value: "",
      error: "",
    },
    message: {
      value: "",
      error: "",
    },
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { email, message } = formState;
    console.log("email", email, "message", message);
    let updatedState = { ...formState };
    let regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.value) {
      updatedState.email.error = `Oops! Email cannot be empty.`;
      setFormState({ ...updatedState });
      return;
    }

    if (!email.value.toLowerCase().match(regex)) {
      updatedState.email.error = `Please enter a valid email address`;
      setFormState({ ...updatedState });
      return;
    }
    if (!message.value) {
      updatedState.message.error = `Oops! Message cannot be empty.`;
      setFormState({ ...updatedState });
      return;
    }
    setLoading(true);
    const res = await fetch("/api/resend/", {
      body: JSON.stringify({
        email: email.value,
        message: message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setError("Oops! Try again or click the options below!");
      setLoading(false);
      setSuccess(false);
      return;
    }
    setSuccess(`Message Sent! Will get back to you ASAP! 😄`);
    setError(false);
    setLoading(false);
    setFormState({
      email: {
        value: "",
        error: "",
      },
      message: {
        value: "",
        error: "",
      },
    });
  };

  return (
    <>
      <div
        onClick={(e) => {
          handleClose();
        }}
        className=" fixed  left-0 top-0  z-[999] h-screen w-full  bg-black  opacity-30 "
      ></div>
      {/* perform server action to submit form */}
      <form
        className=" fixed bottom-20 right-1/2 z-[999]   h-max w-[90%] max-w-md translate-x-1/2 rounded-lg bg-white p-6 shadow-lg "
        onSubmit={handleSubmit}
      >
        <div className=" mb-6 rounded-md bg-gray-200  py-2">
          <h1 className=" mb-2 text-center text-2xl font-bold text-gray-800">
            Get In Touch ! 🤝
          </h1>
          <p className=" text-center font-inter text-xs ">
            Happy to discuss your feedback or explore potential partnerships.
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
            {formState.email.error && (
              <span className="ml-1 text-red-600 ">
                {formState.email.error}
              </span>
            )}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email.value}
            onChange={(e) => {
              setFormState((prev) => {
                return {
                  ...prev,
                  [e.target.name]: {
                    value: e.target.value,
                    error: null,
                  },
                };
              });
            }}
            className="w-full rounded-lg border-2 border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="youremail@example.com"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formState.message.value}
            className="h-32 w-full resize-none rounded-lg border-2 border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Your message"
            required
            onChange={(e) => {
              setFormState((prev) => {
                return {
                  ...prev,
                  [e.target.name]: {
                    value: e.target.value,
                    error: null,
                  },
                };
              });
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="secondary-gradient w-full rounded-lg p-2 font-lexend font-bold text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        >
          {loading ? "Loading..." : "Send"}
        </button>
        <div className="my-2 w-full text-center font-semibold">
          {success && <p className="text-green-500">{success} </p>}
          {error && <p className="text-red-500">{error} 😬</p>}
        </div>

        <div className="text-ld  mt-9 flex flex-wrap justify-center gap-3 text-xs  font-semibold text-gray-600">
          <p className="font-semibold underline"> +91 9284130773</p>
          <a
            href="https://wa.me/9284130773"
            className="block font-semibold underline"
            target="_blank"
          >
            WhatsApp ME
          </a>
          <a
            href="mailto:sahillende07@gmail.com"
            className="font-semibold underline"
            target="_blank"
          >
            sahillende07@gmail.com
          </a>
        </div>
      </form>
    </>
  );
};

export default DM;
