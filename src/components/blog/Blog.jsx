import React from 'react';
import './blog.css'
import Card from './Card';
import Data from './Data';
const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <div className="header__container">
        <h2 className="section__title">Latest Posts</h2>
        <a href='#' className="see-more">
          View All Blogs
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path></svg>
        </a>
      </div>
      <div className="blog__container grid">
        {Data.map((data, id) => {
          return (
            <Card
              key={id}
              thumb={data.thumb}
              title={data.title}
              date={data.date}
              author={data.author}
            />
          )
        })}
      </div>
    </section>
  )
}
export default Blog
