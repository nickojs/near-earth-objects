import React, { useState, useEffect } from 'react';
import * as S from './styles';

const Notification = ({ content }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);

    const timer = setTimeout(() => {
      setAnimate(false);
    }, 3000);

    return () => clearInterval(timer);
  }, [content]);

  return content && (
    <S.NotificationContainer animate={animate}>
      <p>{content}</p>
    </S.NotificationContainer>
  );
};

export default Notification;
