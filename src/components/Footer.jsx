import React, { memo } from 'react';

const Footer = memo(() => {
  return (
    <footer className="py-8 mt-16">
      <div className="container mx-auto text-center text-gray-400">
        <p>&copy; 2025 Farhan Haziq. All rights reserved.</p>
      </div>
    </footer>
  );
});

export default Footer;