import React from "react";
import { Image } from "semantic-ui-react";

const AlbumList = ({ album }) => {
  return (
    <div className="album-list">
      <div className="album-list__container">
        {album?.map(({ id, title, thumbnailUrl }) => (
          <div className="album-list__container__item" key={`${id}-${title}`}>
            <Image src={thumbnailUrl} size="small" />
            <h5>{title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
