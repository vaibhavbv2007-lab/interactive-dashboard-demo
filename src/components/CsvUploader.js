import React, { useState } from 'react';

const CsvUploader = () => {
    const [csvData, setCsvData] = useState([]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target.result;
                const lines = text.split('\n');
                const result = lines.map(line => line.split(','));
                setCsvData(result);
            };
            reader.readAsText(file);
        }
    };

    return (
        <div>
            <input type="file" accept="text/csv" onChange={handleFileChange} />
            <h3>Uploaded CSV Data:</h3>
            <pre>{JSON.stringify(csvData, null, 2)}</pre>
        </div>
    );
};

export default CsvUploader;