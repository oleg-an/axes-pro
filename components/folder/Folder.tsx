import React, {useState} from 'react';
import style from './Folder.module.css';
import ArrowImage from '../../public/arrow.svg';
import ToggleImage from '../../public/toggle.svg';

import Folder1Image from '../../public/folder1.svg';
import Folder12Image from '../../public/folder2.svg';

import Image from 'next/image'

interface Props extends React.HTMLAttributes<HTMLElement> {
    title: string;
}

export const Folder = ({...props}: Props) => {
    const [opened, setOpened] = useState(true);

    return <div className={style.folder}>
        <div className={style.container + ' ' + style.clickable} onClick={() => setOpened(x => !x)}>
            <div className={style.container}>
                <div className={style.toggleIcon}>
                    <Image alt="" src={ToggleImage}/>
                </div>
                <div className={style.folder2Icon}>
                    <Image alt="" src={Folder12Image}/>
                </div>
            </div>
            <div className={style.title}>{props.title}</div>
        </div>
        {opened && <>
            {React.Children.map(props.children as any, (child) => {
                return (
                    <div className={style.children}>
                        {child}
                    </div>
                );
            })}
        </>}
    </div>
};
