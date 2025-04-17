import React, { useEffect, useState, useCallback, memo } from 'react';

// Navigation link configuration for easier maintenance
const NAV_LINKS = [
  { id: 'about', href: '#aboutme', label: 'About' },
  { id: 'work', href: '#work', label: 'Work' },
  { id: 'tools', href: '#tools', label: 'Tools' }
];

// Memoized NavLink component for better performance
const NavLink = memo(({ href, label }) => (
  <li>
    <a
      href={href}
      className="nav-link px-2 py-1 rounded-full transition-all duration-300 hover:bg-[#a01818] hover:scale-105"
    >
      {label}
    </a>
  </li>
));

const Navbar = memo(() => {
  const [showNavbar, setShowNavbar] = useState(false);

  // Memoize scroll handler to prevent recreation on each render
  const handleScroll = useCallback(() => {
    const showAfter = 600;
    setShowNavbar(window.scrollY > showAfter);
  }, []);

  useEffect(() => {
    // Add passive option for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-10 p-4 transition-all duration-500 ${
        showNavbar
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-5 pointer-events-none'
      }`}
    >
      <div className="flex justify-center">
        <ul
          className={`flex space-x-6 rounded-full w-[320px] h-12 items-center justify-center text-white font-bold transition-all duration-500 ${
            showNavbar
              ? 'bg-white/10 backdrop-blur-md shadow-md'
              : 'bg-[#851010]'
          }`}
        >
          {NAV_LINKS.map(link => (
            <NavLink key={link.id} href={link.href} label={link.label} />
          ))}
        </ul>
      </div>
    </nav>
  );
});

export default Navbar;