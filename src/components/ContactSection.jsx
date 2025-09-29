import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { Mail, PhoneCallIcon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  useGSAP(() => {
    const BannerText = SplitText.create(".Contact-headding", {
      type: "lines,chars",
      mask: "chars",
    });
    const ZennenText = SplitText.create(".Contact-text", {
      type: "lines,chars",
      mask: "chars",
    });
    const LocationText = SplitText.create(".Location-text", {
      type: "lines,chars",
      mask: "chars",
    });
    gsap.from(BannerText.chars, {
      y: 600,
      stagger: 0.02,
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 50%",
        end: "bottom top",
      },
    });
    gsap.from(ZennenText.chars, {
      y: 600,
      stagger: 0.02,
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 50%",
        end: "bottom top",
      },
    });
    gsap.from(LocationText.chars, {
      y: 600,
      stagger: 0.02,
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".location-section",
        start: "top 50%",
        end: "bottom top",
      },
    });
  }, []);

  const [fromData, setFromData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // reset previous message

    const payload = {
      ...fromData,
      type: "contact",
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxV-Oo8U0l0o4EsOqeMfvYPXF-l5rBZSlVZIp4a2UWN19ShAvn8S-YFTlerN9sR_N2G/exec",
        {
          method: "POST",
          body: JSON.stringify(payload),
          mode: "no-cors",
        }
      );

      // reset form
      setFromData({
        name: "",
        mobile: "",
        email: "",
        address: "",
        description: "",
      });

      setMessage(" Thank you! Your details have been submitted.");
    } catch (error) {
      console.error(error);
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact-section h-full pt-40 pb-40 px-4 container mx-auto">
        <div className="flex flex-col md:flex-row gap-4 ">
          <div className="md:w-1/2">
            <h2 className="Contact-headding font-BebasNeue text-4xl sm:text-6xl lg:text-8xl tracking-tighter mb-10">
              Contact Us
            </h2>

            <div className="flex flex-col gap-2 text-lg mb-10 font-BebasNeue">
              <p>Emails :</p>
              <div className="flex gap-4 items-center">
                <Mail />
                <Link
                  className="text-accent hover:underline"
                  to="mailto:info@thewisecrack.in mt-4"
                >
                  info@thewisecrack.in
                </Link>
              </div>
              <div className="flex gap-4 items-center">
                <Mail />
                <Link
                  className="text-accent hover:underline"
                  to="mailto:wisecrackvf@gmail.com"
                >
                  wisecrackvf@gmail.com
                </Link>
              </div>
              <div className="flex gap-4 items-center">
                <Mail />
                <Link
                  className="text-accent hover:underline"
                  to="mailto:wisecracksocialmedia@gmail.com"
                >
                  wisecracksocialmedia@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-lg mb-10 font-BebasNeue">
              <p>Contact Number :</p>
              <div className="flex gap-4 items-center">
                <PhoneCallIcon />
                <a
                  href="tel:+919840440365"
                  className="text-accent hover:underline"
                >
                  +91 98404 40365
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <PhoneCallIcon />
                <a
                  href="tel:+918939855001"
                  className="text-accent hover:underline"
                >
                  +91 89398 55001
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <form className="" onSubmit={handleSubmit}>
              <h2 className="Contact-text font-BebasNeue text-4xl sm:text-6xl lg:text-8xl tracking-tighter mb-10">
                Get In Touch
              </h2>
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="flex flex-col  gap-2 w-full">
                  <label>Name</label>
                  <input
                    type="text"
                    className="bg-slate-800 text-slate-400 p-4 rounded-md font-BebasNeue tracking-wider"
                    placeholder="Name"
                    name="name"
                    value={fromData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className=" flex flex-col gap-2 w-full">
                  <label>Mobile Number (WhatsApp)</label>
                  <input
                    type="text"
                    className="bg-slate-800 text-slate-400 p-4 rounded-md font-BebasNeue tracking-wider"
                    placeholder="Mobile Number (WhatsApp)"
                    name="mobile"
                    value={fromData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mt-4 w-full">
                <div className=" flex flex-col gap-2 w-full">
                  <label>Email Address</label>
                  <input
                    type="Email"
                    className="bg-slate-800 text-slate-400 p-4 rounded-md font-BebasNeue tracking-wider"
                    placeholder="Email Address"
                    name="email"
                    value={fromData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className=" flex flex-col gap-2 w-full">
                  <label>Address</label>
                  <input
                    type="Text"
                    className="bg-slate-800 text-slate-400 p-4 rounded-md font-BebasNeue tracking-wider"
                    placeholder="Address"
                    name="address"
                    value={fromData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-2 w-full mt-4">
                <label>Description</label>
                <textarea
                  rows={4}
                  className="bg-slate-800 text-slate-400 p-4 rounded-md font-BebasNeue tracking-wider"
                  placeholder="Description"
                  name="description"
                  value={fromData.description}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`${
                  loading ? "bg-gray-400 cursor-not-allowed" : "bg-accent"
                } text-white p-4 rounded-md font-BebasNeue tracking-wider w-full mt-6 hover:bg-accent/50 transition`}
              >
                {loading ? "Submitting..." : "Let's talk"}
              </button>

              {message && (
                <p className="mt-4 text-center font-BebasNeue text-lg text-green-400">
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="w-full flex gap-4 container mx-auto px-4 flex-col pb-10">
          <h2 className="Location-text pb-20 uppercase font-BebasNeue text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-center xl:leading-[7rem]">
            Location
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.609562526036!2d80.2483605748426!3d13.040011887281715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52676f29746091%3A0x282b871407b1e054!2s9%2C%20Poes%20Rd%201st%20St%2C%20Subbarayan%20Nagar%2C%20Teynampet%2C%20Chennai%2C%20Tamil%20Nadu%20600018!5e1!3m2!1sen!2sin!4v1758955973331!5m2!1sen!2sin"
            className="w-full border-0"
            height="500"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
