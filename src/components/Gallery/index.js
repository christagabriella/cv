const Gallery = () => {
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
                  Loaded and queried Twitter API data consisting of Elon Musk’s
                  most recent Tweets from 2015 to 2022.
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
                  Applied statistical methods to Spotify API data to explore
                  factors influencing a song’s popularity.
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
                  Explored data, fit linear regression models, applied
                  predictive modeling techniques, and deployed tools to assess
                  the validity of models.
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
                  Studied neurons composed of excitatory and inhibitory
                  subgroups, which each exhibited various oscillation patterns
                  when fired.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
