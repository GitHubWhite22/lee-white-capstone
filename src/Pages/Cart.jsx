import React, { useState, useEffect } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:8080";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/cart");
      console.log(response.data);
      let total = 0;
      response.data.forEach((item) => {
        total = total + item.price;
      });
      setTotal(total);
      setItems(response.data); // Update the state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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

              {items.map((item) => {
                return (
                  <div className="card rounded-3 mb-4">
                    <div className="card-body p-4">
                      <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src={`../assets/images/images/${item.image}`}
                            className="img-fluid rounded-3"
                            alt="neckwarmer"
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <p className="lead fw-normal mb-2">{item.name}</p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button
                            className="btn btn-link px-2"
                            onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                          <h5 className="mb-0">${item.price}</h5>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="text-danger">
                            <i className="fas fa-trash fa-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="card mb-4">
                <div className="card-body p-4 d-flex flex-row">
                  <div className="form-outline flex-fill">
                    <input
                      type="text"
                      id="form1"
                      className="form-control form-control-lg"
                      value={`$${total}`}
                    />
                    <label className="form-label" htmlFor="form1">
                      Cart Total Before Taxes
                    </label>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-success rounded-pill btn-block btn-lg"
                    onClick={async () => {
                      try {
                        await axios.post("http://localhost:8080/close-cart");
                        alert("payment accepted");
                        navigate("/");
                      } catch (e) {
                        alert("nothing in cart");
                      }
                    }}
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

export default Cart;
