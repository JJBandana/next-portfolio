import Layout from "../components/Layout";
import { skills, experiences, projects } from "../profile";
import { ShowIcon, GithubIcon } from "../components/Icons";
import Head from "next/head";

const Index = () => (
  <Layout>
    <Head>
      <title>JJ's Portfolio</title>
    </Head>
    {/** Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark text-light">
          <div className="row">
            <div className="col-md-4">
              <img
                src="./profile-picture.png"
                alt="Profile Picture"
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <h1>Juan José Briasco</h1>
              <h3>Full Stack Developer</h3>
              <p>
              Hello! I'm an aspiring Software Engineer and programming enthusiast. In this portfolio, I showcase my top projects that have led me to where I stand today. I hope you enjoy them!
              </p>
              <a href="mailto:jj.briasco@gmail.com">Contact Me!</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/** Second Section */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>

            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>
              <ul>
            {experiences.map(({ title, description, date }, i) => (
              <li key={i}>
                <h3>{title}</h3>
                <h5>{date}</h5>
                <p>{description}</p>
              </li>
            ))}
              </ul>
          </div>
        </div>
      </div>
    </div>


    {/** Infinite Logo Slider */}
    <div className="logos">
      <div className="logo-slider">
        <img src="./boxicons/bootstrap.svg" />
        <img src="./boxicons/c-plus-plus.svg" />
        <img src="./boxicons/css3.svg" />
        <img src="./boxicons/figma.svg" />
        <img src="./boxicons/git.svg" />
        <img src="./boxicons/godot.svg" />
        <img src="./boxicons/graphql.svg" />
        <img src="./boxicons/heroku.svg" />
        <img src="./boxicons/html5.svg" />
        <img src="./boxicons/java.svg" />
        <img src="./boxicons/javascript.svg" />
        <img src="./boxicons/mongodb.svg" />
        <img src="./boxicons/nodejs.svg" />
        <img src="./boxicons/postgresql.svg" />
        <img src="./boxicons/python.svg" />
        <img src="./boxicons/react.svg" />
        <img src="./boxicons/redux.svg" />
        <img src="./boxicons/sass.svg" />
        <img src="./boxicons/spring-boot.svg" />
        <img src="./boxicons/tailwind-css.svg" />
        <img src="./boxicons/tux.svg" />
        <img src="./boxicons/typescript.svg" />
        <img src="./boxicons/unity.svg" />
        <img src="./boxicons/android.svg" />
      </div>
      <div className="logo-slider">
        <img src="./boxicons/bootstrap.svg" />
        <img src="./boxicons/c-plus-plus.svg" />
        <img src="./boxicons/css3.svg" />
        <img src="./boxicons/figma.svg" />
        <img src="./boxicons/git.svg" />
        <img src="./boxicons/godot.svg" />
        <img src="./boxicons/graphql.svg" />
        <img src="./boxicons/heroku.svg" />
        <img src="./boxicons/html5.svg" />
        <img src="./boxicons/java.svg" />
        <img src="./boxicons/javascript.svg" />
        <img src="./boxicons/mongodb.svg" />
        <img src="./boxicons/nodejs.svg" />
        <img src="./boxicons/postgresql.svg" />
        <img src="./boxicons/python.svg" />
        <img src="./boxicons/react.svg" />
        <img src="./boxicons/redux.svg" />
        <img src="./boxicons/sass.svg" />
        <img src="./boxicons/spring-boot.svg" />
        <img src="./boxicons/tailwind-css.svg" />
        <img src="./boxicons/tux.svg" />
        <img src="./boxicons/typescript.svg" />
        <img src="./boxicons/unity.svg" />
        <img src="./boxicons/android.svg" />
      </div>
    </div>

    { /** Portfolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center text-light"><h1>Portfolio</h1></div>
            </div>

            {
              projects.map(({title, description, image, github, preview}, i) => (
                <div className="col-6 col-md-4 p-2 text-center" key={i}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img className="card-img-top" src={`/${image}`}/>
                    </div>
                    <div className="card-body">
                      <h3>{title}</h3>
                      <p>{description}</p>
                      <a href={github} target="_blank" className="btn btn-secondary mx-2"><GithubIcon />Github</a>
                      <a href={preview} target="_blank" className="btn btn-secondary mx-2"><ShowIcon />Preview</a>
                    </div>
                  </div>
                </div>
              ))
            }


          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
