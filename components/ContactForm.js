import React from "react";

export function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1530704d-8d16-472e-b01a-587e857067d9");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-700 my-11 rounded-2xl p-10">

        <form onSubmit={onSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 font-light text-sm text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-3 py-1 placeholder-gray-300 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500  dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 font-light text-sm text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="email@example.com"
              className="w-full px-3 py-1 placeholder-gray-300 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500  dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 font-light text-sm text-white"
            >
              Message
            </label>
            <textarea
              name="message"
              required
              rows="3"
              placeholder="Enter Message"
              className="w-full px-3 py-1 placeholder-gray-300 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500  dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            ></textarea>
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full px-3 py-4 text-white bg-indigo-700 rounded-md focus:bg-indigo-600 focus:outline-none"
            >
              Submit Form
            </button>
            <div className=" w-full text-center bg-lime-200 my-3">{result}</div>
          </div>
        </form>
      </div>
    </>
  );
}
