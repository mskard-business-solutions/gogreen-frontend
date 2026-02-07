  import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Mini Sprinkler Accessories | Vidhi Enterprises",
  description: "Complete range of mini sprinkler accessories including stands, tube assemblies, connectors, and components for efficient irrigation systems.",
  keywords: "mini sprinkler accessories, sprinkler stand, tube assembly, irrigation components",
};

export default function MiniSprinklerAccessories() {
  return (
    <>
      {/* Placeholder for header - you can replace with actual Header component */}
      <div id="header-container"></div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light sticky-top p-2" style={{ backgroundColor: 'rgb(177, 226, 177)' }}>
        <div className="container-fluid px-0">
          <div className="d-flex w-100 align-items-center justify-content-between flex-wrap flex-lg-nowrap">
            <Link href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5 mb-2 mb-lg-0">
              <Image src="https://d170mw2nhcb1v0.cloudfront.net/img/vidhi_logo.png" className="ps-4 logo-img img-fluid" alt="Vidhi Enterprises Logo" width={150} height={60} />
            </Link>
            <form className="d-flex mx-auto my-2 my-lg-0 flex-grow-1" role="search" style={{ maxWidth: '400px', minWidth: '180px', width: '100%' }}>
              <div className="input-group input-group-lg shadow-sm search-bar-rounded position-relative" style={{ width: '100%' }}>
                <input id="searchInput" type="search" className="form-control rounded-pill border-1 ps-4" placeholder="Search" aria-label="Search" style={{ background: '#f8f9fa', fontSize: '1.1rem', minHeight: '48px' }} autoComplete="off" />
                <button className="btn btn-primary rounded-pill d-flex align-items-center justify-content-center" type="submit" title="Search" style={{ width: '48px', height: '48px', marginLeft: '-48px', zIndex: 2 }}>
                  <i className="fa fa-search"></i>
                </button>
                <ul id="searchSuggestions" className="search-suggestions"></ul>
              </div>
            </form>
            <button type="button" className="navbar-toggler ms-2 me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse w-100" id="navbarCollapse" style={{ marginRight: '2rem' }}>
            <div className="navbar-nav ms-auto p-4 p-lg-0 align-items-lg-center">
              <Link href="/" className="nav-item nav-link active"><b>Home</b></Link>
              <div className="nav-item dropdown">
                <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><b>Products</b></Link>
                <div className="dropdown-menu m-0 bg-light">
                  <Link href="/dripirri" className="dropdown-item"><b>Drip Irrigation</b></Link>
                  <Link href="/sprinkler" className="dropdown-item"><b>Sprinkler Irrigation</b></Link>
                  <Link href="/rainsprinkler" className="dropdown-item"><b>Rain Sprinkler</b></Link>
                  <Link href="/landscape" className="dropdown-item"><b>Landscape Irrigation</b></Link>
                  <Link href="/economical" className="dropdown-item"><b>Economical Irrigation</b></Link>
                  <Link href="/vidhi-kit" className="dropdown-item"><b>Vidhi Kit</b></Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><b>About Us</b></Link>
                <div className="dropdown-menu bg-light m-0">
                  <Link href="/company-profile" className="dropdown-item"><b>Company Profile</b></Link>
                  <Link href="/founder-vision" className="dropdown-item"><b>Founder's Vision</b></Link>
                  <Link href="/our-journey" className="dropdown-item"><b>Our Journey</b></Link>
                  <Link href="/legacy-leader" className="dropdown-item"><b>Legacy &Leadership</b></Link>
                  <Link href="/manfacture" className="dropdown-item"><b>Manfacturing & Infrastructure</b></Link>
                  <Link href="/quality-policy" className="dropdown-item"><b>Quality Policy</b></Link>
                  <Link href="/sustainable" className="dropdown-item"><b>Sustainabilty Commitment</b></Link>
                  <Link href="/global-presence" className="dropdown-item"><b>Global Presence</b></Link>
                  <Link href="/knowledge-hub" className="dropdown-item"><b>Knowledge Hub</b></Link>
                  <Link href="/blog" className="dropdown-item"><b>Blog</b></Link>
                  <Link href="/careers" className="dropdown-item"><b>Careers</b></Link>
                </div>
              </div>
              <Link href="/contact" className="nav-item nav-link"><b>Contact Us</b></Link>
              <Link href="/" className="navbar-brand d-flex align-items-center ps-4 mt-3 mt-lg-0">
                <Image src="https://d170mw2nhcb1v0.cloudfront.net/img/logo-olored.png" className="logo-img img-fluid" alt="Vidhi Enterprises Logo Right" width={150} height={60} style={{ marginLeft: '0.5rem', marginBottom: '11px' }} />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="container-fluid page-header py-5 mb-5 mt-2" style={{ backgroundImage: 'url(https://d170mw2nhcb1v0.cloudfront.net/img/Spri-head-6.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container text-center py-5">
          <h1 className="display-3 text-success mb-4">Mini Sprinkler Accessories</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0" style={{ fontWeight: 'bolder' }}>
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item"><Link href="/sprinkler">Sprinkler Irrigation</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Mini Sprinkler Accessories</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <div className="cycle_section layout_padding">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: '500px' }}>
            <p className="fs-5 fw-bold text-primary">Sprinkler Irrigation</p>
            <hr style={{ border: '1px solid darkgreen' }} />
            <h1 className="display-6 mb-5" style={{ color: 'rgba(16, 16, 223, 0.668)' }}>Sprinkler Accessories</h1>
            <hr style={{ border: '1px solid darkgreen' }} />
          </div>
          
          <div className="cycle_section_2 layout_padding">
            {/* Mini Sprinkler */}
            <div className="row">
              <div className="col-md-6">
                <div className="box_main">
                  <div className="image_2">
                    <Image src="https://d170mw2nhcb1v0.cloudfront.net/img/Spri-18.png" width={600} height={700} style={{ width: '600px', height: '700px' }} alt="Mini Sprinkler" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <h1 className="Irrigation mt-5 text-success">MINI SPRINKLER ACCESSORIES</h1>
                <hr style={{ border: '3px solid darkgreen' }} />
                <h5 className="display-9 mb-3 py-2" style={{ color: 'rgba(16, 16, 223, 0.668)' }}>Mini Sprinkler</h5>
                <hr style={{ border: '2px solid darkgreen' }} />
                <ul className="box" style={{ color: 'rgb(3, 3, 123)', textAlign: 'justify', fontSize: 'medium' }}>
                  <li className="mt-2">Made from high-quality material.</li>
                  <li className="mt-2">Equipped with a plastic bearing assembly for smooth operation.</li>
                  <li className="mt-2">Comes with ½" Male BSP/NPT connection for easy fitting.</li>
                  <li className="mt-2">Stainless steel fulcrum pin ensures long-lasting performance.</li>
                  <li className="mt-2">Arm and bearing spring made of stainless steel for reliability.</li>
                  <li className="mt-2">Operates efficiently at low pressure, saving energy.</li>
                  <li className="mt-2">BIS Approved and ISI Marked for guaranteed quality.</li>
                  <li className="mt-2">Provides even water distribution over a wide area.</li>
                  <li className="mt-2">Easy to install, dismantle, and maintain.</li>
                </ul>
                <h4 className="Irrigation text-success">Application</h4>
                <hr style={{ border: '1px solid darkgreen' }} />
                <p className="Irrigation mt-1" style={{ color: 'rgb(3, 3, 123)' }}>
                  <b>Ideal for irrigation of agricultural crops, gardens, and plantations, ensuring uniform water coverage and efficient use of water resources.</b>
                </p>
                <hr style={{ border: '1px solid darkgreen' }} />
              </div>
            </div>

            {/* MS Stand */}
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="box_main">
                  <div className="image_2">
                    <Image src="https://d170mw2nhcb1v0.cloudfront.net/img/Spri-20.png" width={600} height={700} style={{ width: '600px', height: '700px' }} alt="MS Stand" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <h5 className="display-9 mb-3 py-2" style={{ color: 'rgba(16, 16, 223, 0.668)' }}>MS Stand (Trishul)</h5>
                <hr style={{ border: '2px solid darkgreen' }} />
                <ul className="box" style={{ color: 'rgb(3, 3, 123)', textAlign: 'justify', fontSize: 'medium' }}>
                  <li className="mt-2">Made from 100% virgin material for superior strength and durability.</li>
                  <li className="mt-2">Rust-free and weather-resistant, ensuring long life in all field conditions.</li>
                  <li className="mt-2">Unique Trishul-shaped structure provides strong grip and firm hold in the soil.</li>
                  <li className="mt-2">Stable design prevents sprinkler movement during operation, even under high pressure.</li>
                  <li className="mt-2">Suitable for all types of soil—light, medium, and heavy.</li>
                  <li className="mt-2">Easy to insert and remove from the ground without tools.</li>
                  <li className="mt-2">Available in two different sizes: 1.20 meters and 1.50 meters.</li>
                  <li className="mt-2">Lightweight yet sturdy, making it easy to handle and transport.</li>
                </ul>
                <h4 className="Irrigation text-success">Application</h4>
                <hr style={{ border: '1px solid darkgreen' }} />
                <p className="Irrigation mt-1" style={{ color: 'rgb(3, 3, 123)' }}>
                  <b>Used in mini sprinkler irrigation systems for vegetables, nurseries, orchards, and greenhouses to support sprinklers at an ideal height for uniform water coverage and efficient irrigation.</b>
                </p>
                <hr style={{ border: '1px solid darkgreen' }} />
              </div>
            </div>

            {/* Tube Assembly */}
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="box_main">
                  <div className="image_2">
                    <Image src="https://d170mw2nhcb1v0.cloudfront.net/img/Spri-21.png" width={600} height={700} style={{ width: '600px', height: '700px' }} alt="Tube Assembly" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <h5 className="display-9 mb-3 py-2" style={{ color: 'rgba(16, 16, 223, 0.668)' }}>Tube Assembly</h5>
                <hr style={{ border: '2px solid darkgreen' }} />
                <p className="Irrigation mt-1" style={{ color: 'rgb(3, 3, 123)' }}>
                  <b>The Tube Assembly consists of three main components: Adopter, Tube, and Connectors.</b>
                </p>
                <p className="Irrigation" style={{ color: 'rgb(3, 3, 123)' }}>
                  <b>It includes both Male and Female Connectors for secure and leak-free joining.</b>
                </p>
                <p className="Irrigation" style={{ color: 'rgb(3, 3, 123)' }}>
                  <b>This complete setup ensures smooth water flow and easy connection in irrigation systems.</b>
                </p>
                <ul className="arrow" style={{ color: 'rgb(3, 3, 123)', textAlign: 'justify', fontSize: 'medium' }}>
                  <li>Adopter</li>
                  <li>Tube</li>
                  <li>Male Connector and Female Connector</li>
                </ul>
              </div>
            </div>

            {/* Additional Tube Assembly Images */}
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="box_main">
                  <div className="image_2">
                    <Image src="https://d170mw2nhcb1v0.cloudfront.net/img/Spri-30.png" width={600} height={700} style={{ width: '600px', height: '700px' }} alt="Tube Assembly" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <h5 className="display-9 mb-3 py-2" style={{ color: 'rgba(16, 16, 223, 0.668)' }}>Tube Assembly</h5>
                <hr style={{ border: '2px solid darkgreen' }} />
                <div className="image_2 text-center">
                  <img src="/img/Model-25.png" alt="Model 25" />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-6">
                <div className="box_main">
                  <div className="image_2">
                    <Image src="https://d170mw2nhcb1v0.cloudfront.net/img/Spri-31.png" width={600} height={700} style={{ width: '600px', height: '700px' }} alt="Tube Assembly" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <h5 className="display-9 mb-3 py-2" style={{ color: 'rgba(16, 16, 223, 0.668)' }}>Tube Assembly</h5>
                <hr style={{ border: '2px solid darkgreen' }} />
                <div className="image_2 text-center">
                  <img src="/img/Model-26.png" alt="Model 26" />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-6">
                <div className="box_main">
                  <div className="image_2">
                    <Image src="https://d170mw2nhcb1v0.cloudfront.net/img/Spri-32.png" width={600} height={700} style={{ width: '600px', height: '700px' }} alt="Tube Assembly" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <h5 className="display-9 mb-3 py-2" style={{ color: 'rgba(16, 16, 223, 0.668)' }}>Tube Assembly</h5>
                <hr style={{ border: '2px solid darkgreen' }} />
                <div className="image_2 text-center">
                  <img src="/img/Model-27.png" alt="Model 27" />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-6">
                <div className="box_main">
                  <div className="image_2">
                    <Image src="https://d170mw2nhcb1v0.cloudfront.net/img/Spri-33.png" width={600} height={700} style={{ width: '600px', height: '700px' }} alt="Tube Assembly" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <h5 className="display-9 mb-3 py-2" style={{ color: 'rgba(16, 16, 223, 0.668)' }}>Tube Assembly</h5>
                <hr style={{ border: '2px solid darkgreen' }} />
                <div className="image_2 text-center">
                  <img src="/img/Model-28.png" alt="Model 28" />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-6">
                <div className="box_main">
                  <div className="image_2">
                    <Image src="https://d170mw2nhcb1v0.cloudfront.net/img/Spri-34.png" width={600} height={700} style={{ width: '600px', height: '700px' }} alt="Tube Assembly" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <h5 className="display-9 mb-3 py-2" style={{ color: 'rgba(16, 16, 223, 0.668)' }}>Tube Assembly</h5>
                <hr style={{ border: '2px solid darkgreen' }} />
                <div className="image_2 text-center">
                  <img src="/img/Model-29.png" alt="Model 29" />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-6">
                <div className="box_main">
                  <div className="image_2">
                    <Image src="https://d170mw2nhcb1v0.cloudfront.net/img/Spri-35.png" width={600} height={700} style={{ width: '600px', height: '700px' }} alt="Tube Assembly" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <h5 className="display-9 mb-3 py-2" style={{ color: 'rgba(16, 16, 223, 0.668)' }}>Tube Assembly</h5>
                <hr style={{ border: '2px solid darkgreen' }} />
                <div className="image_2 text-center">
                  <img src="/img/Model-30.png" alt="Model 30" />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-6">
                <div className="box_main">
                  <div className="image_2">
                    <Image src="https://d170mw2nhcb1v0.cloudfront.net/img/Spri-36.png" width={600} height={700} style={{ width: '600px', height: '700px' }} alt="Tube Assembly" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <h5 className="display-9 mb-3 py-2" style={{ color: 'rgba(16, 16, 223, 0.668)' }}>Tube Assembly</h5>
                <hr style={{ border: '2px solid darkgreen' }} />
                <div className="image_2 text-center">
                  <Image src="https://d170mw2nhcb1v0.cloudfront.net/img/Model-31.png" width={600} height={400} alt="Model 31" />
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <Link href="/AM pdf.pdf" target="_blank" className="btn btn-outline-light px-4 py-2" style={{ color: 'rgba(16, 16, 223, 0.668)' }}>
                View PDF
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder for footer - you can replace with actual Footer component */}
      <div id="footer-container"></div>

      {/* Back to Top */}
      <Link href="/" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
        <i className="bi bi-arrow-up"></i>
      </Link>
    </>
  );
}
