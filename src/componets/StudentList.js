import React ,{useState} from "react";
import EnrollForm from "./EnrollForm";
import Student from "./Student";

export default function  StudentList(){

const[stdList,setStdList]=useState([]);
const addNewStudent=(NewStudent)=>{
    let updatedStdList=[NewStudent, ...stdList];
    console.log(updatedStdList);
    setStdList(updatedStdList);
}
return(
    <>
    <div className="row mt-5">
        <div className="col-md-6 ">
        <h5 className="mb-3">Add New Student</h5>
    <EnrollForm addNewStudent={addNewStudent}/>

        </div>
    <div className="col-md-6">
    <h5  className="mb-3">Enrolled Students List</h5>
    <Student stdList={stdList}/>

    </div>
    </div>
    </>
)

}