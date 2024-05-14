import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-200 text-center text-white dark:bg-neutral-600 dark:text-neutral-200">
      <div className="p-6">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3 justify-items-center w-screen">
          <div className="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
              className="w-1/2 rounded-md shadow-lg" />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/111.webp"
              className="w-1/2 rounded-md shadow-lg" />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/112.webp"
              className="w-1/2 rounded-md shadow-lg" />
          </div>
        </div>
      </div>

      <div className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:
        <p className="dark:text-neutral-400">Normads Adventures</p>
      </div>
    </footer>
  );
};

export default Footer;