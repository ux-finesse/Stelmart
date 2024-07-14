/* eslint-disable no-unused-vars */
// src/components/notification/Notification.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideNotification } from "../../features/cart/notificationSlice";
import style from "./Notification.module.css";
import check from "../../assets/tickcircle.svg"
const Notification = () => {
  const dispatch = useDispatch();
  const { message, visible } = useSelector((state) => state.notification);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, dispatch]);

  return (
    <div className={`${style.notification} ${visible ? style.show : ""}`}>
       <span><img src={check} alt="" /></span><p>{message}</p>
    </div>
  );
};

export default Notification;
