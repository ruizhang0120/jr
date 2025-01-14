import React, { useState } from "react";
import styles from "../../styles/ConsumerInfo/Benefits.module.css"; // 引入模块化样式

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
      "Absolutely amazing! Very informative and very clear. Loved it all! Thank you ❤️",
    author: "Betty Fotofili",
  },
  {
    id: 2,
    message:
      "This webinar was worth every minute of lost sleep. Got up at 3AM here in Canada to join all you queens!",
    author: "Blair Abbey",
  },
  {
    id: 3,
    message:
      "Thank you so much for bringing it together for an epic webinar. I learnt so much and feel the biggest fire in my belly to share this water even more passionately with more people.",
    author: "Kirra Dyer",
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
          <h2>Watch the Webinar </h2>
          <h1>Water to Thrive with Dee Zibara & Sarah Andrews</h1>
        </div>
        <div className={styles["webinar-info"]}>
          <p>
            Hear from hormonal health expert Dee Zibara as she explains the
            benefits of electrolysed reduced water for your health, wellness,
            and home.
          </p>
          <p>In this webinar:</p>
          <ul>
            <li>The health benefits of ionised water compared to other water</li>
            <li>See incredible testimonials on the power of this water</li>
            <li>
              Learn about additional uses to create a low-tox oasis in your home
            </li>
            <li>Find out how to obtain your own</li>
          </ul>
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
                <div
                  className={styles["slide"]}
                  key={testimonial.id}
                >
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
                Dee is the Enagic distributor I've been chatting to
              </label>
              <label>
                <input type="radio" name="distributor" value="other" />
                I’ve been chatting to another Enagic distributor
              </label>
            </div>
            <button type="submit">Get Instant Access to the Webinar</button>
          </form>
        </div>
      </div>

      {/* 视频横幅 */}
      <div className={styles["video-banner"]}>
        <video
          className={styles["background-video"]}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/water.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles["content"]}>
          <p>LEARN ABOUT KANGEN</p>
          <h1>
            Schedule a free call to see exactly how Kangen Water can benefit
            your health, wellness, and home.
          </h1>
          <a href="#" className={styles["button"]}>
            BOOK YOUR CLARITY CALL
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConsumerInfo;
