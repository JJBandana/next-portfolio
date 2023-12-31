import Link from 'next/link'

const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link href="/" legacyBehavior>
      <a className="navbar-brand" href="#">Portfolio</a>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
          <a className="nav-link" href="https://github.com/JJBandana" target='_blank'>Github</a>
          <a className="nav-link" href="http://www.linkedin.com/in/jjbriasco" target='_blank'>LinkedIn</a>
          <a className="nav-link" href="https://www.dropbox.com/scl/fi/0nvn6vids140qq3npz4di/Juan-Briasco-CV.pdf?dl=0&rlkey=3cclstlhujaz7bzuqea2phf7q" target='_blank'>Resume</a>
      </div>
    </div>
  </div>
</nav>
)

export default Navbar;