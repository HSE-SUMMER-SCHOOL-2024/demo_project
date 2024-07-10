import React, {useEffect} from 'react';
import style from './home.module.css';
import Item from "./item/Item";
import {POST_PAGE} from "../../router/consts";
import {useDispatch, useSelector} from "react-redux";
import {setAuthAction} from "../../store/userReducer";

const Home = () => {

    const userData = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(setAuthAction({
                id: 1,
                name: 'asd',
                surname: 'das',
                email: 'asd@das.com',
            }))
        }, 1000)
    }, []);

    useEffect(() => {
        console.log(userData);
    }, [userData]);

    const items = [
        {
            title: 'Посты',
            path: POST_PAGE,
        },
        {
            title: 'Личный кабинет',
            path: POST_PAGE,
        },
    ]

    const [state, setState] = React.useState([
        'Посты', 'Видео-семинары', 'Личный кабинет'
    ]);

  return (
    <div className={style.home}>
        {state.map((text) => {
            return <Item text={text} key={text}/>
        })}
    </div>
  );
};

export default Home;