import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHive</h2>
            <p className='fs-17'>BookHive is a vibrant community for book enthusiasts around the world, offering a space where readers can explore and discover new books across various genres. It allows users to read and share honest reviews, helping others make informed choices and find books that match their interests. Personalized recommendations make it easier for readers to uncover hidden gems and authors they might love. Users can create and maintain their own digital bookshelves, keeping track of what they’ve read and what they plan to read next. BookHive also enables readers to follow authors, stay updated on new releases, and interact with them directly. The platform encourages engaging discussions, virtual book clubs, and literary events that bring the community together. It connects like-minded readers, fostering a culture of learning and a lifelong love of reading. Both casual readers and serious literature aficionados can enjoy and contribute to the platform. With its user-friendly interface, discovering, sharing, and enjoying books becomes an effortless and enjoyable experience. Ultimately, BookHive is more than a platform—it’s a thriving hub where stories, ideas, and readers converge.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
