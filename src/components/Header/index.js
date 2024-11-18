import { FaHome, FaPhone } from "react-icons/fa";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Header = () => {
  const [header, setHeader] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header");

    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);
  return (
    <div className="App">
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://hckkiu.github.io/resume-template/style.css"
      />
      <link
        rel="stylesheet"
        href="https://hckkiu.github.io/resume-template/color.css"
      />
      <title>Christa Tumbel | Web Developer</title>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
        id="Navbar"
      >
        <div className="container">
          <div className="navicon">
            <a className="navbar-brand text-accent-4 fw-bold" href="#">
              CT
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-2">
                <a className="nav-link" href="#Home">
                  <FaHome className="me-2" />
                  <span className="title">Home</span>
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#Contact">
                  <FaPhone className="me-2" />
                  <span className="title">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section id="Home">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 col-md-10 mx-auto my-auto">
              <div className="headit">
                <div className="avatar">
                  <img
                    src={`data:image/jpeg;base64, ${header.image}`}
                    alt="Foto Profil"
                  />
                  <button className="learn-more">Resume</button>
                </div>
                <div className="subheadit">
                  <h4 className="text-light-grey mb-4">Sistem Informasi</h4>
                  <p className="about">
                    Data Science graduate student at Universitas Klabat. Excited
                    to apply mathematics and programming skills to solve
                    real-world problems. Motivated to learn, grow, and excel in
                    data science and technology to make a positive impact on
                    society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
