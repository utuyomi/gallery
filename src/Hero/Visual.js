import style from "../scss/hero/Hero.module.scss";
import { useScrollTrigger } from "../hooks/useScrollTrigger"; //トリガーフック読み込み
import bottomarrow from "../assets/bottom-arrow.png";

function Visual({ hero }) {
  const [ref, isVisible] = useScrollTrigger({
    threshold: 1.0,
    rootMargin: "0px 0px -500px 0px",
    once: true,
  });

  return (
    <div className={style.visual}>
      <div className={style.mainview}>
        <div className={style.img}>
          <img src="" alt="main-visual" />
        </div>
      </div>
      <h1>
        {hero.catch01}
        <br />
        {hero.catch02}
      </h1>

      <div className={style.bottomarrow}>
        <a href="">Lean more</a>
        <span ref={ref} className={isVisible ? style.active : ""}>
          <img src={bottomarrow} alt="下向き矢印" />
        </span>
      </div>
    </div>
  );
}

export default Visual;
