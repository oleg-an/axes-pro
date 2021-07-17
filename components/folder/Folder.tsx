import React, {useEffect, useRef, useState} from 'react';
import style from './Folder.module.css';
import ArrowImage from '../../public/arrow.svg';
import ToggleImage from '../../public/toggle.svg';

import Folder1Image from '../../public/folder1.svg';
import Folder2Image from '../../public/folder2.svg';

import Image from 'next/image'

interface Props extends React.HTMLAttributes<HTMLElement> {
    title: string;
}

export const Folder = ({...props}: Props) => {
    const [opened, setOpened] = useState(true);
    const [isRoot, setIsRoot] = useState(true);
    const hasChildren = !!React.Children.count(props.children);
    const ref = useRef<HTMLDivElement>();

    useEffect(() => {
        setIsRoot(!ref.current?.parentElement?.classList.contains(style.children));
    }, []);

    // @ts-ignore
    return <div ref={ref} className={style.folder}>
        {isRoot && <div className={style.toggleIcon}
                        onClick={() => setOpened(x => !x)}>
            <Image width={5} height={10} alt="" src={ArrowImage}/>
        </div>}
        {!isRoot && hasChildren && <div className={style.toggleIcon + ' ' + style.clickable}
                                        onClick={() => setOpened(x => !x)}>
            <Image width={12} height={8} alt="" src={ToggleImage}/>
        </div>}

        <div>
            <div className={style.container + ' ' + style.clickable} onClick={() => setOpened(x => !x)}>
                {isRoot && <div className={style.folder1Icon}>
                    <Image width={12} height={10} alt="" src={Folder1Image}/>
                </div>}
                {!isRoot && <div className={style.folder2Icon}>
                    <Image width={20} height={16} alt="" src={Folder2Image}/>
                </div>}
                <div className={style.title}>{props.title}</div>
            </div>

            <div style={{display: opened ? 'block' : 'none'}}>
                {React.Children.map(props.children as any, (child) => {
                    return (<div className={style.children}>
                        {child}
                    </div>);
                })}
            </div>
        </div>
    </div>
};
