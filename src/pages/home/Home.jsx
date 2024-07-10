import React from 'react';
import style from './home.module.css';
import Item from "./item/Item";

const Home = () => {

    const [state, setState] = React.useState([
        'Посты', 'Видео-семинары', 'Личный кабинет'
    ]);

    const itemClickHandler = (text) => {
        setState(state.filter(item => item !== text));
    }

  return (
    <div className={style.home}>
        {state.map((text) => {
            return <Item text={text} key={text} onClick={itemClickHandler} />
        })}
    </div>
  );
};

export default Home;