import React from "react";
import "../styles/ImageCard.css";

interface Props {
    id: string;
    author: string;
}

const ImageCard: React.FC<Props> = ({ id, author }) => (
    <div className="image-card">
        <img
            src={`https://picsum.photos/id/${id}/300/200`}
            alt={author}
            loading="lazy"
        />
        <p>{author}</p>
    </div>
);

export default ImageCard;
