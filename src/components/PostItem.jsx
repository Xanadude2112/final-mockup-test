import { useState } from "react";
import "../styles/PostItem.scss";

function PostItem({ id, title, tech, people }) {
  return (
    <div className="post-item-master">
      <div className="post-header">
        <div className="project-title">
          <div className="project-image"></div>
          <h3>{title}</h3>
        </div>
        <i className="fa-solid fa-people-group group-icon"></i>
      </div>
      <div className="project-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta
        similique architecto assumenda! Nam magnam fugiat odit ipsam dicta amet,
        tempora, tempore ex itaque pariatur ullam ab, reprehenderit omnis
        eveniet. Sequi repudiandae placeat, iure, incidunt dolore eligendi
        adipisci ipsum dignissimos quos aliquid similique quas animi possimus
        sint tempora voluptatibus nisi!
      </div>
      <div className="project-foot">
        <div className="tech-stack">
          {tech.map((techSlot) => (
            <div className="tech-div">{techSlot}</div>
          ))}
        </div>
        <button className="request-join-btn">Request to join</button>
      </div>
    </div>
  );
}

export default PostItem;
