import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="parentContainer anim">
      <div className="parent">
        <div className="sidesplash">
          <svg
            width="282"
            height="1024"
            viewBox="0 0 282 1026"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M273.34 392.716C218.13 159.271 67.639 18.3034 -0.705536 -23C-47.88 69.6197 -143.729 259.258 -149.73 276.852C-155.731 294.446 -60.2153 820.948 -11.7073 1082C106.312 949.507 328.549 626.161 273.34 392.716Z"
              fill="#FFEF63"
              fillOpacity="0.13"
            />
            <path
              d="M236.34 392.716C181.13 159.271 30.639 18.3034 -37.7055 -23C-84.88 69.6197 -180.729 259.258 -186.73 276.852C-192.731 294.446 -97.2153 820.948 -48.7073 1082C69.3121 949.507 291.549 626.161 236.34 392.716Z"
              fill="url(#paint0_linear)"
              fillOpacity="0.83"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="28.9999"
                y1="-23"
                x2="28.9999"
                y2="1082"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F5F86D" />
                <stop offset="0.625" stopColor="#F5F86D" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="ProjectContainer">
        <div className="projectdescription">
          <h1 className="projectTitle">Chit-Chat</h1>
          <p className="about-project">
            This is a WebApp developed with ReactJs, NodeJs, MongoDb,
            TailwindCss, Socket.Io and Firebase. It is a chatting Application
            using email as authentication and websockets for real time
            conversations and deployed in Firebase. <br />
            <br />
            Users can add profile picture, One to One private conversations and
            they can change the status of the user.
            <br />
            <br />
            Users can able to search and send friend requests to people and they
            can able to chat with each other only after the requset is accepted.
            <br />
            <br />
            The user interface of the application is inspired from WhatsApp web
            app.
          </p>
          <br />
          <p className="link-project">
            The Link for the Deployed version of the Application :{" "}
            <a href="https://chit-chat123.web.app/" target="popup">
              {" "}
              https://chit-chat123.web.app/
            </a>
          </p>
        </div>
        <img src="/assets/images/whatsapp.png" className="screenshots" alt="" />
      </div>

      <div className="ProjectContainer">
        <div className="projectdescription">
          <h1 className="projectTitle">Amazon Clone</h1>
          <p className="about-project">
            This is a web-app developed with ReactJs, Firebase and TailwindCSS.
            It is an Online Shopping E-Commerce Application using firebase email
            authentication service for user authentication, used firebase
            firestore service for storing users, products, orders data, Finally
            hosted on firebase using firebase hosting serivce. <br />
            <br />
            The Sellers can add products with ralated information and image of
            the product. Customers can buy those products from the sellers by
            ordering their products.
            <br />
            <br />
            The status of the order can be updated to rejected or accepted based
            on the product availability by the seller.
            <br />
            <br />
            The user interface of the application is inspired from Amazon web
            Application.
          </p>
          <br />
          <p className="link-project">
            The deployed version of the application is :
            <a href="https://clone-43c2b.web.app/" target="popup">
              {" "}
              https://clone-43c2b.web.app/
            </a>
          </p>
          <br />
          <p className="link-project">
            Github link for the project :
            <a
              href="https://github.com/yaswanthgeddada/AmazonClone"
              target="popup"
            >
              https://github.com /yaswanthgeddada/AmazonClone
            </a>
          </p>
        </div>
        <img src="/assets/images/Amazon.png" className="screenshots" alt="" />
      </div>
    </div>
  );
};

export default Projects;
