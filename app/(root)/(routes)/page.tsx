"use client";

import {useStoreModal} from "@/hooks/use-store-modal";
import {useEffect} from "react";

const SetupPage = () => {
    const onOpen = useStoreModal((state) => state.onOpen);
    const isOpen = useStoreModal((state) => state.isOpen);

    useEffect(() => {
        if (!isOpen) {
            onOpen();
        }
    }, [isOpen, onOpen]);

    return null; // return just for trigger the modal, due to this we don't have any exist markup
}

export default SetupPage;