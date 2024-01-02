import React from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
import magenta_neckwarmer from "../assets/images/images/magenta-slouch-neckwarmer-lady.jpg";
import orange_flower_armwarmers from "../assets/images/images/orange-flower-armwarmers-lady.jpg";
import blue_gauntlets from "../assets/images/images/blue-gauntlets-man.jpg";
const BASE_URL = "http://localhost:8080";
import { Link } from "react-router-dom";

function SingleItem() {
  // const navigate = useNavigate();

  return (
    <main>
      <section className="h-100" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                <div>
                  <Link to="/">
                    <a href="#" className="btn btn-secondary rounded-pill my-2">
                      Back to Shop
                    </a>
                  </Link>
                </div>
              </div>
              <div className="card rounded-3 mb-4">
                <div className="card-body p-4">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src={magenta_neckwarmer}
                        className="img-fluid rounded-3"
                        alt="neckwarmer"
                      />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <p className="lead fw-normal mb-2">Magenta Neckwarmer</p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button
                        className="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <input
                        id="form1"
                        min={0}
                        name="quantity"
                        defaultValue={1}
                        type="number"
                        className="form-control form-control-sm"
                      />
                      <button
                        className="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                      >
                        <i className="fas fa-plus" />
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 className="mb-0">$12.99</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-danger">
                        <i className="fas fa-trash fa-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card rounded-3 mb-4">
                <div className="card-body p-4">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src={orange_flower_armwarmers}
                        className="img-fluid rounded-3"
                        alt="armwarmer"
                      />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <p className="lead fw-normal mb-2">Flowered Armwarmers</p>
                      {/* <p>
                        <span className="text-muted">Size: </span>M{" "}
                        <span className="text-muted">Color: </span>Grey
                      </p> */}
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button
                        className="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <input
                        id="form1"
                        min={0}
                        name="quantity"
                        defaultValue={1}
                        type="number"
                        className="form-control form-control-sm"
                      />
                      <button
                        className="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                      >
                        <i className="fas fa-plus" />
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 className="mb-0">$12.99</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-danger">
                        <i className="fas fa-trash fa-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card rounded-3 mb-4">
                <div className="card-body p-4">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src={blue_gauntlets}
                        className="img-fluid rounded-3"
                        alt="cable knit gauntlets"
                      />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <p className="lead fw-normal mb-2">Cabled Gauntlets</p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button
                        className="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <input
                        id="form1"
                        min={0}
                        name="quantity"
                        defaultValue={1}
                        type="number"
                        className="form-control form-control-sm"
                      />
                      <button
                        className="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                      >
                        <i className="fas fa-plus" />
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 className="mb-0">$12.99</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-danger">
                        <i className="fas fa-trash fa-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body p-4 d-flex flex-row">
                  <div className="form-outline flex-fill">
                    <input
                      type="text"
                      id="form1"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form1">
                      Cart Total
                    </label>
                  </div>
                  {/* <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg ms-3"
                  >
                    Apply
                  </button> */}
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-success rounded-pill btn-block btn-lg"
                  >
                    Proceed to Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SingleItem;
