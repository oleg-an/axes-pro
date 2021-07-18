import React, {useState} from 'react';
import style from './Folder1.module.css';
import ArrowImage from '../../public/arrow.svg';

import Folder1Image from '../../public/folder1.svg';
import Image from 'next/image'
import {FolderProps} from '../folder-props.model';

export const Folder1 = ({...props}: FolderProps) => {
    const [childrenShown, setChildrenShown] = useState(true);
    const hasChildren = !!React.Children.count(props.children);

    return <div className={style.folder}>
        {hasChildren && <div onClick={() => setChildrenShown(x => !x)}>
            <div className={style.arrowIcon}>
                <div style={{transform: childrenShown ? 'rotate(0)' : 'rotate(270deg)'}}>
                    <Image alt="" src={ArrowImage}/>
                </div>
            </div>
        </div>}
        <div>
            <div className={style.titleBlock} onClick={() => setChildrenShown(x => !x)}>
                <div className={style.folder1Icon}>
                    <Image alt="" src={Folder1Image}/>
                </div>
                <div className={style.title}>{props.title}</div>
            </div>
            {childrenShown && <div style={{paddingLeft: '10px'}}>
                {React.Children.map(props.children as any, (child) => {
                    return (<div className={style.children}>
                        {child}
                    </div>);
                })}
            </div>}
        </div>
    </div>
};
