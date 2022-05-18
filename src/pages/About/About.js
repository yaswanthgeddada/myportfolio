import React from "react";
import "./About.css";

const About = () => {
  return (
    <main className="anim">
      <div className="main">
        <section>
          <h1>Skill Set :</h1>

          <div class="">
            <span class="skills">
              <h4 class="skillHeading">Frontend</h4>{" "}
              <p>
                : ReactJS, Angular, HTML, CSS, Javascript,Bootstrap,TailwindCSS
              </p>
            </span>
            <br />
            <span class="skills">
              <h4 class="skillHeading">Bankend</h4>{" "}
              <p>: NodeJs, Dotnet WebAPI, ASP.Net</p>
            </span>
            <br />

            <span class="skills">
              <h4 class="skillHeading">Databases</h4>{" "}
              <p>: MySQL, MongoDB, SQLServer</p>
            </span>
            <br />

            <span class="skills">
              <h4 class="skillHeading">Version Controller</h4>{" "}
              <p>: Git, GitHub</p>
            </span>
            <br />
            <span class="skills">
              <h4 class="skillHeading">OtherTools</h4>{" "}
              <p>: Firebase, Postman, Azure</p>
            </span>
          </div>
        </section>
        <section>
          <h1>Hobbies :</h1>
          <p class="hobbies">Playing Badminton, Watching Movies.</p>
          <br />
          <h1>Resume :</h1>
          <p class="hobbies">
            <a
              href="/assets/images/Yaswanth_Geddada.pdf"
              target="_blank"
              class="resume"
            >
              Click here to view the Resume
            </a>
          </p>
        </section>
      </div>
      <div className="splash">
        <svg
          viewBox="0 0 1440 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M285.94 29.3042C231.45 49.4254 8.48988 132.146 -16.0057 185.057L-48 472.716C505.734 509.356 1618.1 581.892 1637.7 578.911C1657.29 575.93 1605.2 234.615 1576.71 64.3299C1443.9 99.1073 1123.69 147.796 905.329 64.3299C632.378 -40.0022 340.43 9.18298 285.94 29.3042Z"
            fill="#6C63FF"
          />
        </svg>
      </div>
    </main>
  );
};

export default About;
