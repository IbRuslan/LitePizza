import React from 'react';

import s from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
    return (
        <div className={s.root}>
            <h1 className={s.message}>Ничего не найдено😕</h1>
        </div>
    );
};
