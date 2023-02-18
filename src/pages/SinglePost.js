import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import client from "../client"
import BlockContent from "@sanity/block-content-to-react"
import HomeLast from "../components/HomeLast"
import Footer from "../components/Footer"
import "../styles/mentors.css";
import { FiLinkedin } from "react-icons/fi";
import '../styles/Page.css'
import Navbar from "../components/Navbar"

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState([])
  const { slug } = useParams()

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
        body,
        'mentors': mentors[] -> {title, link, mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      },
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        },
        coverImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }
      `
      )
      .then((data) => setSinglePost(data))
  }, [slug])

  return (
    <div style={{backgroundColor:'rgba(68, 68, 68, 0.4)'}}>
      <Navbar />
        <section>
        {singlePost.map((post) => {
              return (
                <>
          {post.coverImage && post.coverImage.asset && (
            <img
              key={post.coverImage.asset.id}
              src={post.coverImage.asset.url}
              alt={post.title}
              title={post.title}
              className="hero-comp-img"
            />
          )}
          <h1
              className="Ultrabold"
              style={{
                fontSize: "3rem",
                marginTop: "3rem",
                marginBottom: "4rem",
                textAlign: "center",
              }}
            >
              {post.title}
            </h1> 

          <div className="block__content container pg-container Poppins">
            <BlockContent
              blocks={post.body}
              projectId="l2m71ycp"
              dataset="production"
            />
          <button style={{marginTop: '2rem', marginBottom: '2rem'}} className="btn">
            <Link
              to="/opportunities"
            >
              Read more articles
            </Link>
          </button>
          <h3
              className="Regular"
              style={{
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: "bold",
                marginTop: "6rem",
                marginBottom: "5rem",
              }}
              >
              Our Mentors
            </h3>
            <div>
            <div className="try ">
            {
              post.mentors.map((data) => {
                return (
                  <>
                <div className="card__parent">
                  <div className="cards">
                  <img className="card-image" key={data.mainImage.asset.id} src={data.mainImage.asset.url} alt="" />
                <div className="card-content">
                  <h2 className="card-heading">{data.title}</h2>
                  <a href={data.link} className="btn card-a">
                    Find out more
                    <span className="material-symbols-outlined">
                      <FiLinkedin />
                    </span>
                  </a>
                </div>
                </div>
                </div>
                </>
                );
              })}
        </div>
            </div>
          </div>
          <HomeLast />
          <Footer />
          </>
          )})}
          </section>
    </div>
  )
}