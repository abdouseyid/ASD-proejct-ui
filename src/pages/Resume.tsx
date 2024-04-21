import React from 'react';
import pdfFile from '../assets/mdlmin.pdf';



const Resume: React.FC = () => {
    return (
        <div className="flex flex-col items-center pb-4">
            <div className="w-full h-screen bg-white rounded-lg shadow-md p-6 mt-2">
                <h1 className="text-2xl font-bold mb-4">Resume</h1>
                <div className="flex justify-center">
                    <iframe src={pdfFile} width="100%" height="100%" title="Resume PDF" style={{ margin: '1%', width: '100vw', height: '100vh', backgroundColor: 'white', borderRadius: '10px' }} />
                </div>
            </div>
        </div>
    );
};

export default Resume;
