"use client";
import { useState } from "react";

export default function SideNav() {
  const [showEmailCopied, setShowEmailCopied] = useState(false);

  const handleClipBoardOnClick = async () => {
    // try {
    //   await navigator.clipboard.writeText("caleb@paperlessfundraisers.com");
    // } catch (err) {
    //   console.log(err);
    // }
    const textField = document.createElement("textarea");
    textField.innerText = "caleb@paperlessfundraisers.com";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    setShowEmailCopied(true);
    setTimeout(() => {
      setShowEmailCopied(false);
    }, 2000);
  };

  return (
    <div className="lg:sticky lg:top-0 max-h-screen lg:basis-3/12 flex flex-col gap-8 py-10 bg-slate-900">
      <div>
        <h1 className="text-5xl font-bold mb-2">Caleb Crum</h1>
        <h3 className="text-xl italic">Full-Stack Web Developer</h3>
      </div>
      <div className="hidden lg:block">
        <ul>
          <a href="#about-me-section">
            <li className="hover:text-lg hover:font-semibold">About Me</li>
          </a>
          <a href="#projects-section">
            <li className="hover:text-lg hover:font-semibold">Projects</li>
          </a>
          <a href="#experience-section">
            <li className="hover:text-lg hover:font-semibold">Experience</li>
          </a>
        </ul>
      </div>
      <ul className={`flex`}>
        <li className="mr-4 text-slate-400">
          <a
            className="hover:text-slate-200 cursor-pointer"
            href="https://github.com/CalebCrumInstructor"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </li>
        <li className="mr-4 text-slate-400">
          <a
            className="hover:text-slate-200 cursor-pointer"
            href="https://www.linkedin.com/in/caleb-crum/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </li>
        <li className="mr-4 text-slate-400">
          <a
            className="hover:text-slate-200 cursor-pointer"
            onClick={handleClipBoardOnClick}
            href="mailto:caleb@paperlessfundraisers.com"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
            </svg>
          </a>
        </li>
        <li className="mr-4 text-slate-400">
          <a
            className="hover:text-slate-200 cursor-pointer"
            href="/Caleb-Crum-Resume.pdf"
            download
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="currentColor"
            >
              <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-3 17h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" />
            </svg>
          </a>
        </li>
      </ul>
      {showEmailCopied && (
        <p className="text-slate-400">Email Copied to Clipboard</p>
      )}
    </div>
  );
}
