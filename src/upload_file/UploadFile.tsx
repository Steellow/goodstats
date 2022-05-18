import React, { Dispatch, SetStateAction } from "react";
import { AddButton } from "./AddButton";

interface Props {
    setFile: Dispatch<SetStateAction<any>>; // TODO not any
}

export const UploadFile: React.FC<Props> = ({ setFile }) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setFile(e?.target?.files![0]);

    return (
        <div className="flex h-screen">
            <div className="bg-gray-800 h-32 w-72 rounded-xl m-auto">
                <div className="flex ml-8 items-center h-32 text-white">
                    <AddButton {...{ inputRef }} />
                    <div className="flex flex-col ml-4 items-start">
                        <h2 className="text-xl font-bold">Drag to upload</h2>

                        <input
                            type="file"
                            id="fileUpload"
                            className="hidden"
                            ref={inputRef}
                            {...{ onChange }}
                        />
                        <label
                            htmlFor="fileUpload"
                            className="ml-0 underline hover:text-red-300 transition-all cursor-pointer"
                        >
                            Or click to select
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};
