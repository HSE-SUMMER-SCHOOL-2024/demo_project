import React, {useEffect, useRef} from 'react';
import style from './item.module.css'
import {useNavigate} from "react-router-dom";

const Item = ({text = 'asd', path = '/'}) => {

    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(path);
    }

  return (
      <div className={style.item} onClick={clickHandler}>
          <p>{text}</p>
      </div>
  );
};

export default Item;