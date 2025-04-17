import { useEffect, useState } from "react";
import style from "../scss/Gallery/Gallery.module.scss";
import { useScrollTrigger } from "../hooks/useScrollTrigger";
import GalleryListText from "./GalleryListText";

function GalleryListItem({ item, isLeft }) {
  const [ref, inView] = useScrollTrigger({
    threshold: 0.7,
    rootMargin: "0px 0px -100px 0px",
    once: true,
  });

  const [slideY, setSlideY] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setSlideY(true);
      }, 750);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  const wrapperClass = isLeft
    ? `${style.GalleryLeftitem} ${inView ? style.slideX : ""} ${
        slideY ? style.slideY : ""
      }`
    : `${style.GalleryRightitem} ${inView ? style.slideX : ""} ${
        slideY ? style.slideY : ""
      }`;

  return (
    <div ref={ref} className={wrapperClass}>
      <div className={style.img}>
        <img src={item.url} alt={item.title} />
      </div>
      <div className={style.text}>
        <h2>{item.title}</h2>
        <GalleryListText item={item.skills} />
      </div>
    </div>
  );
}

export default GalleryListItem;
