"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, type ElementRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const dialogRef = useRef<ElementRef<"dialog">>(null);

    useEffect(() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }
    }, []);

    function onDismiss() {
        router.back();
    }

    return createPortal(
        <dialog
            ref={dialogRef}
            className="m-0 h-screen w-screen dark:bg-background/90 bg-background/60 "
            onClose={onDismiss}
        >
            {children}
            {/* <button onClick={onDismiss} className="close-button" /> */}
        </dialog>,
        document.getElementById("modal-root")!,
    );
}