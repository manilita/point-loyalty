//  import required libraries
import React from "react";
import ReactFileReader from "react-file-reader";
import Papa from 'papaparse';

function TransactionList() {
  const uploadFile = (files) => {
    // Using papaparse to parse the CSV file
    Papa.parse(files[0], {
      complete: function(results) {
	        // results contain data; users can use the data for some operations.
            console.log("Finished:", results.data);
      }
    });
  };
  return (
    <>
      <h3> Upload a CSV file to read using Papaparse</h3>
      {/* creating the file upload button to upload CSV file */}
      <ReactFileReader handleFiles={uploadFile} fileTypes={".csv"}>
        <button className="btn">Upload</button>
      </ReactFileReader>
    </>
  );
}
export default TransactionList;