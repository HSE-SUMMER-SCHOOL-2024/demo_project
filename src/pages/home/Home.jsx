import React, {useEffect} from 'react';
import style from './home.module.css';
import Item from "./item/Item";
import {LOGIN_PAGE, POST_PAGE} from "../../router/consts";
import {useDispatch, useSelector} from "react-redux";
import {setAuthAction, setNotAuthAction} from "../../store/userReducer";

const Home = () => {

    const items = [
        {
            title: 'Посты',
            path: POST_PAGE,
        },
        {
            title: 'Личный кабинет',
            path: LOGIN_PAGE,
        },
    ]

  return (
    <div className={style.home}>
        {items.map(({path, title}) => {
            return <Item text={title} key={title} path={path}/>
        })}
    </div>
  );
};

export default Home;