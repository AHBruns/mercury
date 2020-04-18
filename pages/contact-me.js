import React, { useState } from "react";

export default () => {
  const [status, setStatus] = useState("");

  const submitForm = async (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <div className="flex flex-col items-center justify-center flex-1 w-screen px-4 py-10 bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-900">Contact Me</h1>
      <form
        onSubmit={submitForm}
        action="https://formspree.io/mgelnpeg"
        method="POST"
        className="flex flex-col w-full max-w-sm px-6 py-10 mt-10 bg-gray-900 rounded-lg shadow-2xl"
      >
        <label className="tracking-widest text-gray-100 text-md">Email:</label>
        <input
          type="email"
          name="email"
          className="px-4 py-2 mt-2 text-gray-900 placeholder-gray-800 bg-gray-200 rounded-md shadow-md focus:outline-none hover:bg-gray-300 focus:bg-gray-100"
        />
        <label className="mt-6 tracking-widest text-gray-100 text-md">
          Message:
        </label>
        <div className="mt-2 textarea-dragger">
          <textarea
            type="text"
            name="message"
            className="w-full px-4 py-2 text-gray-900 placeholder-gray-800 bg-gray-200 rounded-md shadow-md focus:outline-none hover:bg-gray-300 focus:bg-gray-100"
          />
        </div>
        {status === "SUCCESS" ? (
          <p className="mt-6 text-gray-100">Thanks!</p>
        ) : (
          <button
            aria-label="submit"
            className="p-2 mt-6 text-gray-100 bg-blue-600 rounded-md shadow-md focus:outline-none focus:bg-blue-700 hover:bg-blue-500"
          >
            Submit
          </button>
        )}
        {status === "ERROR" && (
          <p className="mt-6 text-gray-100">Ooops! There was an error.</p>
        )}
      </form>
    </div>
  );
};
