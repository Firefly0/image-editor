import React, { useEffect, useState } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import "../styles/EditPage.css";

const EditPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [searchParams, setSearchParams] = useSearchParams();

    const [width, setWidth] = useState(searchParams.get("width") || "600");
    const [height, setHeight] = useState(searchParams.get("height") || "400");
    const [grayscale, setGrayscale] = useState(
        searchParams.get("grayscale") === "true"
    );
    const [blur, setBlur] = useState(searchParams.get("blur") || "0");

    useEffect(() => {
        setSearchParams({
            width,
            height,
            grayscale: String(grayscale),
            blur,
        });
    }, [width, height, grayscale, blur, setSearchParams]);

    if (!id) return <p>Image ID not found</p>;

    const imageUrl =
        `https://picsum.photos/id/${id}/${width}/${height}` +
        (grayscale || blur !== "0"
            ? `?${grayscale ? "grayscale&" : ""}${
                  blur !== "0" ? `blur=${blur}` : ""
              }`
            : "");

    return (
        <div className="edit-page">
            <h1>Edit Image #{id}</h1>

            <div className="form">
                <label>
                    Width:
                    <input
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                    />
                </label>
                <label>
                    Height:
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </label>
                <label>
                    Grayscale:
                    <input
                        type="checkbox"
                        checked={grayscale}
                        onChange={(e) => setGrayscale(e.target.checked)}
                    />
                </label>
                <label>
                    Blur:
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={blur}
                        onChange={(e) => setBlur(e.target.value)}
                    />
                    <span>{blur}</span>
                </label>
            </div>

            <div className="preview">
                <img src={imageUrl} alt="Preview" />
            </div>

            <p>
                <Link to="/"> Back to Gallery</Link>
            </p>
        </div>
    );
};

export default EditPage;
