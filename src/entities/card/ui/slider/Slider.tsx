"use client";
import { memo, useRef } from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IImage } from "@/shared/api/cards/types";
import cls from "./Slider.module.scss";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Modal } from "@/shared/ui/Modal";

interface SliderProps {
    images: IImage[];
    className?: string;
    isOpen: boolean;
    handleChangeVisibility: () => void;
}

export const Slider = memo((props: SliderProps) => {
    const { className, images, isOpen, handleChangeVisibility } = props;

    return (
        <Modal isOpen={isOpen} onClose={handleChangeVisibility} >  
                    <Swiper
                        modules={[A11y, Navigation, Pagination]}
                        spaceBetween={40}
                        pagination={{
                            clickable: true
                        }}
                        slidesPerView={1}
                        className={cls.swiperCard}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide
                                key={image.id}
                                virtualIndex={index}
                                className={cls.slideCard}
                            >
                                    <img
                                        src={
                                            process.env.NEXT_PUBLIC_IMAGE_URL +
                                            image.attributes.url
                                        }
                                        alt={image.attributes.name}
                                    />
                            </SwiperSlide>
                        ))}
                    </Swiper>
        </Modal>
    );
});
