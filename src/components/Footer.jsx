import React from 'react';

const Footer = () => {
  return (
    <footer className="p-5 bg-black text-white grid grid-cols-3 gap-4">
      <div>
        <h2 className="font-bold text-lg mb-2">Column 1</h2>
        <ul className="space-y-2">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          {/* Add more items as needed */}
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-lg mb-2">Column 2</h2>
        <ul className="space-y-2">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          {/* Add more items as needed */}
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-lg mb-2">Column 3</h2>
        <ul className="space-y-2">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          {/* Add more items as needed */}
        </ul>
      </div>
      <div className='flex'>
        <i className="fab fa-facebook-square text-2xl mx-2"> Fb </i>
        <i className="fab fa-twitter-square text-2xl mx-2"> X </i>
        <i className="fab fa-instagram-square text-2xl mx-2"> Instagram</i>
      </div>
    </footer>
  );
};

export default Footer;