import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",     // 🔴 replace
        "YOUR_TEMPLATE_ID",    // 🔴 replace
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "YOUR_PUBLIC_KEY"      // 🔴 replace
      );

      toast.success("✅ Your message has been sent!");
      reset();
    } catch (error) {
      console.error("Email Error:", error);
      toast.error("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <div
      name="Contact"
      id="contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <h1 className="text-3xl font-bold mb-2"> Contact Me</h1>
      <p className="text-gray-600 mb-6">
        Please fill out the form below to contact me.
      </p>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white w-full md:w-[500px] p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-5">Send Your Message</h2>

          {/* Full Name */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              {...register("name", { required: true })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.name && (
              <span className="text-sm text-red-600">
                Full Name is required
              </span>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email address",
                },
              })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.email && (
              <span className="text-sm text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Enter your message"
              {...register("message", { required: true })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.message && (
              <span className="text-sm text-red-600">
                Message is required
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
