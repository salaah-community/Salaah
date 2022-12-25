import React, { useEffect, useState } from "react";
import photo from "../../assets/team/rohit.png";
import "../../styles/UpdateComponent.css";
import client from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import { BsArrowUpRight } from "react-icons/bs";

const UpdateComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "updates"] {
          title,
          link,
          slug,
          mainImage{
            asset -> {
              _id,
              url,
            }
          },
          body,
        }
     `
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
      <div
        className="about-stories_item w-dyn-item about_story_card"
        style={{
          opacity: "1",
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {posts.map((post) => {
          console.log(post);
          return (
            <>
              <a
                target="_blank"
                href={`${post.link}`}
                key={post.slug.current}
                className="about-stories_item-wrapper w-inline-block"
              >
                <div className="about-stories_image">
                  <img
                    src={`${post.mainImage.asset.url}`}
                    loading="lazy"
                    alt=""
                    style={{ width: "100%" }}
                    class="story_image-thumbnail"
                  />
                </div>
                <div className="about-stories_content-wrapper">
                  <div className="about-stories_title-wrapper">
                    <div className="Ultrabold">{post.title}</div>
                    <BsArrowUpRight size={30} />
                  </div>
                  <div className="about-stories_title-wrapper is-inactive w-condition-invisible">
                    <div>{post.title}</div>
                  </div>
                  <div className="story_inactive-overlay w-condition-invisible"></div>
                  <div className="about-stories_meta-wrapper">
                    <div className="Poppins">
                      <BlockContent
                        blocks={post.body}
                        projectId="l2m71ycp"
                        dataset="production"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </>
          );
        })}
        <hr style={{width: '80vw', margin: 'auto'}}/>
      </div>
  );
};

export default UpdateComponent;
