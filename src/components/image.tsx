'use client";';
import Image from "next/image";

const Img = ({ src, alt, onClick, style }: any) => {
  return (
    <div
      style={{
        ...style,
        overflow: "hidden",
        zIndex: 0,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="text-gray-300"
      onClick={onClick}
    >
      {/* <div
        className="opacity-0.3 absolute -top-1  w-full h-full opacity"
        style={{ opacity: load ? 0 : 1, transition: "ease-out 250ms" }}
      >
        <Skeleton className="h-full w-full" />
      </div> */}
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "ease-in 250ms",
        }}
      />
    </div>
  );
};

export default Img;
