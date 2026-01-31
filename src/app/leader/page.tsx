import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features | Vidhi Enterprises",
  description: "Learn about Vidhi Enterprises features - no hidden costs, dedicated team, 24/7 availability, modern equipment, and 100% satisfaction guarantee for irrigation solutions.",
  keywords: "vidhi enterprises features, irrigation solutions, customer satisfaction, dedicated team",
};

export default function Leader() {
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark text-light px-0 py-2">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <span className="fa fa-phone-alt me-2"></span>
              <span>+012 345 6789</span>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <span className="far fa-envelope me-2"></span>
              <span>info@example.com</span>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center mx-n2">
              <span>Follow Us:</span>
              <a className="btn btn-link text-light" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-link text-light" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-link text-light" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="btn btn-link text-light" href="">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg p-2 xm-5 navbar-light sticky-top p-2" style={{ backgroundColor: 'rgb(212, 240, 212)' }}>
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image 
            src="https://d170mw2nhcb1v0.cloudfront.net/img/vidhi_logo.png" 
            height={100} 
            width={120} 
            className="ps-4"
            style={{ marginTop: '3px' }}
            alt="Vidhi Enterprises Logo"
          />
        </Link>
        <form>
          <input 
            type="search" 
            placeholder="   Search...Drip,Sprinkler and Irrigation"
            style={{ 
              marginLeft: '70px', 
              width: '400px', 
              height: '50px', 
              borderRadius: '10px', 
              border: '0.1em solid rgb(214, 201, 181)' 
            }} 
          />
        </form>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div style={{ marginLeft: '15rem' }}>
          <div className="navbar-nav ms-auto p-4 p-lg-0 mt-2" style={{ fontSize: 'xx-large', fontWeight: '700rem' }}>
            <Link href="/" className="nav-item nav-link active">Home</Link>
            <Link href="/products" className="nav-item nav-link">Products</Link>
            <div className="nav-item dropdown">
              <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Who we are</a>
              <div className="dropdown-menu bg-light m-0">
                <Link href="/about" className="dropdown-item">About Us</Link>
                <Link href="/founder" className="dropdown-item">Founder</Link>
                <Link href="/history" className="dropdown-item">History</Link>
                <Link href="/leader" className="dropdown-item">Leadership</Link>
                <Link href="/sustain" className="dropdown-item">Sustainabilty</Link>
              </div>
            </div>
            <Link href="/contact" className="nav-item nav-link">Contact Us</Link>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="container-fluid page-header py-5 mb-5" style={{ backgroundImage: 'url(https://d170mw2nhcb1v0.cloudfront.net/img/carousel-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4">Features</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item"><Link href="/pages">Pages</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Features</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Feature Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row gx-0">
            <div className="col-lg-4">
              <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{ minHeight: '160px' }}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-times text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>No Hidden Cost</h4>
                    <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{ minHeight: '160px' }}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-users text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>Dedicated Team</h4>
                    <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{ minHeight: '160px' }}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-phone text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>24/7 Available</h4>
                    <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facts Start */}
      <div className="container-fluid facts my-5 py-5" style={{ backgroundImage: 'url(https://d170mw2nhcb1v0.cloudfront.net/img/carousel-1.jpg)', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-sm-6 col-lg-3 text-center">
              <h1 className="display-4 text-white">1234</h1>
              <span className="fs-5 fw-semi-bold text-light">Happy Clients</span>
            </div>
            <div className="col-sm-6 col-lg-3 text-center">
              <h1 className="display-4 text-white">1234</h1>
              <span className="fs-5 fw-semi-bold text-light">Garden Complated</span>
            </div>
            <div className="col-sm-6 col-lg-3 text-center">
              <h1 className="display-4 text-white">1234</h1>
              <span className="fs-5 fw-semi-bold text-light">Dedicated Staff</span>
            </div>
            <div className="col-sm-6 col-lg-3 text-center">
              <h1 className="display-4 text-white">1234</h1>
              <span className="fs-5 fw-semi-bold text-light">Awards Achieved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <p className="fs-5 fw-bold text-primary">Why Choosing Us!</p>
              <h1 className="display-5 mb-4">Few Reasons Why People Choosing Us!</h1>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <Link href="#" className="btn btn-primary py-3 px-4">Explore More</Link>
            </div>
            <div className="col-lg-6">
              <div className="row g-4 align-items-center">
                <div className="col-md-6">
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="text-center rounded py-5 px-4" style={{ boxShadow: '0 0 45px rgba(0,0,0,.08)' }}>
                        <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ width: '90px', height: '90px' }}>
                          <i className="fa fa-check fa-3x text-primary"></i>
                        </div>
                        <h4 className="mb-0">100% Satisfaction</h4>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="text-center rounded py-5 px-4" style={{ boxShadow: '0 0 45px rgba(0,0,0,.08)' }}>
                        <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ width: '90px', height: '90px' }}>
                          <i className="fa fa-users fa-3x text-primary"></i>
                        </div>
                        <h4 className="mb-0">Dedicated Team</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-center rounded py-5 px-4" style={{ boxShadow: '0 0 45px rgba(0,0,0,.08)' }}>
                    <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ width: '90px', height: '90px' }}>
                      <i className="fa fa-tools fa-3x text-primary"></i>
                    </div>
                    <h4 className="mb-0">Modern Equipment</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Start */}
      <div className="container-fluid bg-dark text-light footer mt-5 py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6 me-3">
              <Image
                src= "https://d170mw2nhcb1v0.cloudfront.net/img/vidhi_logo.png"
                style={{ width: '220px', height: '220px', marginLeft: '-15px' }} 
                alt="Vidhi Enterprises Logo"
              />
              <div className="d-flex pt-2">
                <a className="btn btn-square btn-outline-light rounded-circle me-2" href="https://www.google.com/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-square btn-outline-light rounded-circle me-2" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square btn-outline-light rounded-circle me-2" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-square btn-outline-light rounded-circle me-2" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-5 me-3">
              <h4 className="text-white mb-2">Quick Links</h4>
              <a className="btn btn-link" href="/about">About Us</a>
              <a className="btn btn-link" href="/contact">Contact Us</a>
              <a className="btn btn-link" href="/products">Our Products</a>
              <a className="btn btn-link" href="/history">History</a>
              <a className="btn btn-link" href="/quote">Support</a>
            </div>
            <div className="col-lg-3 col-md-8 me-5">
              <h4 className="text-white mb-2">For more information</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="position-relative w-100">
                <Link href="/contact">
                  <button type="button" className="btn btn-primary py-2 top-0 end-0 mt-2 me-2">
                    Contact With Us
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Our Office</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>
                Factory Address: 485-A/7A. Ahinsa Compound, Dilshad Garden Industrial Area, G. T. Road, Shahadra, Delhi – 110095, India
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>
                Vineet Jain +91-9891776189, Vibhor Jain +91- 8376007474(INDIA),
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>
                info@vidhienterprises.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Start */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#">Vidhi Enterprises</a>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By <a className="border-bottom">Vijay and Rohit</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <Link href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
        <i className="bi bi-arrow-up"></i>
      </Link>
    </>
  );
}
