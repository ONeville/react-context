import React, { useEffect, useState } from "react";

export const SignMeUp = ({ signupCallBack }: any) => {
  useEffect(() => {
    console.log("SignMeUp: useEffect called");
  });
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [sendProcessing, setSendProcessing] = useState(false);

  const validateEmail = (email: string) => {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return pattern.test(email);
  };
  const notify = () => {
    console.info(`You will be notified of upcoming events${email}`);
  };

  const sendEmailToBackend = () => {
    setSendProcessing(true);
    new Promise(resolver => {
      setTimeout(() => {
        setSendProcessing(false);
        setEmail("");
        resolver();
      }, 1000);
    }).then(() => {
      notify();
      signupCallBack(email);
    });
  };

  const buttonText = sendProcessing ? "processing..." : "Get Updates";

  return (
    <div>
      <form onSubmit={sendEmailToBackend}>
        <h2 className="my-5 text-3xl font-semibold">Sign Me Up</h2>
        <h3 className="font-medium text-xl">Email</h3>
        <div className="border w-1/2 flex justify-left">
          <input
            type="email"
            value={email}
            onChange={e => {
              setEmailValid(validateEmail(e.target.value));
              return setEmail(e.target.value);
            }}
            className="border border-gray-600 w-1/2 px-2"
            required
          />
          <button
            type="submit"
            disabled={!emailValid || sendProcessing}
            className="py-2 px-10 bg-red-300 font-semibold rounded"
          >
            {/* onClick={sendEmailToBackend} */}
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};
