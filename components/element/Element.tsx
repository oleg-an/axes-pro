import React from 'react';
import style from './Element.module.css';
import Image from 'next/image'
import UserImage from '../../public/user.svg';

interface Props extends React.HTMLAttributes<HTMLElement> {
    title: string;
    value: number;
}

export const Element = ({...props}: Props) => {
    return <div className={style.container}>
        <div className={style.icon}>
            <Image alt="" src={UserImage}/>
        </div>
        <div className={style.container}>
            <div className={style.title}>{props.title}</div>
        </div>
    </div>
};
