// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "./LandingPage.scss";
// import { useState, useEffect } from "react";
import "./LandingPage.scss";
import { Link } from "react-router-dom";
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
                <Link to="/Cart">
                  <a href="#" className="btn btn-secondary rounded-pill my-2">
                    Go to Cart
                  </a>
                </Link>
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
    </main>
  );
}
export default LandingPage;
