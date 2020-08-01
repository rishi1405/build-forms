import React from 'react';
import ReactDOM from 'react-dom';
import {useFormik} from 'formik';
import * as yup from 'yup';

//Form Validation Code without using any Package Start
//   const validateEmployee=empData=>{
//   const errors={};

//   if(!empData.Name){
//     errors.Name='Please Enter UserName';
//   }
//   else if(empData.Name.length>20){
//     errors.Name='Name cannot Exceed 20 Characters';
//   }

//   if(!empData.Location){
//     errors.Location='Please Enter Location';
//   }

//   if(!empData.Email){
//     errors.Email='Please Enter Email';
//   }
//   else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.Email)){
//     errors.Email='Please Enter Correct EmailId';
//   }
//   return errors;
// }
///End of Validation code 

const EmployeeComponent=()=>{

  const formik=useFormik({
    initialValues:{
      Id:'',
      Name:'',
      Location:'',
      Salary:'',
      Email:''
    },
    
    //validate:validateEmployee, calling of validation code function

    validationSchema:yup.object({
        Name:yup.string().max(20,'Name cannot Exceed 20 Characters').required('Please Enter UserName'),
        Location:yup.string().required('Please Enter Location'),
        Email:yup.string().email('Invalid Email Address').required('Please Enter Location')
    }),

    onSubmit:values=>{alert(JSON.stringify(values))}
  });

  return(
    <div>
        <h2>New Employee Form....</h2>
        <form onSubmit={formik.handleSubmit}>
          {/* <p><label>Employee Id: </label>
          <input type="text" name="Id" id="Id" value={formik.values.Id} 
          onChange={formik.handleChange} ></input></p>
          <p><label>Employee Name:</label>
          <input type="text" name="Name" id="Name" value={formik.values.Name} 
          onChange={formik.handleChange} ></input>
          {formik.touched.Name && formik.errors.Name?<span style={{color:'red'}}>{formik.errors.Name}</span>:null}</p>
          <p><label>Employee Location: </label>
          <input type="text" name="Location" id="Location" value={formik.values.Location} 
          onChange={formik.handleChange} ></input>
{formik.touched.Location && formik.errors.Location?<span style={{color:'red'}}>{formik.errors.Location}</span>:null}</p>
          <p><label>Employee Salary: </label>
          <input type="text" name="Salary" id="Salary" value={formik.values.Salary} 
          onChange={formik.handleChange} ></input></p>
          <p><label htmlFor="Email">EmailId: </label>
          <input type="text" name="Email" id="Email" value={formik.values.Email} onChange={formik.handleChange}></input>
  {formik.touched.Email && formik.errors.Email?<span style={{color:'red'}}>{formik.errors.Email}</span>:null}</p>
          <button type="submit">Create</button> */}
          <p>
            <label htmlFor="Id">Employee Id:</label>
            <input type="text" name="Id" {...formik.getFieldProps("Id")}></input>
          </p>
          <p>
            <label htmlFor="Name">Employee Name:</label>
            <input type="text" name="Name" {...formik.getFieldProps("Name")}></input>
            {formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}}>{formik.errors.Name}</span>:null}
          </p>
          <p>
            <label htmlFor="Location">Employee Location:</label>
            <input type="text" name="Location" {...formik.getFieldProps("Location")}></input>
            {formik.touched.Location && formik.errors.Location ? <span style={{color:'red'}}>{formik.errors.Location}</span>:null}
          </p>
          <p>
            <label htmlFor="Salary">Employee Salary:</label>
            <input type="text" name="Salary" {...formik.getFieldProps("Salary")}></input>
          </p>
          <p>
            <label htmlFor="Email">Employee Email:</label>
            <input type="text" name="Email" {...formik.getFieldProps("Email")}></input>
            {formik.touched.Email && formik.errors.Email ? <span style={{color:'red'}}>{formik.errors.Email}</span>:null}
          </p>
          <button type="submit">Create</button>
        </form>
    </div>
  )
}
const element=<EmployeeComponent></EmployeeComponent>
ReactDOM.render(element,document.getElementById('root'));

///Below Code is used without using Formik package
// class EmployeeComponent extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       employee:{
//         Id:'',
//         Name:'',
//         Location:'',
//         Salary:''
//       }
//     };
//   }
//   changeHandler=e=>{
//     const name=e.target.name;
//     const value=e.target.value;
//     this.setState({employee:{
//       ...this.state.employee,
//       [name]:value
//     }});
//   }

//   onCreateEmployee=()=>{
//     console.log(this.state.employee);
//   }

//   render(){
//     return(
//         <div>
//           <h2>New Employee Form</h2>
//           <form>
//             <p><label>Employee Id:<input type="text" name="Id" 
//               value={this.state.employee.Id} onChange={this.changeHandler}></input></label></p>
//             <p><label>Employee Name:<input type="text" name="Name" 
//               value={this.state.employee.Name} onChange={this.changeHandler}></input></label></p>
//             <p><label>Employee Location:<input type="text" name="Location" 
//               value={this.state.employee.Location} onChange={this.changeHandler}></input></label></p>
//             <p><label>Employee Salary:<input type="text" name="Salary" 
//               value={this.state.employee.Salary} onChange={this.changeHandler}></input></label></p>
//           </form>
//           <button onClick={this.onCreateEmployee}>Change</button>
//         </div>
//     )
//   }
// }

// const element=<EmployeeComponent></EmployeeComponent>
// ReactDOM.render(element,document.getElementById('root'));
////Upto this without Formik package
/////////////////////////////

