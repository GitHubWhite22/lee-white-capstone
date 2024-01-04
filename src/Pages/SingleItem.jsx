//
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// const BASE_URL = "http://localhost:8080";

function SingleItem() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/items");
      console.log(response.data);
      setData(response.data); // Update the state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Item Details</h1>
            <p className="lead text-body-secondary">
              A deeper look at the items you're interested in.
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
            {data.map((item) => (
              <div key={item.id} className="col">
                <div className="card shadow-sm">
                  <img
                    className="img-fluid"
                    src={`../assets/images/images/${item.image}`} // Use the image path from the data
                    alt={item.name}
                    width="100%"
                    height={225}
                  />

                  <div className="card-body">
                    <p className="card-text">{item.name}</p>
                    <p className="card-text">
                      Skill Level - {item.skill_level}
                    </p>
                    <p className="card-text">Fibre - {item.fiber_type}</p>
                    <p className="card-text">
                      Description - {item.description}
                    </p>
                    <p className="card-text">Price - ${item.price}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group gap-3">
                        <button
                          type="button"
                          className="btn btn-sm rounded-pill btn-outline-secondary"
                          onClick={(e) => {
                            // addToCart(item)
                            e.preventDefault();
                            axios.post("http://localhost:8080/add", { item });
                          }}
                        >
                          Add to Cart
                        </button>
                        <Link to="/">
                          <button
                            type="button"
                            className="btn btn-sm rounded-pill btn-outline-secondary"
                          >
                            Back to Shop
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default SingleItem;
