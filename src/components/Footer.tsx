import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center px-6 md:px-16 lg:px-24 py-12 bg-transparent">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-lg p-10 md:p-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Left Section */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-3">Opulrent</h2>
            <p className="text-gray-600 mb-6 max-w-xs">
              Opulrent empowers users to tokenize real estate properties,
              verify documents, and trade securely on blockchain-backed NFTs.
            </p>
            <div className="flex space-x-5 text-gray-600 text-xl">
              {/* Custom X (Twitter) Logo */}
              <a href="#" aria-label="Twitter" className="hover:text-black transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M23 2.999...Z" /> {/* simplified "X" path */}
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-black transition">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-black transition">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Github" className="hover:text-black transition">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">Features</a></li>
              <li><a href="#" className="hover:text-black">Pricing</a></li>
              <li><a href="#" className="hover:text-black">Integrations</a></li>
              <li><a href="#" className="hover:text-black">Changelog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">Documentation</a></li>
              <li><a href="#" className="hover:text-black">Tutorials</a></li>
              <li><a href="#" className="hover:text-black">Blog</a></li>
              <li><a href="#" className="hover:text-black">Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Careers</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
              <li><a href="#" className="hover:text-black">Partners</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2025 Opulrent. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
            <a href="#" className="hover:text-black">Cookies Settings</a>
          </div>
        </div>
      </div>

      {/* OPULRENT Below Footer */}

<div className="relative mt-16 w-full flex justify-center">
  <h1
    className="text-7xl md:text-9xl font-extrabold text-gray-200 tracking-wide select-none
               [mask-image:linear-gradient(to_top,transparent,black_60%)]
               [-webkit-mask-image:linear-gradient(to_top,transparent,black_60%)]">
    OPULRENT
  </h1>
</div>

    </footer>
  );
}
