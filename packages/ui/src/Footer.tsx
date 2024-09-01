import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">IndiPay</h3>
            <p>
              We empower your financial journey with cutting-edge technology.
              Join us and take control of your financial future.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="#about" className="text-gray-400 hover:text-gray-200">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-gray-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-gray-400 hover:text-gray-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-gray-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul>
              <li>
                <a href="#terms" className="text-gray-400 hover:text-gray-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-gray-400 hover:text-gray-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#cookies"
                  className="text-gray-400 hover:text-gray-200"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2024 IndiPay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
