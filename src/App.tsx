import React, { useState } from "react";
import { UploadFile } from "./upload_file/UploadFile";

const App: React.FC = () => {
    const [file, setFile] = useState<File | undefined>(undefined);

    return (
        <div className="bg-gray-900 min-h-screen">
            {file === undefined ? (
                <UploadFile {...{ setFile }} />
            ) : (
                <div className="text-white">{file?.name}</div>
            )}
        </div>
    );
};

export default App;
