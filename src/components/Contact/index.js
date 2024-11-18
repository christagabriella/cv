import { FaPhone, FaAt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-white" id="Contact">
      <div className="container">
        <div className="row">
          <h1 className="col-12 text-center fw-semibold py-3">Contact Info</h1>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 px-5 py-2 py-md-4">
            <div className="d-flex justify-content-center">
              <FaPhone className="contact-logo h1 text-accent-4" />
            </div>
            <h5 className="lh-lg text-center">christagabriella</h5>
          </div>
          <div className="col-12 col-md-4 px-5 py-2 py-md-4">
            <div className="d-flex justify-content-center">
              <FaAt className="contact-logo h1 text-accent-4" />
            </div>
            <h5 className="lh-lg text-center">christagabriella@gmail.com</h5>
          </div>
          <div className="col-12 col-md-4 px-5 py-2 py-md-4">
            <div className="d-flex justify-content-center">
              <FaMapMarkerAlt className="contact-logo h1 text-accent-4" />
            </div>
            <h5 className="lh-lg text-center">Minahasa Utara</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
