import React, { ReactNode, RefObject, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { ArrowButton } from "../ArrowButton/ArrowButton";
import { Icon } from "../Icon";
import CloseIcon from "../../assets/icons/Close.svg";

import "./Modal.scss";

interface IModalProps {
    onClose: () => void;
    children: ReactNode;
    isOpen: boolean;
    navigationNext: RefObject<HTMLDivElement>;
    navigationPrev: RefObject<HTMLDivElement>;
}

export const Modal = ({
    onClose,
    children,
    isOpen,
    navigationNext,
    navigationPrev,
}: IModalProps) => {
    const handleCloseClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        e.preventDefault();
        onClose();
    };

    useEffect(() => {
        if (isOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";

            return () => {
                document.body.style.position = "";
                document.body.style.top = "";
                window.scrollTo(0, scrollY);
            };
        }
    }, [isOpen]);

    const modalContent = isOpen ? (
        <div className="modal-overlay" onClick={handleCloseClick}>
            <Icon className="closeIcon" Svg={CloseIcon} />
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div ref={navigationPrev} className="prev">
                    <ArrowButton fill />
                </div>
                <div ref={navigationNext} className="next">
                    <ArrowButton fill />
                </div>
                {children}
            </div>
        </div>
    ) : null;

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root") as HTMLElement,
    );
};
