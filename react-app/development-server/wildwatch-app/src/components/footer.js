import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 z-10">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <a href="#" className="hover:text-gray-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 3c-3.675 0-6.676 2.996-6.676 6.676 0 2.996 1.949 5.54 4.649 6.437-.083.184-.375.922-.321 1.59.061.586.369 1.071.778 1.408-.287.083-.587.129-.894.129-2.237 0-4.057-1.823-4.057-4.057 0-2.238 1.82-4.058 4.058-4.058 1.855 0 3.442 1.258 3.898 2.95.307-.153.653-.247 1.024-.247 1.529 0 2.775 1.246 2.775 2.775 0 2.023-1.967 4.063-4.843 4.063-3.297 0-5.93-2.818-5.93-6.207 0-3.443 2.721-6.207 6.075-6.207 3.286 0 5.924 2.795 5.924 6.207 0 1.552-.692 3.042-1.777 4.149-.139.155-.332.442-.349.571-.036.324-.074.646-.125.968-.014.081-.058.103-.13.042C16.287 18.52 13.261 19 12 19s-4.287-.48-6.25-1.249c-.071-.06-.115-.157-.129-.262a17.7 17.7 0 0 1-.058-1.155c0-1.197.232-2.355.649-3.437a8.84 8.84 0 0 0-.526-7.083A3.635 3.635 0 0 0 2 8.707a4.006 4.006 0 0 0 1.055 2.739A3.958 3.958 0 0 0 5 12c0 2.206 1.794 4 4 4 1.243 0 2.347-.57 3.098-1.464.144.952.555 1.822 1.156 2.533-.71.175-1.452.268-2.204.268-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8a8.98 8.98 0 0 1-4.441-1.175z"
              ></path>
            </svg>
          </a>
          <a href="#" className="hover:text-gray-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 6a9 9 0 0 1 9 9c0 .49-.04.961-.118 1.418a5.478 5.478 0 0 1-2.365-.317 5.515 5.515 0 0 0 4.071-5.305l.05-.373a5.498 5.498 0 0 1-1.623 1.123 2.74 2.74 0 0 0-1.076-.26 2.76 2.76 0 0 0-.662.081 5.517 5.517 0 0 0 5.117 3.813 2.766 2.766 0 0 1-.719-1.52 2.754 2.754 0 0 0 1.238-.047 2.763 2.763 0 0 1-2.22-2.717V9.887a5.493 5.493 0 0 0 2.764.755 5.508 5.508 0 0 1-1.522-4.655 5.516 5.516 0 0 1 8.012-4.986 9.002 9.002 0 0 0 2.777-1.057 5.506 5.506 0 0 1-2.42 3.037 10.02 10.02 0 0 0 2.635-.717A10.046 10.046 0 0 1 3 6zm0 0v12"
              ></path>
            </svg>
          </a>
          <a href="#" className="hover:text-gray-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7M5 5l7 7"
              ></path>
            </svg>
          </a>
        </div>
        <p className="text-sm">&copy; 2024 WildWatch. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
