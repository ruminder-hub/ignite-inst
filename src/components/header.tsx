import { websiteName } from "../config/constants"
import { HomeNavBar, NavBar } from "./homeNavBar"

export const HomeHeader = () => {
    return (
        <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        {/* <h1 className="text-light"><a href="index.html"><span>{websiteName}</span></a></h1> */}
        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
        <a href="index.html"><img src="assets/img/ignite.png" alt="" className="img-fluid"></img></a>
      </div>

      <HomeNavBar/>

    </div>
  </header>
    )
}

export const Header = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        {/* <h1 className="text-light"><a href="index.html"><span>{websiteName}</span></a></h1> */}
        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
        <a href="index.html"><img src="assets/img/ignite.png" alt="" className="img-fluid"></img></a>
      </div>

  <NavBar/>

</div>
</header>
  )
}