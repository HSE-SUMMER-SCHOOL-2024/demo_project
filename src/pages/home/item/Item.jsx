import React, {useEffect, useRef} from 'react';
import style from './item.module.css'

const Item = ({text = 'asd', onClick = () => {}}) => {


    // const submitHandler = (e) => {
    //     e.preventDefault();
    //
    //     if(formRef.current === null) return;
    //
    //     const data = new FormData(formRef.current);
    //
    //     const body = {};
    //
    //     for (const pair of data.entries()) {
    //         body[pair[0]] = pair[1];
    //     }
    //
    //     //@nikita_dumkin
    //
    // }

  return (
      <div className={style.item}>
          <p>{text}</p>
      </div>
  );
};

export default Item;