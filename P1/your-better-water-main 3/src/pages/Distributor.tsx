import React from "react";
import "../styles/Distributor.css"; // 引入成为分销商页面样式

const Distributor = () => {
  return (
    <div className="distributor-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="left">
            <h1 className="hero-slogan">
              <span className="fade-in-line" >Achieve Financial Freedom</span><br />
              <span className="fade-in-line">with Unlimited Commissions</span><br />
              <span className="fade-in-line">Earn More with Us</span>
            </h1>
            <p className="hero-detail">
              <span className="fade-in-line">Join our Enagic and Kangen Water team and embark</span><br />
              <span className="fade-in-line">on a guided journey toward financial freedom.</span><br />
              <span className="fade-in-line">Earn the income you desire, on your own terms, while unlocking a pathway</span><br />
              <span className="fade-in-line">to true wealth and health through this empowering business opportunity.</span>
            </p>
          </div>
          <div className="right">
            <a href="#">Join Us <span className="iconfont icon-direction-right"></span></a>
          </div>
        </div>
      </section>

      <div className="transition_bg1"></div>


      {/* 优势 */}
      <section className="benefits">
        <div className="wrapper">
          <div className="upside">
            <div className="left">
              <h2>Empower Yourself. <br />Transform Your <br />Life.</h2>

              <a href="#">Join Us <span className="iconfont icon-direction-right"></span></a>

            </div>
            <p>
              Imagine a life where you have the freedom to work when and where you want,<br />
              unlimited earning potential, and the chance to improve not only your health but the health of others. <br /><br />
              By joining Enagic, this vision can become your reality.Enagic is a world-renowned leader <br />
              in water filtration and alkaline-ioniser technology, with its own OEM-certified facilities in Japan and ISO-certified processes. <br /><br />
              By becoming a distributor, you’ll not only represent premium products but also gain access to a patented compensation plan <br />
              offering bonuses of up to $US800,000 and monthly payouts reaching $US80,000. <br />
              This is more than a business opportunity—it’s a chance to design the lifestyle you’ve always dreamed of.
            </p>
          </div>
          <div className="downside">
            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <h3>Total freedom—on your terms</h3>
                </div>
                <div className="card-back">
                  <p>
                    Work whenever, wherever, and however you choose. Take control of your income and build the life you deserve. With no limits on your potential earnings, the sky’s the limit.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <h3>Step into a proven success system</h3>
                </div>
                <div className="card-back">
                  <p>
                    Whether you're looking for a side hustle or a full-time career, we provide the tools, strategies, and guidance to help you succeed from day one.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <h3>Fast-track your investment return</h3>
                </div>
                <div className="card-back">
                  <p>
                    With just 5 sales, you’ll see a full return on your investment. Our step-by-step ROI plan ensures your success is as swift as it is impactful.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <h3>Earn generously with a unique compensation plan</h3>
                </div>
                <div className="card-back">
                  <p>
                    Tap into Enagic’s patented plan, designed to reward hard work with incredible payouts. Help others while transforming your own financial future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="transition_bg2"></div> */}


      <section className="technology">
        <div className="technology-wrapper">
          <div className="technology-images-1"></div>

          <div className="technology-content">
            <h2>Sell technology that matters</h2>
            <p>
              Enagic has been in business for 50 years. The Japanese company produces medical-grade devices used in hospitals to produce ionised alkaline and acidic waters through electrolysis, and this can be used for drinking, cooking, beauty, and cleaning.
            </p>
            <ul>
              <li>ISO-certified quality control processes</li>
              <li>Certified medical-grade devices</li>
              <li>Global recognition for innovation</li>
              <li>Eco-friendly product designs</li>
            </ul>
            <a href="#" className="cta-button">Learn More <span className="iconfont icon-direction-right"></span></a>
          </div>
        </div>
      </section>

      <div className="transition_bg2"></div>


      {/* 客户评价 */}
      {/* <section className="testimonials">
        <h2>分销商评价</h2>
        <div className="testimonial">
          <p>
            “成为这个品牌的分销商是我最好的决定之一，他们的支持让我业务蒸蒸日上。”
          </p>
          <h4>—— 张先生，北京</h4>
        </div>
      </section> */}

      {/* 常见问题解答 */}
      {/* <section className="faq">
        <h2>常见问题解答</h2>
        <div className="faq-item">
          <h4>我需要具备什么资格才能成为分销商？</h4>
          <p>我们欢迎有销售经验和市场资源的个人或公司加入。</p>
        </div>
      </section> */}

      {/* 行动呼吁 */}
      {/* <section className="call-to-action">
        <h2>准备好加入我们了吗？</h2>
        <button>填写申请表</button>
      </section> */}


    </div>
  );
};

export default Distributor;
