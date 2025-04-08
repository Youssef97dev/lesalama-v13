"use client";
import React from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Link from "next/link";
import Image from "next/image";

const galleryItems = [
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/a7o2rbmgitucumu4lp1m",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/a7o2rbmgitucumu4lp1m",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/a3vwgprl2hhg9cyf2mov",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/a3vwgprl2hhg9cyf2mov",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/fnezjj5w3bb716kn09y9",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/fnezjj5w3bb716kn09y9",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/f9p7bzwtaraxmovgqyeh",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/f9p7bzwtaraxmovgqyeh",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/wjujhoikhd0iz8lobjmd",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/wjujhoikhd0iz8lobjmd",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/ypw98v2x57uxrawqaucu",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/ypw98v2x57uxrawqaucu",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/dgyjhmonztajufhiilwk",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/dgyjhmonztajufhiilwk",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/d4tkul9faiuji7jxcwpe",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/d4tkul9faiuji7jxcwpe",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/zphdnlvatgiwsw8rd93i",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/zphdnlvatgiwsw8rd93i",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/w7od2aow2zbejbfxurht",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/w7od2aow2zbejbfxurht",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/n4kdk6daeadzy7ipmyqe",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/n4kdk6daeadzy7ipmyqe",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/cpgsvredpzheozexmdur",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/cpgsvredpzheozexmdur",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/fqe4wpsjg6aoctsmwsbi",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/fqe4wpsjg6aoctsmwsbi",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/buxnfuyskb8b7y3qiguj",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/buxnfuyskb8b7y3qiguj",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/fwdhshvreqowanjy0ky4",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/fwdhshvreqowanjy0ky4",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/rimrxc1hbygsfdidqrdl",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/rimrxc1hbygsfdidqrdl",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/wpeblknuvih6agl39p4q",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/wpeblknuvih6agl39p4q",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/yavd4h16bc6shbscug6u",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/yavd4h16bc6shbscug6u",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/urz9wpnkvpkgvjukvhxy",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/urz9wpnkvpkgvjukvhxy",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/aiu0xyq0yszojj6tun6a",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_webp/q_auto/v1/salama-V2/aiu0xyq0yszojj6tun6a",
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
          <Link href={image.thumbnail} key={index}>
            <div className="masonry-item relative shadow-lg hover:scale-105 transition-all ease-linear overflow-hidden">
              <MemoizedImage src={image.src} alt={`Le salama ${index}`} />
            </div>
          </Link>
        ))}
      </LightGallery>
    </div>
  );
};

export default Gallery;
