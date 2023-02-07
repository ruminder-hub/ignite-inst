import { NavBar } from "./navBar"

export const Header = () => {
    return (
        <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        <h1 className="text-light"><a href="index.html"><span>Ignite Institute</span></a></h1>
        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
        {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}
      </div>

      <NavBar/>

    </div>
  </header>
    )
}