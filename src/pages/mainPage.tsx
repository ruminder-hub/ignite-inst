export const MainPage = () => {
    return (

        <section id="hero" className="d-flex align-items-center">

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Bettter digital experience with Ignite Institute</h1>
            <h2>We are team of talented designers making websites with Bootstrap</h2>
            <div>
              <a href="#about" className="btn-get-started scrollto">Get Started</a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img src="assets/img/hero-img.svg" className="img-fluid animated" alt=""/>
          </div>
        </div>
      </div>

    </section>
    )
}