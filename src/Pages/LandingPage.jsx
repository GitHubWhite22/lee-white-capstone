// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "./LandingPage.scss";
// import { useState, useEffect } from "react";
import "./LandingPage.scss";
import viking_sweater_photo from "../assets/images/images/viking-sweater.jpg";
import red_slouchy_neckwarmer from "../assets/images/images/red-slouch-oversize-neckwarmer-man.jpg";
import magenta_neckwarmer from "../assets/images/images/magenta-slouch-neckwarmer-lady.jpg";
import orange_flower_armwarmers from "../assets/images/images/orange-flower-armwarmers-lady.jpg";
import purple_armwarmers from "../assets/images/images/purple-armwarmers-black-triangle-neck-scarf-man.jpg";
import blue_gauntlets from "../assets/images/images/blue-gauntlets-man.jpg";
import kids_red_toques from "../assets/images/images/children-red-toques-sweaters.jpg";
import grey_armwarmers_scarf from "../assets/images/images/grey-armwarmers-triangle-scarf-man.jpg";
import beaded_poncho from "../assets/images/images/beaded-poncho-lady.jpg";
import raven_stone_logo from "../assets/logos/raven-stone-logo.png";

// const BASE_URL = "http://localhost:8080";

function LandingPage() {
  return (
    <main>
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="check2" viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
        </symbol>
        <symbol id="circle-half" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
        </symbol>
        <symbol id="moon-stars-fill" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
        </symbol>
        <symbol id="sun-fill" viewBox="0 0 16 16">
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
        </symbol>
      </svg>
      <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
        <button
          className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
          id="bd-theme"
          type="button"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          aria-label="Toggle theme (auto)"
        >
          <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
            <use href="#circle-half" />
          </svg>
          <span className="visually-hidden" id="bd-theme-text">
            Toggle theme
          </span>
        </button>
        <ul
          className="dropdown-menu dropdown-menu-end shadow"
          aria-labelledby="bd-theme-text"
        >
          <li>
            <button
              type="button"
              className="dropdown-item d-flex align-items-center"
              data-bs-theme-value="light"
              aria-pressed="false"
            >
              <img src="" alt="" />
              Light
              <svg className="bi ms-auto d-none" width="1em" height="1em">
                <use href="#check2" />
              </svg>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="dropdown-item d-flex align-items-center"
              data-bs-theme-value="dark"
              aria-pressed="false"
            >
              <svg
                className="bi me-2 opacity-50 theme-icon"
                width="1em"
                height="1em"
              >
                <use href="#moon-stars-fill" />
              </svg>
              Dark
              <svg className="bi ms-auto d-none" width="1em" height="1em">
                <use href="#check2" />
              </svg>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="dropdown-item d-flex align-items-center active"
              data-bs-theme-value="auto"
              aria-pressed="true"
            >
              <svg
                className="bi me-2 opacity-50 theme-icon"
                width="1em"
                height="1em"
              >
                <use href="#circle-half" />
              </svg>
              Auto
              <svg className="bi ms-auto d-none" width="1em" height="1em">
                <use href="#check2" />
              </svg>
            </button>
          </li>
        </ul>
      </div>

      <header data-bs-theme="dark">
        <div className="collapse text-bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4>About</h4>
                <p className="text-body-secondary">
                  <p>
                    From a homebase in the Canadian Kootenay Rockies, RavenStone
                    is designed from top quality fibres for hard wear on
                    mountain hikes or to draw attention to masterful
                    craftsmanship.
                  </p>
                  <p>
                    The patterns are rigorously test-knitted to ensure that
                    every knit will produce a long wearing, beautiful item.
                  </p>
                </p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4>Contact</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white">
                      Follow on Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Like on Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Email me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <a href="#" className="navbar-brand">
                <img
                  className="brand_logo
              "
                  src={raven_stone_logo}
                  alt="Raven Stone Logo"
                />
              </a>
              <strong></strong>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </div>
      </header>

      {/* Header and Gallery below */}
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Gallery</h1>
              <p className="lead text-body-secondary">
                Fine designs worked in sumptuous fibres to gift or keep as
                heirloom pieces
              </p>
              <p>
                <a href="#" className="btn btn-secondary rounded-pill my-2">
                  Shop All
                </a>
                <a href="#" className="btn btn-secondary rounded-pill my-2">
                  Go to Cart
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    className="img-fluid"
                    src={viking_sweater_photo}
                    alt="viking cable knit grey sweater"
                    width="100%"
                    height={225}
                  />
                  <div className="card-body">
                    <p className="card-text">Viking Cable Knit Sweater</p>
                    <p className="card-text">Skill Level - Advanced</p>
                    <p className="card-text">Price - $18.99</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group gap-3">
                        <button
                          type="button"
                          className="btn btn-sm rounded-pill rounded-pill  btn-outline-secondary"
                        >
                          View Item
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm rounded-pill rounded-pill btn-outline-secondary"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    className="img-fluid"
                    src={red_slouchy_neckwarmer}
                    alt=""
                    width="100%"
                    height={225}
                  />
                  <div className="card-body">
                    <p className="card-text">Slouchy Neckwarmer</p>
                    <p className="card-text">Skill Level - Intermediate</p>
                    <p className="card-text">Price - $12.99</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group gap-3">
                        <button
                          type="button"
                          className="btn btn-sm rounded-pill btn-outline-secondary"
                        >
                          View Item
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm rounded-pill btn-outline-secondary"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    className="img-fluid"
                    src={magenta_neckwarmer}
                    alt=""
                    width="100%"
                    height={225}
                  />
                  <div className="card-body">
                    <p className="card-text">Magenta Neckwarmer</p>
                    <p className="card-text">Skill Level - Intermediate</p>
                    <p className="card-text">Price - $12.99</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group gap-3">
                        <button
                          type="button"
                          className="btn btn-sm rounded-pill btn-outline-secondary"
                        >
                          View Item
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm rounded-pill btn-outline-secondary"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    className="img-fluid"
                    src={orange_flower_armwarmers}
                    alt=""
                    width="100%"
                    height={225}
                  />
                  <div className="card-body">
                    <p className="card-text">Flowered Armwarmers</p>
                    <p className="card-text">Skill Level - Intermediate</p>
                    <p className="card-text">Price - $12.99</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group gap-3">
                        <button
                          type="button"
                          className="btn btn-sm rounded-pill btn-outline-secondary"
                        >
                          View Item
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm rounded-pill btn-outline-secondary"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    className="img-fluid"
                    src={purple_armwarmers}
                    alt=""
                    width="100%"
                    height={225}
                  />
                  <div className="card-body">
                    <p className="card-text">Armwarmers and Scarf</p>
                    <p className="card-text">Skill Level - Intermediate</p>
                    <p className="card-text">Price - $14.99</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group gap-3">
                        <button
                          type="button"
                          className="btn btn-sm rounded-pill btn-outline-secondary"
                        >
                          View Item
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm rounded-pill btn-outline-secondary"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    className="img-fluid"
                    src={blue_gauntlets}
                    alt=""
                    width="100%"
                    height={225}
                  />
                  <div className="card-body">
                    <p className="card-text">Cabled Gauntlets</p>
                    <p className="card-text">Skill Level - Intermediate</p>
                    <p className="card-text">Price - $12.99</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group gap-3">
                        <button
                          type="button"
                          className="btn btn-sm rounded-pill btn-outline-secondary"
                        >
                          View Item
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm rounded-pill btn-outline-secondary"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    className="img-fluid"
                    src={kids_red_toques}
                    alt=""
                    width="100%"
                    height={225}
                  />
                  <div className="card-body">
                    <p className="card-text">Cabled Toques</p>
                    <p className="card-text">Skill Level - Beginner</p>
                    <p className="card-text">Price - $9.99</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group gap-3">
                        <button
                          type="button"
                          className="btn btn-sm rounded-pill btn-outline-secondary"
                        >
                          View Item
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm rounded-pill btn-outline-secondary"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    className="img-fluid"
                    src={beaded_poncho}
                    alt=""
                    width="100%"
                    height={225}
                  />
                  <div className="card-body">
                    <p className="card-text">Beaded Poncho</p>
                    <p className="card-text">Skill Level - Intermediate</p>
                    <p className="card-text">Price - $14.99</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group gap-3">
                        <button
                          type="button"
                          className="btn btn-sm rounded-pill btn-outline-secondary"
                        >
                          View Item
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm rounded-pill btn-outline-secondary"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    className="img-fluid"
                    src={grey_armwarmers_scarf}
                    alt=""
                    width="100%"
                    height={225}
                  />
                  <div className="card-body">
                    <p className="card-text">Scarf and Armwarmers</p>
                    <p className="card-text">Kill Level - Intermediate</p>
                    <p className="card-text">Price - $14.99</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group gap-3">
                        <button
                          type="button"
                          className="btn btn-sm rounded-pill btn-outline-secondary"
                        >
                          View Item
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm rounded-pill btn-outline-secondary"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <footer className="text-body-secondary py-5">
        <div className="container">
          <p className="float-end mb-1">
            <a href="#">Back to top</a>
          </p>
        </div>
      </footer> */}
    </main>
  );
}
export default LandingPage;
