import React, {ReactElement, useEffect, useRef, useState} from 'react';
import style from './Folder.module.css';
import ArrowImage from '../../public/arrow.svg';
import ToggleImage from '../../public/toggle.svg';

import Folder1Image from '../../public/folder1.svg';
import Folder2Image from '../../public/folder2.svg';

import Image from 'next/image'

let toggleIconBlock: ReactElement;
let folderIconBlock: ReactElement;

interface Props extends React.HTMLAttributes<HTMLElement> {
    title: string;
}

export const Folder = ({...props}: Props) => {
    const [childrenShown, setChildrenShown] = useState(true);
    const [isRootFolder, setIsRootFolder] = useState(true);
    const hasChildren = !!React.Children.count(props.children);
    const ref = useRef<HTMLDivElement>();

    useEffect(() => {
        setIsRootFolder(!ref.current?.parentElement?.classList.contains(style.children));
    }, []);

    if (isRootFolder) {
        toggleIconBlock = <div className={style.arrowIcon}>
            <div style={{transform: childrenShown ? 'rotate(90deg)' : 'rotate(360deg)'}}>
                <Image width={5} height={10} alt="" src={ArrowImage}/>
            </div>
        </div>;
        folderIconBlock = isRootFolder && <div className={style.folder1Icon}>
            <Image width={12} height={10} alt="" src={Folder1Image}/>
        </div>;
    } else {
        if (hasChildren) {
            toggleIconBlock = <div className={style.toggleIcon}>
                <div style={{transform: childrenShown ? 'rotate(0)' : 'rotate(270deg)'}}>
                    <Image width={12} height={8} alt="" src={ToggleImage}/>
                </div>
            </div>;
        }
        folderIconBlock = <div className={style.folder2Icon}>
            <Image width={20} height={16} alt="" src={Folder2Image}/>
        </div>;
    }

// @ts-ignore
    return <div ref={ref} className={style.folder}>
        <div onClick={() => setChildrenShown(x => !x)}>{toggleIconBlock}</div>
        <div>
            <div className={style.container} onClick={() => setChildrenShown(x => !x)}>
                {folderIconBlock}
                <div className={style.title}>{props.title}</div>
            </div>
            <div style={{display: childrenShown ? 'block' : 'none'}}>
                {React.Children.map(props.children as any, (child) => {
                    return (<div className={style.children}>
                        {child}
                    </div>);
                })}
            </div>
        </div>
    </div>
};
