import { FaEnvelope } from "react-icons/fa";
import { TealNebula } from "./TealNebula";
import { TealSendButton } from "./SendBUtton";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export const ContactMain = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_e9e08iu",  
        "template_7kd6dvj",  
        form.current,
        "jNgiJFDrNT3jGvvpr"  
      )
      .then(
        () => {
          setStatus("sent");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("error");
        }
      );
  };

  return (
    <div id="contact" className="w-screen min-h-screen bg-black flex flex-col items-center justify-center py-1 px-6">
      <h2 className="flex items-center gap-3 text-4xl md:text-5xl mb-12">
        <FaEnvelope className="text-teal-400 shrink-0" />
        <span className="font-semibold bg-gradient-to-r from-teal-400 via-teal-200 to-teal-100 bg-clip-text text-transparent">
          Get in Touch
        </span>
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="
          w-full max-w-lg flex flex-col gap-6 
          bg-[#111113] p-8 rounded-2xl 
          border-r-2 border-b-2 border-teal-400 
          transition-all duration-200
        "
      >
        <TealNebula label="Your Name" name="user_name" type="text" />
        <TealNebula label="Your Email" name="user_email" type="email" />
        <TealNebula label="Message" name="message" multiline height="120px" />

        <TealSendButton status={status} />
      </form>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-400 animate-pulse">
          ❌ Failed to send message. Try again!
        </p>
      )}
      {/* {status === "sent" && (
        <p className="mt-4 text-sm text-teal-300 animate-pulse">
          ✅ Message sent successfully!
        </p>
      )} */}
    </div>
  );
};
