// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
// import { useGSAP } from "@gsap/react";
// import { SplitText } from "gsap/SplitText";
// import gsap from "gsap";
// import { useState } from "react";
// export default function Footer() {
//   const [email, setEmail] = useState("");
//   useGSAP(() => {
//     const BannerText = SplitText.create(".footer-text", {
//       type: "lines,chars",
//       mask: "chars",
//     });
//     gsap.from(BannerText.chars, {
//       y: 600,
//       stagger: 0.02,
//       // delay: 6,
//       duration: 1.5,
//       ease: "expo.out",
//       scrollTrigger: {
//         trigger: ".footer-section",
//         start: "top 50%",
//         end: "bottom top",
//       },
//     });
//   }, []);

//   const HandleScrollToSection = () => {
//     gsap.to(window, {
//       duration: 2,
//       scrollTo: "#contact",
//       ease: "power2.out",
//     });
//   };

//   const handleSubmit = async (e) => {
//     const payload = {
//       email: email,
//       type: "subscribe",
//     };
//     e.preventDefault();
//     try {
//       await fetch(
//         "https://script.google.com/macros/s/AKfycbxV-Oo8U0l0o4EsOqeMfvYPXF-l5rBZSlVZIp4a2UWN19ShAvn8S-YFTlerN9sR_N2G/exec",
//         {
//           method: "POST",
//           body: JSON.stringify(payload),
//           mode: "no-cors",
//         }
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <footer className="footer-section h-full">
//       <Navbar />

//       <h2 className="footer-text pt-30 uppercase font-BebasNeue text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-center xl:leading-[7rem]">
//         SO, where are you at?
//       </h2>
//       <div className=" mt-6 text-center font-BebasNeue text-2xl md:text-4xl italic flex flex-col md:flex-row items-center justify-center md:gap-10 w-full">
//         <div
//           to={"/"}
//           className="cursor-pointer"
//           onClick={() => HandleScrollToSection()}
//         >
//           {" "}
//           I need help on <span className="text-accent">A PITCH</span>{" "}
//         </div>
//         {"     "}
//         <div
//           to={"/"}
//           className="cursor-pointer"
//           onClick={() => HandleScrollToSection()}
//         >
//           {" "}
//           I need help a <span className="text-accent">
//             POSSIBLE PROJECT
//           </span>{" "}
//         </div>
//       </div>

//       <div className="w-full flex gap-4 container mx-auto px-4 flex-col md:flex-row pt-40">
//         <div className="flex flex-col md:flex-row gap-4 md:w-1/2">
//           <div className="flex flex-col p-6 gap-4 border-2 border-slate-400 border-dashed font-BebasNeue tracking-wide w-full">
//             <p>WISECRACK - THE PRODUCTION COMPANY</p>
//             <p className="text-slate-500">
//               No.9, 1st Street, Poes Road, Teynampet, <br /> Chennai, Tamil Nadu
//               - 600018
//             </p>
//             <a href="tel:+919840440365" className="text-accent hover:underline">
//               +91 98404 40365
//             </a>
//             <a href="tel:+918939855001" className="text-accent hover:underline">
//               +91 89398 55001
//             </a>
//           </div>
//         </div>
//         <div className="flex-1 flex flex-col p-6 gap-4 border-2 border-slate-400 border-dashed font-BebasNeue tracking-wide">
//           <p>Our Newsletter</p>
//           <p className="text-slate-500">
//             Join our mailing list to get send regular Updates.
//           </p>
//           <input
//             type="email"
//             className="bg-slate-800 text-slate-400 p-4 rounded-md font-BebasNeue tracking-wider"
//             placeholder="Your email address..."
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//           />
//           <button onClick={handleSubmit}>Subscribe</button>
//         </div>
//       </div>
//       <div className="container mx-auto py-6 px-4 font-BebasNeue text-xl sm:flex justify-between items-center">
//         <p>@ Wise crack Studio Ltd 2025</p>
//         <p>
//           <span>EMail us: </span>{" "}
//           <Link className="text-accent" to="mailto:info@thewisecrack.in">
//             info@thewisecrack.in
//           </Link>
//         </p>

//         <Link
//           to="https://vulturelines.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <p>
//             developed by <span className="text-accent">VLT</span>
//           </p>
//         </Link>
//       </div>
//     </footer>
//   );
// }

import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useGSAP(() => {
    const BannerText = SplitText.create(".footer-text", {
      type: "lines,chars",
      mask: "chars",
    });
    gsap.from(BannerText.chars, {
      y: 600,
      stagger: 0.02,
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top 50%",
        end: "bottom top",
      },
    });
  }, []);

  const HandleScrollToSection = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: "#contact",
      ease: "power2.out",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    const payload = { email, type: "subscribe" };

    console.log(payload);

    try {
      setLoading(true);
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxV-Oo8U0l0o4EsOqeMfvYPXF-l5rBZSlVZIp4a2UWN19ShAvn8S-YFTlerN9sR_N2G/exec",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: { "Content-Type": "application/json" },
          mode: "no-cors",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to subscribe. Please try again later.");
      }

      // alert("Subscribed successfully 🎉");
      setEmail(""); // clear input on success
    } catch (error) {
      console.error("Error while subscribing:", error);
      // alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer-section h-full">
      <Navbar />

      <h2 className="footer-text pt-30 uppercase font-BebasNeue text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-center xl:leading-[7rem]">
        SO, where are you at?
      </h2>

      <div className="mt-6 text-center font-BebasNeue text-2xl md:text-4xl italic flex flex-col md:flex-row items-center justify-center md:gap-10 w-full">
        <div className="cursor-pointer" onClick={HandleScrollToSection}>
          I need help on <span className="text-accent">A PITCH</span>
        </div>
        <div className="cursor-pointer" onClick={HandleScrollToSection}>
          I need help a <span className="text-accent">POSSIBLE PROJECT</span>
        </div>
      </div>

      <div className="w-full flex gap-4 container mx-auto px-4 flex-col md:flex-row pt-40">
        <div className="flex flex-col md:flex-row gap-4 md:w-1/2">
          <div className="flex flex-col p-6 gap-4 border-2 border-slate-400 border-dashed font-BebasNeue tracking-wide w-full">
            <p>WISECRACK - THE PRODUCTION COMPANY</p>
            <p className="text-slate-500">
              No.9, 1st Street, Poes Road, Teynampet, <br /> Chennai, Tamil Nadu
              - 600018
            </p>
            <a href="tel:+919840440365" className="text-accent hover:underline">
              +91 98404 40365
            </a>
            <a href="tel:+918939855001" className="text-accent hover:underline">
              +91 89398 55001
            </a>
          </div>
        </div>

        <div className="flex-1 flex flex-col p-6 gap-4 border-2 border-slate-400 border-dashed font-BebasNeue tracking-wide">
          <p>Our Newsletter</p>
          <p className="text-slate-500">
            Join our mailing list to get send regular Updates.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              className="bg-slate-800 text-slate-400 p-4 rounded-md font-BebasNeue tracking-wider"
              placeholder="Your email address..."
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-accent text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition disabled:opacity-50"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto py-6 px-4 font-BebasNeue text-xl sm:flex justify-between items-center">
        <p>@ Wise crack Studio Ltd 2025</p>
        <p>
          <span>Email us: </span>{" "}
          <Link className="text-accent" to="mailto:info@thewisecrack.in">
            info@thewisecrack.in
          </Link>
        </p>

        <Link
          to="https://vulturelines.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            developed by <span className="text-accent">VLT</span>
          </p>
        </Link>
      </div>
    </footer>
  );
}
