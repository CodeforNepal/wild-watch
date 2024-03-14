import { useState } from "react";
import { contact } from "../data";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setFormData({
      email: "",
      subject: "",
      name: "",
      message: "",
    });
  };
  return (
    <section className="section min-h-[700px]" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold">
            <span className="relative text-6xl before:content-['Contact'] before:text-accent before:opacity-40 before:-top-1 before:hidden before:lg:block z-0"></span>
            <span className="lg:absolute relative w-[300px] z-10 text-3xl  text-[#333333] text-center">
              Reach Out!!
            </span>
          </h2>
          <p className="subtitle lg:mt-14 mt-8 text-center w-[60%] text-[var(--sub-heading)]">
            Reach out to WildWatch today. We're here to answer your questions,
            discuss collaborations, and assist with any inquiries. Don't
            hesitate to get in touch!{" "}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row mt-8  ">
          <div className="lg:w-1/2">
            <div className="flex flex-col space-y-8 lg:space-y-10 mb-12 lg:mb-0 lg:pt-2">
              {contact.map((item, index) => {
                const { icon, title, subtitle, description } = item;
                return (
                  <div
                    className="flex flex-col lg:flex-row gap-x-12 items-center"
                    key={index}
                  >
                    <div className="text-accent rounded-sm w-14 h-14 flex lg:items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl lg:ml-10">
                      {" "}
                      {icon}{" "}
                    </div>
                    <div className="w-[450px]">
                      <h2 className="font-body text-xl mb-1 text-[var(--main-heading)]">
                        {title}
                      </h2>
                      <p className="mb-1 text-[var(--sub-heading)] ">
                        {subtitle}
                      </p>
                      <p className="text-accent font-normal">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:w-1/2">
            <form
              className="space-y-8 w-[90%] mx-auto mb-3"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col lg:flex-row gap-8 ">
                <input
                  className="input w-full lg:w-2/3 py-4 placeholder-gray-500 lg:pl-4 focus:border-teal-500 focus:ring-teal-500 text-center lg:text-left "
                  type="text"
                  placeholder="Your Name"
                  onChange={handleInputChange}
                  name="name"
                  required
                />
                <input
                  className="input w-full lg:w-2/3 py-4 placeholder-gray-500 lg:pl-4 lg:text-left text-center"
                  type="email"
                  placeholder="Your Email"
                  onChange={handleInputChange}
                  name="email"
                  required
                />
              </div>
              <input
                type="text"
                className="input w-full py-4 placeholder-gray-500 lg:pl-4 text-center lg:text-left"
                placeholder="Subject"
                onChange={handleInputChange}
                name="subject"
                required
              />
              <textarea
                className="textarea w-full py-16 placeholder-gray-500 lg:pl-4 text-center lg:text-left"
                placeholder="Your Message"
                onChange={handleInputChange}
                name="message"
                required
              ></textarea>
              <button
                type="submit"
                className="lg:mt-8 lg:mb-8 bg-[#333333] hover:bg-gray-800 transition-all text-white py-4 px-4 rounded-md shadow-md text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
