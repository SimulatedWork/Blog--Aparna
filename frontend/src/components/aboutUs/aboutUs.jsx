import React from 'react'
import Navbar2 from '../navbar2/navbar2';
import "../aboutUs/aboutUs.css";
import {BsInstagram} from "react-icons/bs";

function aboutUs() {
  return (
    <div className="body">
      <Navbar2 />
      <div className="background">
        <h1>
          Welcome to <b>BlogBouquet</b>
        </h1>
        <h2>
          Where Your Words Matter! Discover Your Voice, Share Your Passion, and
          Connect with a Global Audience.
        </h2>
        <p className="text-content">
          About BlogBouquet:
          <br />
          <br />
          BlogBouquet is a vibrant and user-friendly blogging platform that
          empowers individuals to express themselves, share their expertise, and
          connect with a diverse audience. Whether you're a seasoned blogger or
          just starting out, we provide the tools and community to help you
          succeed.
        </p>
        <p className="text-content">
          Why Choose BlogBouquet?
          <br />
          <br /> User-Friendly Interface: Easily create and publish captivating
          blog posts with our intuitive and easy-to-use platform. Wide Reach:
          Reach a global audience and build a community around your unique voice
          and perspective. Engagement and Interaction: Foster meaningful
          discussions, receive feedback, and engage with your readers.
          Customization Options: Personalize your blog to reflect your
          personality and style, making it truly your own. Analytics and
          Insights: Gain valuable insights into your blog's performance and
          audience engagement.
        </p>
        <p className="text-content">
          <h1>Join Our Community of Passionate Bloggers! </h1>
          <br />
          <br />
          <br />
          Get Started Today:
          <br /> Join BlogBouquet and begin your exciting blogging journey in
          just a few clicks. Explore Featured Blogs: Discover inspiring and
          popular blogs created by our talented community. Read, Write, and
          Connect: Immerse yourself in a world of creativity, knowledge, and
          shared experiences.
        </p>
        <p className="text-content" id="testimonials">
          <h2>Testimonials from Happy Bloggers:</h2>
          <br />
          <br />
          <div id="display-card">
            <div className="grid-box">
              "I love how BlogBouquet has made blogging so effortless and
              enjoyable. The community here is fantastic, and I've found my
              voice!" - Sarah B.
            </div>
            <br />
            <br />
            <div className="grid-box">
              "I've seen a significant increase in readership since joining
              BlogBouquet. It's an amazing platform for both beginners and
              experienced bloggers." - John D.
            </div>
            <br />
            <br />
            <div className="grid-box">
              "I love how BlogBouquet has made blogging so effortless and
              enjoyable. The community here is fantastic, and I've found my
              voice!" - Sarah B.
            </div>
          </div>
          <br />
          <br />
          Start Blogging Today - Let Your Words Spark a Conversation!
          Get Started or <a href="#">Sign Up</a> now and embark on your
          blogging journey with BlogBouquet.
        </p>
        <hr />
        <footer>
          Stay Connected: Follow us on <BsInstagram /> | Subscribe to our
          Newsletter for updates and blogging tips.
        </footer>
        {/* <Create /> */}
      </div>
    </div>
  );
}

export default aboutUs