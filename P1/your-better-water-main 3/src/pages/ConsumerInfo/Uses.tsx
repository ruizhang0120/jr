import React, { useState } from "react";
import styles from "../../styles/ConsumerInfo/Uses.module.css"; // 引入样式

// Testimonial 数据接口
interface Testimonial {
  id: number;
  message: string;
  author: string;
}

// Testimonial 数据
const testimonials: Testimonial[] = [
  {
    id: 1,
    message:
      "BRILLIANT! I had no idea that Kangen Water could replace so many products in my household.",
    author: "Sally Delacruz",
  },
  {
    id: 2,
    message:
      "I’ve had the Leveluk K8 for two years now and I feel guilty that I haven’t been using it to its full potential. Thank you Dee!",
    author: "Omar Mallor",
  },
  {
    id: 3,
    message:
      "I always knew Kangen Water was great for drinking, but I didn’t realise how much more it could do. I’ve thrown out most of my cleaning products, and haven’t looked back!",
    author: "Macy Adams",
  },
];

const ConsumerInfo: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className={styles["consumer-info-page"]}>
      {/* 顶部标题和描述区域 */}
      <div className={styles["webinar-container"]}>
      <div className={styles["webinar-header"]}>
          <h2>FREE DOWNLOAD</h2>
          <h1>The Kangen K8 Water Machine's 60+ Uses</h1>
          <h1>Product Info eBook</h1>

        </div>
        <div className={styles["webinar-info"]}>
          <p>
            Kangen Water is electrolysed-reduced ionised water created by a certified Enagic® Japanese-made, medical-grade machine.
          </p>
          <p>
          With Kangen Water, you can:
          </p>
          <ul>
            <li>Create oxidised to alkalised waters for low-tox, eco and health conscious living.</li>
            <li>Save thousands in your lifetime by replacing harmful cleaners and chemicals with non toxic acidic and alkalised waters from Enagic® machines.</li>
            <li>
            Nourish your body with filtered, negatively charged electrolysed- reduced water, full of rich hydrogen – a free radical scavenger and antioxidant that reduces oxidative stress to the body.
            </li>
            <li>Save the planet by reducing plastic waste, chemicals in your home, on your body, in our waterways and the ocean.</li>
          </ul>
          <p>Download the free K8 product information guide below to see all of the ways you can benefit from Kangen Water.</p>
        </div>
      </div>

      {/* 底部 Testimonials 和表单部分 */}
      <div className={styles["webinar-bottom"]}>
      <div className={styles["testimonials-section"]}>
      <h3>Testimonials</h3>
          <h1>What They Say</h1>
          <div className={styles["testimonials-slider"]}>
            <div
              className={styles["slider-wrapper"]}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div className={styles["slide"]} key={testimonial.id}>
                  <blockquote>
                    <p>{testimonial.message}</p>
                    <cite>- {testimonial.author}</cite>
                  </blockquote>
                </div>
              ))}
            </div>
            <div className={styles["slider-controls"]}>
              <button onClick={prevSlide}>&#x25C0;</button>
              <button onClick={nextSlide}>&#x25B6;</button>
            </div>
          </div>
        </div>
        <div className={styles["webinar-form"]}>
          <h2>Your Details</h2>
          <form>
          <div className={styles["form-row"]}>
          <div className={styles["form-group"]}>
                <label htmlFor="firstName">First Name *</label>
                <input type="text" id="firstName" placeholder="First Name" />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="lastName">Last Name *</label>
                <input type="text" id="lastName" placeholder="Last Name" />
              </div>
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="phone">Phone *</label>
              <input type="tel" id="phone" placeholder="0412 345 678" />
            </div>
            <div className={styles["form-group"]}>
              <h2>Distributor Details</h2>
              <label>
                <input type="radio" name="distributor" value="dee" />
                I have already been in touch with an Enagic distributor
              </label>
              <label>
                <input type="radio" name="distributor" value="other" />
                I haven't been contacted by an Enagic distributor
              </label>
            </div>
            <button type="submit">Get Instant Access to the Webinar</button>
          </form>
        </div>
      </div>

      <div className={styles["video-banner"]}>
        {/* 背景视频 */}
        <video className={styles["background-video"]} autoPlay muted loop playsInline>
        <source src="/water.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

        {/* 内容覆盖层 */}
        <div className={styles["content"]}>
          <p>LEARN ABOUT KANGEN</p>
          <h1>
            Schedule a free call to see exactly how Kangen Water can benefit your health, wellness, and home.
          </h1>
          <a href="#" className={styles["button"]}>BOOK YOUR CLARITY CALL</a>
        </div>
      </div>

    </div>
  );
};

export default ConsumerInfo;
