import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import "../styles/iconfont/iconfont.css"


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="slogan">
          <h2>Change your water. Change your life.
            <br />
            Buy a Kangen Water machine today
          </h2>

          <a href="#">GET STARTED <span className="iconfont icon-direction-right"></span></a>
        </div>

        <div className="logo">
          <img src="/images/enagic-distributor-logo-white-transparent-bg.webp" />
        </div>

        <div className="nav">
          <section>
            <h2>Enagic Products</h2>
            <ul>
              <li><a href="#">Leveluk K8 (Kangen Water)</a></li>
              <li><a href="#">Anespa DX Shower Unit</a></li>
              <li><a href="#">emGuard EMF Blocker</a></li>
              <li><a href="#">2024 Price List & Payment Options</a></li>
              <li><a href="#">How to Order Kangen Water</a></li>
              <li><a href="#">Buy a Kangen Water Machine</a></li>
              <li><a href="#">Shipping Rates</a></li>
              <li><a href="#">Shipping Calculator</a></li>
            </ul>
          </section>
          <div className="second-column">
            <section>
              <h2>For Consumers</h2>
              <ul>
                <li><a href="#">What is Kangen Water?</a></li>
                <li><a href="#">60+ Uses for Kangen Water</a></li>
                <li><a href="#">Hire a Kangen Water Machine</a></li>
                <li><a href="#">Book a No-Cost Info Call</a></li>
                <li><a href="#">Machine Maintenance Reminders</a></li>
                <li><a href="#">Consumer FAQ</a></li>
                <li><a href="#">Resources</a></li>
              </ul>
            </section>
            <section>
              <h2>For Distributors</h2>
              <ul>
                <li><a href="#">How to become a Distributor</a></li>
                <li><a href="#">Join the Distributor Directory</a></li>
                <li><a href="#">Get the Paperwork Generator</a></li>
                <li><a href="#">Ukon Renewal Reminders</a></li>
                <li><a href="#">Book A Clarity Call</a></li>
                <li><a href="#">Distributor FAQ</a></li>
              </ul>
            </section>
          </div>
          <section>
            <h2>About Enagic</h2>
            <ul>
              <li><a href="#">The Company</a></li>
              <li><a href="#">Our CEO</a></li>
              <li><a href="#">Our Factory</a></li>
              <li><a href="#">Certifications</a></li>
              <li><a href="#">Refunds & Returns</a></li>
              <li><a href="#">Warranties</a></li>
              <li><a href="#">News & Updates</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Website Terms</a></li>
            </ul>
          </section>
          <section>
            <h2>Office</h2>
            <address>
              1/39 Leighton Place,<br /> Hornsby NSW 2077<br /><br /><br />
              (02) 8323 7187<br /><br /><br />
              +61 499 441 848 (SMS ONLY)<br /><br /><br />
              <a href="mailto:info@enagicwater.com.au">info@enagicwater.com.au</a>
            </address>
          </section>
        </div>


        <div className="copyright">
          
          © 2024 by Dee Zibara, Enagic Distributor ID 29000021614. All Rights Reserved.
          <br /><br />
          Kangen Water® is a registered trademark of Enagic International Co., Ltd.
        </div>
      </div>
    </footer>
  );
};

export default Footer;