import React from "react";

const HomeIntro = () => {
  return (
    <div className="home_intro">
      <div className="home_intro_container">
        <div className="buttons">
          <div className="content_button">
            <a
              target="_blank"
              href="https://www.entradasamarillas.com/event/baum-festival-2023"
            >
              <button>Entradas aquí</button>
            </a>
          </div>

          <div className="content_button_two">
            <a
              target="_blank"
              href="https://www.entradasamarillas.com/event/baum-festival-2023-compras-internacionales
"
            >
              Entradas internacionales
            </a>
          </div>
        </div>

        <div className="content_header">
          <img src="/assets/baumfest.png" alt="" />
        </div>
        <div className="content_img">
          <div className="content_iframe">
            <iframe
              className="iframe"
              srcDoc={`
              <style>
                  img{object-fit:cover}
                  *{padding:0;margin:0;overflow:hidden}
                  html,body{height:100%;}
                  img,span{position:absolute;width:100vw;height:100%;top:0;bottom:0;margin:auto}
                  span{height:1.5em;text-align:center;font:120px/1.5 sans-serif;color:#FF4D00;text-shadow:0 0 0.5em black}
              </style>
              <a href=${"https://www.youtube.com/embed/FyzRecGr6Z4"}> 
                  <img src="/assets/7.png">
              </a>
                `}
              src={"https://www.youtube.com/embed/FyzRecGr6Z4"}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              muted
              autoPlay
            ></iframe>
          </div>
          {/* <img src="/assets/7.png" alt="img" /> */}
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
