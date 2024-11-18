import { FaPhone, FaAt, FaMapMarkerAlt } from "react-icons/fa";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Contact = () => {
  const [contact, setContact] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const contactRef = ref(db, "contact");

    onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      setContact(data);
    });
  }, []);
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
            <h5 className="lh-lg text-center">{contact.name}</h5>
          </div>
          <div className="col-12 col-md-4 px-5 py-2 py-md-4">
            <div className="d-flex justify-content-center">
              <FaAt className="contact-logo h1 text-accent-4" />
            </div>
            <h5 className="lh-lg text-center">{contact.email}</h5>
          </div>
          <div className="col-12 col-md-4 px-5 py-2 py-md-4">
            <div className="d-flex justify-content-center">
              <FaMapMarkerAlt className="contact-logo h1 text-accent-4" />
            </div>
            <h5 className="lh-lg text-center">{contact.location}</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
