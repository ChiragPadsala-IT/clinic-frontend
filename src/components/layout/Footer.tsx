const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left Side */}
        <p className="text-sm">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

        {/* Center */}
        <div className="flex items-center gap-2">
          <span className="text-sm">Powered by</span>
          <span className="font-semibold text-white">Chirag Padsala</span>
        </div>

        {/* Right Side (optional social icons) */}
        {/* <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
