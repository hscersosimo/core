const Images = () => {
  return (
    <>
      <div>
        <svg
          className="img-fluid"
          width="100%"
          height="250"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Responsive image"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#868e96"></rect>
        </svg>
        <p className="fs-7">img-fluid example</p>
      </div>
      <div className="mt-3">
        <svg
          className="img-thumbnail"
          width="200"
          height="200"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>
            A generic square placeholder image with a white border around
            it, making it resemble a photograph taken with an old instant
            camera
          </title>
          <rect width="100%" height="100%" fill="#868e96"></rect>
        </svg>
        <p className="fs-7">img-thumbnail example</p>
      </div>
    </>
  );
};

export default Images;
