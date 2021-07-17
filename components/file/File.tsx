import React from 'react';
import style from './File.module.css';
import Image from 'next/image'
import FileImage from '../../public/file.svg';

interface Props extends React.HTMLAttributes<HTMLElement> {
    title: string;
}

export const File = ({...props}: Props) => {
    return <div className={style.container}>
        <div className={style.icon}>
            <Image src={FileImage}/>
        </div>
        <div className={style.title}>{props.title}</div>
    </div>
};
