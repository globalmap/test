import React, { useState } from 'react';
import CSVReader from 'react-csv-reader';
import { Button } from '@material-ui/core'
import Table from '../../components/Table/Table';
    
const UploadReader: React.FC = () => {
    const [fileData, setFileData] = useState<object[] | null>(null);

    const  handleOnFileLoad = (data: any, fileInfo: any) => {
        const {name: fileName, size} = fileInfo;
        const fileSize = (size / 1000).toFixed(2);
        const fileNameAndSize = `${fileName} - ${fileSize}KB`;
        document.querySelector('.file-name')!.textContent = fileNameAndSize;

        data.pop()

        setFileData(data)
    }

    const handleRemove = () => {
        setFileData(null)
        const file = document.getElementById('react-csv-reader-input') as HTMLInputElement;
        file.value ='';
        document.querySelector('.file-name')!.textContent = '';
    }

    

    return (
        <div>
            <div className='buttons-container' >
                <CSVReader
                    cssClass="file-input"
                    cssInputClass="file"
                    label={ <> Select file <p className="file-name"></p></>}
                    parserOptions={{ header: true }}
                    onFileLoaded={handleOnFileLoad}
                />

                <Button
                    variant="contained"
                    color="secondary"
                    disabled={fileData === null ? true : false}
                    onClick={handleRemove}
                >
                    Remove
                </Button>
            </div>

            {fileData !== null 
                ? <Table
                    data={fileData}
                    keys={fileData.length > 0 ? Object.keys(fileData[0]) : []}
                  /> 
                : null
            }
            
        </div>
    )
}

export default UploadReader;