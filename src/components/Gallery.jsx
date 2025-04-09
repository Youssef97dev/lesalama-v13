"use client";
import React from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Link from "next/link";
import Image from "next/image";

const galleryItems = [
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/q_auto:low/v1/salama-V2/a7o2rbmgitucumu4lp1m",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_300,w_300/v1/salama-V2/a7o2rbmgitucumu4lp1m",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/q_auto:low/v1/salama-V2/a3vwgprl2hhg9cyf2mov",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_300,w_300/v1/salama-V2/a3vwgprl2hhg9cyf2mov",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/q_auto:low/v1/salama-V2/fnezjj5w3bb716kn09y9",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_300,w_300/v1/salama-V2/fnezjj5w3bb716kn09y9",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/q_auto:low/v1/salama-V2/f9p7bzwtaraxmovgqyeh",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_300,w_300/v1/salama-V2/f9p7bzwtaraxmovgqyeh",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/q_auto:low/v1/salama-V2/wjujhoikhd0iz8lobjmd",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_300,w_300/v1/salama-V2/wjujhoikhd0iz8lobjmd",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/q_auto:low/v1/salama-V2/ypw98v2x57uxrawqaucu",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_300,w_300/v1/salama-V2/ypw98v2x57uxrawqaucu",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/q_auto:low/v1/salama-V2/dgyjhmonztajufhiilwk",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_300,w_300/v1/salama-V2/dgyjhmonztajufhiilwk",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/q_auto:low/v1/salama-V2/d4tkul9faiuji7jxcwpe",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_300,w_300/v1/salama-V2/d4tkul9faiuji7jxcwpe",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/q_auto:low/v1/salama-V2/zphdnlvatgiwsw8rd93i",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_300,w_300/v1/salama-V2/zphdnlvatgiwsw8rd93i",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/q_auto:low/v1/salama-V2/w7od2aow2zbejbfxurht",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_300,w_300/v1/salama-V2/w7od2aow2zbejbfxurht",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/q_auto:low/v1/salama-V2/n4kdk6daeadzy7ipmyqe",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_300,w_300/v1/salama-V2/n4kdk6daeadzy7ipmyqe",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/q_auto:low/v1/salama-V2/cpgsvredpzheozexmdur",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_300,w_300/v1/salama-V2/cpgsvredpzheozexmdur",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/q_auto:low/v1/salama-V2/fqe4wpsjg6aoctsmwsbi",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_300,w_300/v1/salama-V2/fqe4wpsjg6aoctsmwsbi",
  },
];

const MemoizedImage = React.memo(({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    layout="responsive"
    width={300}
    height={300}
    loading="lazy" // Lazy loading
    className="rounded-sm"
  />
));

// Setting the display name for the MemoizedImage component
MemoizedImage.displayName = "MemoizedImage";

const Gallery = () => {
  return (
    <div id="gallery" className="mx-auto py-5 px-4 ">
      <LightGallery
        speed={500}
        plugins={[lgThumbnail]}
        elementClassNames="masonry"
      >
        {galleryItems?.map((image, index) => (
          <Link href={image.src} key={index}>
            <div className="masonry-item relative shadow-lg hover:scale-105 transition-all ease-linear overflow-hidden">
              <MemoizedImage src={image.thumbnail} alt={`Le salama ${index}`} />
            </div>
          </Link>
        ))}
      </LightGallery>
    </div>
  );
};

export default Gallery;
