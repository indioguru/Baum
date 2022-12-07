import React from "react";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="footer_container containerAll">
        <div className="content_rights">
          <a href="#/">Políticas de privacidad </a>
          <p>© 2023 BaumFest</p>
        </div>

        <div className="content_icons">
          <div className="instagram">
            <a target="_blank" href="/#">
              <div className="ins"></div>
            </a>
          </div>
          <div className="facebook">
            <a target="_blank" href="/#">
              <div className="fa"></div>
            </a>
          </div>

          <div className="spotify">
            <a target="_blank" href="/#">
              <div className="spo"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
