import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Gallery = () => {
  const [gallery, setGallery] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const galleryRef = ref(db, "gallery");

    onValue(galleryRef, (snapshot) => {
      const data = snapshot.val();
      setGallery(data);
    });
  }, []);
  return (
    <section id="Gallery">
      <div className="container">
        <div className="row">
          <div className="content">
            <div className="card">
              <div className="img">
                <img
                  src="https://assets.codepen.io/4927073/twitter2_edited.jpg"
                  className="twitter"
                />
                <button>
                  <svg
                    height={16}
                    role="img"
                    width={16}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <polygon
                      points="21.57 12 5.98 3 5.98 21 21.57 12"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              <div className="textos">
                <a
                  href="https://hluebbering.github.io/twitter-api/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Twitter API Data Analysis</h2>
                </a>
                <p>
                  {gallery.twitter}
                </p>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src="https://assets.codepen.io/4927073/my_playlists.png" />
                <button>
                  <svg
                    height={16}
                    role="img"
                    width={16}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <polygon
                      points="21.57 12 5.98 3 5.98 21 21.57 12"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              <div className="textos">
                <a
                  href="https://hluebbering.github.io/spotify-data-analysis/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Spotify Data Analysis</h2>
                </a>
                <p>
                  {gallery.spotify}
                </p>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src="https://assets.codepen.io/4927073/hluebbering.github_edited.jpg" />
                <button>
                  <svg
                    height={16}
                    role="img"
                    width={16}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <polygon
                      points="21.57 12 5.98 3 5.98 21 21.57 12"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              <div className="textos">
                <a
                  href="https://hluebbering.github.io/statistical-machine-learning/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Statistical Analysis and Modeling</h2>
                </a>
                <p>
                 {gallery.statistical}
                </p>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src="https://assets.codepen.io/4927073/Asset+1%402x_edited.jpg" />
                <button>
                  <svg
                    height={16}
                    role="img"
                    width={16}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <polygon
                      points="21.57 12 5.98 3 5.98 21 21.57 12"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              <div className="textos">
                <a
                  href="https://hluebbering.github.io/model-neurons/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Mathematical Dynamics of Neurons</h2>
                </a>
                <p>
                  {gallery.mathematical}
                </p>
              </div>
            </div>
          </div>
          <div className="skills-section">
            <h2>Skills</h2>
            <ul>
              <li>Data Analysis</li>
              <li>Machine Learning</li>
              <li>Web Development</li>
              <li>API Integration</li>
              <li>Predictive Modeling</li>
              <li>Statistical Analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
