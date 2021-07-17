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
            <Image alt="" src={ArrowImage}/>
        </div>}
        {!isRoot && hasChildren && <div className={style.toggleIcon + ' ' + style.clickable}
                                        onClick={() => setOpened(x => !x)}>
            <Image alt="" src={ToggleImage}/>
        </div>}

        <div style={{width: '100%'}}>
            <div className={style.container + ' ' + style.clickable} onClick={() => setOpened(x => !x)}>
                {isRoot && <div className={style.folder1Icon}>
                    <Image alt="" src={Folder1Image}/>
                </div>}
                {!isRoot && <div className={style.folder2Icon}>
                    <Image alt="" src={Folder2Image}/>
                </div>}
                <div className={style.title}>{props.title}</div>
            </div>

            {opened && <>{React.Children.map(props.children as any, (child) => {
                return (<div className={style.children}>
                    {child}
                </div>);
            })}
            </>}
        </div>
    </div>
};
