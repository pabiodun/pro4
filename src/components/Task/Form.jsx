import React from "react"	 
 	import TaskList from "./Tasklist";
 	import axios from 'axios';
 	import { NotificationContainer, NotificationManager } from 'react-notifications';

 	class Form extends React.Component {
    state = {
    taskList: [{ index: Math.random(), projectName: "", task: "", taskNotes: "", taskStatus: "" }],
 	date: "",
 	description: "",
 	}
 	 
 	handleChange = (e) => {
 	if (["projectName", "task", "taskNotes", "taskStatus"].includes(e.target.name)) {
 	let taskList = [...this.state.taskList]
 	taskList[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
        this.setState({ [e.target.name]: e.target.value })
        }
        }
        addNewRow = (e) => {
        this.setState((prevState) => ({
        taskList: [...prevState.taskList, { index: Math.random(), projectName: "", task: "", taskNotes: "", taskStatus: "" }],
        }));
        }
         
        deteteRow = (index) => {
        this.setState({
        taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
        });
        // const taskList1 = [...this.state.taskList];
        // taskList1.splice(index, 1);
        // this.setState({ taskList: taskList1 });
        }
        handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.date==='' || this.state.description==='')
        {
        NotificationManager.warning("Please Fill up Required Field . Please check Task and Date Field");
        return false;
        }
        for(var i=0;i<this.state.taskList.length;i++)
        {
        if(this.state.taskList[i].projectName==='' || this.state.taskList[i].task==='')
        {
        NotificationManager.warning("Please Fill up Required Field.Please Check Project name And Task Field");
        return false;
        }
        }
        let data = { formData: this.state, userData: localStorage.getItem('user') }
        axios.defaults.headers.common["Authorization"] = localStorage.getItem('token');
        axios.post("http://localhost:9000/api/task", data).then(res => {
        if(res.data.success) NotificationManager.success(res.data.msg);
        }).catch(error => {
        if(error.response.status && error.response.status===400)
        NotificationManager.error("Bad Request");
        else NotificationManager.error("Something Went Wrong");
        this.setState({ errors: error })
        });
        }
        clickOnDelete(record) {
        this.setState({
        taskList: this.state.taskList.filter(r => r !== record)
        });
        }
        render() {
        let { taskList } = this.state//let { notes, date, description, taskList } = this.state
        return (
        <div className="content">
        <NotificationContainer/>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
        <div className="row" style={{ marginTop: 20, width: 950 }}>
        
        <div className="col-sm-10">
        
        
       
       
        <table className="table">
        <thead>
        <tr>
        <th className="required" >Project Name</th>
        <th className="required" >Task</th>
        <th>Notes</th>
        <th>Status</th>
        </tr>
        </thead>
        <tbody>
        <TaskList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} taskList={taskList} />
        </tbody>
        
       
        <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
        
        
        </table>
        <div className="card-footer text-center">
        <button type="submit" className="btn btn-danger text-center"  style={{marginLeft:'-90px', width:'100px'}}>NEXT</button>
        <button type="submit" className="btn btn-danger text-center" style={{marginLeft:'30px'}} >PREVIOUS</button>
        </div>
        
        
        
        </div>
        
        </div>
        </form>
        </div>
        )
        }
        }
        export default Form