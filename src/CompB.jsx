import React from 'react';


const CompB=(props)=>{
    return(
        <>
       <div className="container">
           <div className="row">
           <div className='row border mb-2 text-center p-1'>
            <table class="table table-bordered table-responsive table-hover">
                <tbody>
                    <tr>
                    {
                    props.location.data.rows.map((val)=>{
                        return(
                            <>
                                <tr>
                                    <td>{val[0]}</td>
                                    <td>{val[1]}</td>
                                    <td>{val[2]}</td>
                                    <td>{val[3]}</td>
                                    <td>{val[4]}</td>
                                    {
                                        val[5]<-20 ? <td className="bg-success">{val[5]}</td> : <td>{val[5]}</td>
                                    }
                                    <td>{val[6]}</td>
                                    {
                                        val[7]< 80 ? <td className="bg-danger">{val[7]}</td> : <td>{val[7]}</td>
                                    }
                                    {
                                        val[8]<= 0.0025 ? <td className="bg-success">{val[7]}</td> : <td>{val[7]}</td>
                                    }
                                    <td>{val[9]}</td>
                                    <td>{val[10]}</td>
                                    <td>{val[11]}</td>
                                    <td>{val[12]}</td>
                                </tr>                                
                            </>
                        )
                    })
                    }
                    </tr>
                </tbody>
                </table>
            
        </div>
           </div>
       </div>
        
        </>
    )
}
export default CompB;