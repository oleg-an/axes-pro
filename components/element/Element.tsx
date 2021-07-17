import React from 'react';
import style from './Element.module.css';
import Image from 'next/image'
import UserImage from '../../public/user.svg';

interface Props extends React.HTMLAttributes<HTMLElement> {
    title: string;
    value: number;
}

export const Element = ({...props}: Props) => {
    return <div className={style.element}>
        <div className={style.icon}>
            <Image width={16} height={16}  alt="" src={UserImage}/>
        </div>
        <div className={style.content}>
            <div className={style.title}>{props.title}</div>
            <div className={style.value}>{props.value}</div>
        </div>
    </div>
};
