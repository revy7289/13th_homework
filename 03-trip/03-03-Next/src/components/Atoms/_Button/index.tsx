"use client";

import { BtnStyle } from "@/commons/styles/styles";

export default function Button({ ...props }) {
    const { label, onClick, disabled } = props;

    return (
        <>
            <button style={BtnStyle} onClick={onClick} disabled={disabled}>
                {label}
            </button>
        </>
    );
}