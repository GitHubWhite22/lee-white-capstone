// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "./LandingPage.scss";
// import { useState, useEffect } from "react";
import "./LandingPage.scss";

function LandingPage() {
  return (
    <>
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Gallery</h1>
              <p className="lead text-body-secondary">
                Fine designs worked in sumptuous fibres to gift or keep as
                heirloom pieces
              </p>
              {/* <p>
                <a href="#" className="btn btn-primary my-2">
                  Shop All
                </a>
                <a href="#" className="btn btn-secondary my-2">
                  Go to Cart
                </a>
              </p> */}
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
                    <p className="card-text">Hand knit pattern description.</p>
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
                    <p className="card-text">Hand knit pattern description.</p>
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
                    <p className="card-text">Hand knit pattern description.</p>
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
                    <p className="card-text">Hand knit pattern description.</p>
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
                    <p className="card-text">Hand knit pattern description.</p>
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
                    <p className="card-text">Hand knit pattern description.</p>
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
                    <p className="card-text">Hand knit pattern description.</p>
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
                    <p className="card-text">Hand knit pattern description.</p>
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
                    <p className="card-text">Hand knit pattern description.</p>
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
    </>
  );
}
export default LandingPage;
