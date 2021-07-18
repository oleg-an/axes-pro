import React, {useState} from 'react';
import style from './Folder2.module.css';
import ToggleImage from '../../public/toggle.svg';

import Folder2Image from '../../public/folder2.svg';
import Image from 'next/image'
import {FolderProps} from '../folder-props.model';

export const Folder2 = ({...props}: FolderProps) => {
    const [childrenShown, setChildrenShown] = useState(true);
    const hasChildren = !!React.Children.count(props.children);

    return <div className={style.folder}>
        {hasChildren && <div onClick={() => setChildrenShown(x => !x)}>
            <div className={style.toggleIcon}>
                <div style={{transform: childrenShown ? 'rotate(0)' : 'rotate(270deg)'}}>
                    <Image alt="" src={ToggleImage}/>
                </div>
            </div>
        </div>}
        <div>
            <div className={style.titleBlock} onClick={() => setChildrenShown(x => !x)}>
                <div className={style.folder2Icon}>
                    <Image alt="" src={Folder2Image}/>
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
