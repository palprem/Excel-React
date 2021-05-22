import React from 'react';
import { ExcelRenderer} from 'react-excel-renderer';
import { useHistory } from "react-router-dom";

const CompA=()=>{
    const history = useHistory();
    const fileHandler = (event) => {
        let fileObj = event.target.files[0];
        ExcelRenderer(fileObj, (err, resp) => {
        if(err){
            console.log(err);            
        }
        else{
            history.push({
                pathname:"/CompB",
                data : resp
              });
        }
        });               
    }
    return(
        <>
        <div className="container">
            <div className="row text-center">
                <h1 className="text-danger">Enter Input As Excel File</h1>
                <input className="form-control" type="file" name="data" onChange={fileHandler}  />

            </div>
        </div>
        </>
    )
}
export default CompA;