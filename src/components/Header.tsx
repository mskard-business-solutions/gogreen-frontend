import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Topbar Start */}
      <div className="w-full bg-dark text-light px-0 py-2">
        <div className="hidden lg:flex justify-between items-center max-w-full">
          <div className="px-5 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="fa fa-phone-alt"></span>
              <span>+91-8376007474</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="far fa-envelope"></span>
              <span>info@vidhienterprises.com</span>
            </div>
          </div>
          <div className="px-5 flex items-center gap-2">
            <span>Follow Us:</span>
            <a 
              className="text-light hover:text-primary transition-colors px-2" 
              target="_blank" 
              rel="noopener noreferrer"
              href="https://www.facebook.com/p/Vidhi-Enterprises-61560940581059/"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a 
              className="text-light hover:text-primary transition-colors px-2" 
              target="_blank" 
              rel="noopener noreferrer"
              href="#"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a 
              className="text-light hover:text-primary transition-colors px-2" 
              target="_blank" 
              rel="noopener noreferrer"
              href="https://in.linkedin.com/company/vidhi_enterprises"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              className="text-light hover:text-primary transition-colors px-2" 
              target="_blank" 
              rel="noopener noreferrer"
              href="https://www.instagram.com/vidhi_enterprises_delhi/"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a 
              className="text-light hover:text-primary transition-colors px-2" 
              target="_blank" 
              rel="noopener noreferrer"
              href="https://www.youtube.com/@vidhi_enterprises"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Topbar End */}
    </>
  );
}
