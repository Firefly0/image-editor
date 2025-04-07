import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ImageData } from "../types";
import ImageCard from "./ImageCard";
import "../styles/GalleryPage.css";

const GalleryPage: React.FC = () => {
    const [images, setImages] = useState<ImageData[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get("page") || "1", 10);

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `https://picsum.photos/v2/list?page=${currentPage}&limit=12`
                );
                const data = await response.json();
                setImages(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [currentPage]);

    const goToPage = (page: number) => setSearchParams({ page: String(page) });

    return (
        <div className="gallery-page">
            <h1>Image Gallery</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div className="grid">
                {images.map((img) => (
                    <Link to={`/edit/${img.id}`} key={img.id}>
                        <ImageCard id={img.id} author={img.author} />
                    </Link>
                ))}
            </div>
            <div className="pagination">
                <button
                    disabled={currentPage === 1}
                    onClick={() => goToPage(currentPage - 1)}
                >
                    ⟨ Prev
                </button>
                <span>Page {currentPage}</span>
                <button onClick={() => goToPage(currentPage + 1)}>
                    Next ⟩
                </button>
            </div>
        </div>
    );
};

export default GalleryPage;
