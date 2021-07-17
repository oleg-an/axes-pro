import React from 'react';
import style from './Folder.module.css';

interface Props extends React.HTMLAttributes<HTMLElement> {
    title: string;
}

export const Folder = ({...props}: Props) => {
    return <div>
        <div className={style.title}>{props.title}</div>
        {React.Children.map(props.children as any, (child) => {
            return (
                <div className={style.children}>
                    {child}
                </div>
            );
        })}
    </div>
};
