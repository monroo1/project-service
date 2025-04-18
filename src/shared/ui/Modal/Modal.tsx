import React, { ReactNode, RefObject } from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";
import { ArrowButton } from "../ArrowButton/ArrowButton";
import { Icon } from "../Icon";

import CloseIcon from "../../assets/icons/Close.svg"

interface IModalProps {
    onClose: () => void;
    children: ReactNode;
    isOpen: boolean;
}

export const Modal = ({ onClose, children, isOpen}: IModalProps) => {
    const handleCloseClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = isOpen ? ( 
        <div className="modal-overlay" onClick={handleCloseClick}>
            <Icon className="closeIcon" Svg={CloseIcon} />
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    ) : null

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root") as HTMLElement
    );
};
