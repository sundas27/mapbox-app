import React from 'react';
import Papa from 'papaparse';

import { convertAddressToLatLong } from '../../utils/geocodeLocation';
import { ILocation } from '../../interfaces';

interface IUploadFileProps {
  setLocations: (locations: ILocation[]) => void;
}

function UploadFile({ setLocations } : IUploadFileProps) {

    const handleFileUpload = async (event : React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            return;
        }

        Papa.parse(event.target.files[0], {
          header: true,
          skipEmptyLines: true,
          complete: async (parsedFile : any) => {
            let latLongAddresses = await convertAddressToLatLong(parsedFile?.data);
            setLocations(latLongAddresses);
          },
          
        });
      };

    return (
        <input
            type="file"
            name="file"
            onChange={handleFileUpload}
            accept={process.env.NEXT_PUBLIC_FILE_TYPE}
            style={{ display: "block", margin: "10px auto" }}
        />
    )
}

export default UploadFile;