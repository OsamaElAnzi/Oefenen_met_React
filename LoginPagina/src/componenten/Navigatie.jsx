import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Navigatie() {
  return (
    <>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid d-flex justify-content-center">
          <div className="d-flex align-items-center">
            <a className="navbar-brand mx-3">
              <Link className="text-decoration-none text-light" to="/">Home</Link>
            </a>
            <a className="navbar-brand mx-3">
              <Link className="text-decoration-none text-light" to="/doel">Doel van dit project</Link>
            </a>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navigatie;
