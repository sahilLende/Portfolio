import React from "react";

const EmailTemplate = ({ message, email }) => {
  return (
    <div className="rounded bg-gray-100 p-4 shadow-md">
      <h1 className="mb-4 font-eduQLD text-2xl font-bold text-yellow-600">
        Visitor From Portfolio
      </h1>
      <h2 className="mb-2 text-lg font-semibold">Email:</h2>
      <p className="break-words text-base">{email}</p>
      <h2 className="mb-2 text-lg font-semibold">Message:</h2>
      <p className="text-base leading-relaxed">{message}</p>
    </div>
  );
};

export default EmailTemplate;
