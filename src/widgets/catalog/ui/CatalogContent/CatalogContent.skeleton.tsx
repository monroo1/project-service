
import { memo } from "react";
import { AxiosResponse } from "axios";

import { Card } from "@/entities/card";
import { classNames } from "@/shared/lib/classNames/classNames";
import { IResponseGetCards } from "@/shared/api/cards";

import cls from "./CatalogContent.module.scss";


export const CatalogContentSkeleton = memo(() => {
    return (
        <div className={classNames(cls.CatalogContent)}>
            <div className={cls.skeletonItem}>
                <div className={cls.skeletonTitle} />
                <div className={cls.skeletonImage} />
                <div className={cls.skeletonButton} />
            </div>
            <div className={cls.skeletonItem}>
                <div className={cls.skeletonTitle} />
                <div className={cls.skeletonImage} />
                <div className={cls.skeletonButton} />
            </div>
            <div className={cls.skeletonItem}>
                <div className={cls.skeletonTitle} />
                <div className={cls.skeletonImage} />
                <div className={cls.skeletonButton} />
            </div>
            <div className={cls.skeletonItem}>
                <div className={cls.skeletonTitle} />
                <div className={cls.skeletonImage} />
                <div className={cls.skeletonButton} />
            </div>
            
        </div>
    );
});
