import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Alexander
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse d-flex flex-row-reverse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item active p-2">
            <a className="nav-link" href="#">
              About<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item p-2">
            <a className="nav-link" href="#">
              Portfolio
            </a>
          </li>
          <li className="nav-item p-2">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
