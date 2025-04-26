"use client"
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { X } from "lucide-react";

interface BaseModalProps {
    isOpen: boolean;
    closeModal: () => void;
    title?: string;
    children: ReactNode;
    showCloseIcon?: boolean;
    width?: string;
    closeOnOutsideClick?: boolean
}

const BaseModal: React.FC<BaseModalProps> = ({
                                                 isOpen,
                                                 closeModal,
                                                 title,
                                                 children,
                                                 showCloseIcon = true,
                                                 width,
                                                 closeOnOutsideClick = true
                                             }) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50"
                    onClose={closeOnOutsideClick ? closeModal : () => {}}
                    // onClose={closeModal}
            >
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
                <div className="fixed inset-0 overflow-y-auto flex items-center justify-center p-4">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {/*<div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-8 relative">*/}
                            <div className={`w-full ${width} bg-white rounded shadow-lg p-8 relative`}>
                                {/*{showCloseIcon && (*/}
                                    <button
                                        onClick={closeModal}
                                        className="cursor-pointer absolute top-4 right-4 rounded-3xl border p-1 border-orange-500 text-gray-600 hover:text-gray-900"
                                        aria-label="Close modal"
                                    >
                                        <X size={24}/>
                                    </button>
                                {/*)}*/}
                                {title && (
                                    <Dialog.Title className="text-xl font-bold mb-4 text-center ">
                                        {title}
                                    </Dialog.Title>
                                )}
                                <div>
                                    {children}
                                </div>

                            </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default BaseModal;
