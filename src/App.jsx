import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

import "./App.css";

function App() {
  const container = useRef();
  const iconsRef = useRef([]);

  useEffect(() => {
    // Initialize GSAP timeline
    const tl = gsap.timeline({ defaults: { duration: 0.3 } });

    // Add hover effect to each icon
    iconsRef.current.forEach((icon) => {
      const scaleAmount = 1.2; // Scale amount on hover

      // Mouse enter event (hover in)
      icon.addEventListener("mouseenter", () => {
        tl.to(icon, { scale: scaleAmount });
      });

      // Mouse leave event (hover out)
      icon.addEventListener("mouseleave", () => {
        tl.to(icon, { scale: 1 });
      });
    });

    // Clean up event listeners
    return () => {
      iconsRef.current.forEach((icon) => {
        icon.removeEventListener("mouseenter", () => {});
        icon.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  useGSAP(() => {
    gsap.from(".box", {
      rotation: "+=360",
      duration: 3,
      ease: "none",
      repeat: -1,
    });
  });

  return (
    <>
      <div
        className="flex flex-col justify-center items-center bg-[#836342] w-full font-robotoBold"
        ref={container}
      >
        <img src="logo.png" className="w-72 rounded-full my-7 box" />
        <div>
          <p className="font text-3xl my-5">CA: TBA</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="mb-3 text-2xl">SOCIAL LINKS</div>
          <div className="flex">
            <a href="https://twitter.com/PUGGYCOIN_" target="_blank">
              <img
                ref={(el) => (iconsRef.current[0] = el)}
                src="icons/twitter.avif"
                className="rounded-full w-[3.3rem] mx-2"
                alt="Twitter"
              />
            </a>

            <a href="https://t.me/puggyportal" target="_blank">
              <img
                ref={(el) => (iconsRef.current[1] = el)}
                src="icons/telegram.png"
                className="rounded-full w-[3.3rem] mx-2"
                alt="Telegram"
              />
            </a>

            <a href="#">
              <img
                ref={(el) => (iconsRef.current[2] = el)}
                src="icons/solscan.webp"
                className="rounded-full w-[3.3rem] mx-2"
                alt="Solscan"
              />
            </a>

            <a href="#">
              <img
                ref={(el) => (iconsRef.current[3] = el)}
                src="icons/pumpfun.jpeg"
                className="rounded-full w-[3.3rem] mx-2"
                alt="Pumpfun"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="mb-3 mt-7 text-2xl">Tokenomics</p>
          <div className="flex text-xl ">
            <div className="mx-4">
              <div>
                <p>
                  NAME: <span className="font-roboto">PUGGY COIN</span>
                </p>
              </div>
              <div>
                <p>
                  TOTAL SUPPLY: <span className="font-roboto">121B</span>
                </p>
              </div>
              <div>
                <p>CONTRACT RENOUNCED</p>
              </div>
            </div>
            <div>
              <div>
                <p>
                  SYMBOL: <span className="font-roboto">PUGGY</span>
                </p>
              </div>
              <div>
                <p>
                  TAX: <span className="font-roboto">0/0</span>
                </p>
              </div>
              <div>
                <p>LIQUIDITY POOL BURNED</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5">
          <a href="#">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-6 rounded-2xl text-lg hover:from-indigo-500 hover:from-10% hover:via-sky-500 hover:via-30% hover:to-emerald-500 hover:to-90% transition hover:transition duration-300">
              BUY ON PUMP
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
