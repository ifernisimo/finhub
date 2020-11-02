import React, { useState } from "react";
import styles from "./BorrowerP2pPart.module.css";
import divider from "../../assets/images/dots_divider.svg";
import video from "../../assets/video/video.mp4";
import playBtn from "../../assets/images/play_video_btn.svg";

const BorrowerP2pPart = (props) => {
  const [state, setState] = useState(styles.overlay);
  const [stateImg, setStateImg] = useState(styles.playBtn);

  let videoPlay = React.createRef();
  const handlePlay = () => {
    setState(styles.overlayHidden);
    setStateImg(styles.playBtnHidden);
    if (videoPlay.current.paused) {
      videoPlay.current.play();
    } else {
      setState(styles.overlay);
      setStateImg(styles.playBtn);
      videoPlay.current.pause();
    }
  };

  const handleEndedVideo = () => {
    setState(styles.overlay);
    setStateImg(styles.playBtn);
  };

  return (
    <>
      <div className={styles.p2p}>
        <div className={styles.blockTitle}>
          <h2>
            <span>P2P кредитование</span> — обучающий ролик
          </h2>
          <img className={styles.divider} src={divider} alt="" />
          <p>
            Finhub — это исключительно онлайн-платформа. У нее нет офисов с
            целыми штатами сотрудников, а потому нет дополнительных расходов на
            аренду, коммунальные услуги, зарплаты. Это позволило установить
            эффективные процентные ставки на уровне, интересном для инвесторов и
            приемлемом для заемщиков. Впрочем, о преимуществах мы подробно
            расскажем в видео.
          </p>
        </div>
        <div className={styles.video}>
          <div className={stateImg}>
            <img onClick={(e) => handlePlay()} src={playBtn} alt="" />
          </div>
          <div className={state}></div>
          <video
            ref={videoPlay}
            src={video}
            onEnded={(e) => handleEndedVideo()}
          ></video>
        </div>
      </div>
    </>
  );
};

export default BorrowerP2pPart;
