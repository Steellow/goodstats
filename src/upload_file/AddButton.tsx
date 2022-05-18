import React, { RefObject } from "react";

interface Props {
    inputRef: RefObject<HTMLInputElement | null>;
}

export const AddButton: React.FC<Props> = ({ inputRef }) => {
    return (
        <button
            className="h-10 w-10 bg-red-600 hover:bg-red-500 transition-all rounded-full flex "
            onClick={() => inputRef?.current?.click()}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 m-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                />
            </svg>
        </button>
    );
};
