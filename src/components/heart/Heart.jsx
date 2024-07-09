/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import HeartFilled from "../HeartFilled";
import HeartOutline from "../HeartOutline";
import style from "../heart/Heart.module.css";

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className={style.likebtn}>
      <button onClick={toggleLike} className={style.iconbtn}>
        {liked ? <HeartFilled /> : <HeartOutline />}
      </button>
    </div>
  );
}

export default LikeButton;
