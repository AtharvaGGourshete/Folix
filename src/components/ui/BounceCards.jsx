import { useEffect } from "react";
import { gsap } from "gsap";

export default function BounceCards({
  className = "",
  images = [],
  containerWidth = 1000,
  containerHeight = 1000,
  animationDelay = 1.5,
  animationStagger = 1.6,
  easeType = "elastic.out(2, 1)",
  transformStyles = [
    "rotate(20deg) translate(-170px)",
    "rotate(5deg) translate(-85px)",
    "rotate(-3deg)",
    "rotate(-10deg) translate(95px)",
    "rotate(2deg) translate(190px)",
  ],
}) {
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { scale: 0 },
      {
        scale: 1,
        stagger: animationStagger,
        ease: easeType,
        delay: animationDelay,
      },
    );
  }, [animationStagger, easeType, animationDelay]);

  return (
    <div
      className={`relative ${className}`}
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className="card absolute w-[300px] aspect-square border-2 border-white rounded-[30px] overflow-hidden"
          style={{
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            transform:
              transformStyles[idx] !== undefined
                ? transformStyles[idx]
                : "none",
          }}
        >
          <img
            className="w-full h-full object-cover"
            src={src}
            alt={`card-${idx}`}
          />
        </div>
      ))}
    </div>
  );
}
