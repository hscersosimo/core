import SectionHeader from "../_ui/SectionHeader";
import Container from "../_ui/Container";
import Image from "next/image";

const Carousel = () => {
  return (
    <>
      <SectionHeader name="Carousel" icon="rectangle-vertical-history" />

      <h5>Cross fade</h5>
      <div className="mb-5">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image
                alt="Example 04"
                src="/../public/images/examples/1300x400-04.jpeg"
                width={1400}
                height={400}
              />
            </div>
            <div className="carousel-item">
              <Image
                alt="Example 05"
                src="/../public/images/examples/1300x400-05.jpeg"
                width={1400}
                height={400}
              />
            </div>
            <div className="carousel-item">
              <Image
                alt="Example 06"
                src="/../public/images/examples/1300x400-06.jpeg"
                width={1400}
                height={400}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <h5>With controls</h5>
      <div className="mb-5">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item">
              <Image
                alt="Example 01"
                src="/../public/images/examples/1300x400-01.jpeg"
                width={1400}
                height={400}
              />
            </div>
            <div className="carousel-item active">
              <Image
                alt="Example 02"
                src="/../public/images/examples/1300x400-02.jpeg"
                width={1400}
                height={400}
              />
            </div>
            <div className="carousel-item">
              <Image
                alt="Example 03"
                src="/../public/images/examples/1300x400-03.jpeg"
                width={1400}
                height={400}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <h5>With indicators</h5>
      <div className="mb-5">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className=""
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className=""
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className="active"
              aria-current="true"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item">
              <Image
                alt="Example 04"
                src="/../public/images/examples/1300x400-04.jpeg"
                width={1400}
                height={400}
              />
            </div>
            <div className="carousel-item active carousel-item-start">
              <Image
                alt="Example 05"
                src="/../public/images/examples/1300x400-05.jpeg"
                width={1400}
                height={400}
              />
            </div>
            <div className="carousel-item carousel-item-next carousel-item-start">
              <Image
                alt="Example 06"
                src="/../public/images/examples/1300x400-06.jpeg"
                width={1400}
                height={400}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <h5>With captions</h5>
      <div className="mb-5">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-label="Slide 1"
              aria-current="true"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className=""
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className=""
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image
                alt="Example 07"
                src="/../public/images/examples/1300x400-07.jpeg"
                width={1400}
                height={400}
              />

              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <Image
                alt="Example 08"
                src="/../public/images/examples/1300x400-08.jpeg"
                width={1400}
                height={400}
              />

              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <Image
                alt="Example 09"
                src="/../public/images/examples/1300x400-09.jpeg"
                width={1400}
                height={400}
              />

              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <h5>Dark variant</h5>
      <div className="mb-5">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-label="Slide 1"
              aria-current="true"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className=""
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className=""
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <Image
                alt="Example 01"
                src="/../public/images/examples/1300x400-01.jpeg"
                width={1400}
                height={400}
              />

              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <Image
                alt="Example 02"
                src="/../public/images/examples/1300x400-02.jpeg"
                width={1400}
                height={400}
              />

              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <Image
                alt="Example 03"
                src="/../public/images/examples/1300x400-03.jpeg"
                width={1400}
                height={400}
              />

              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
