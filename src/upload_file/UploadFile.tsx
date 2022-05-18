import React from "react";
import { AddButton } from "./AddButton";

interface Props {}

export const UploadFile: React.FC<Props> = () => {
    return (
        <div className="flex h-screen">
            <div className="bg-gray-800 h-32 w-72 rounded-xl m-auto">
                <div className="flex ml-8 items-center h-32 text-white">
                    <AddButton />
                    <div className="flex flex-col ml-4 items-start">
                        <h2 className="text-xl font-bold">Drag to upload</h2>
                        <button className="ml-0 underline hover:text-red-300 transition-all">
                            Or click to select
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
