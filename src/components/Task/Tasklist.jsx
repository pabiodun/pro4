import React from "react"
 	const TaskList = (props) => {
 	return (
 	props.taskList.map((val, idx) => {
 	let category = `category-${idx}`, type = `type-${idx}`, OMV = `omv-${idx}`, FSV = `fsv-${idx}`, status = `status-${idx}`
 	return (
 	<tr key={val.index}>
 	<td style={{width: 170}}>
 	<select name="category" id={category} data-id={idx} className="form-control" >
 	<option value=""></option>
    <option value="lease/sale">Lease/Sale Agreement</option>
 	<option value="domiciliation">Domiciliation Of Proceeds</option>
 	<option value="cooperate">Cooperate Guarantee</option> 	
 	</select>
 	</td>
     <td style={{width: 100}}>
 	<select name="type" id={type} data-id={idx} className="form-control" >
    <option value=""></option>
 	<option value="pending">Pending</option>
 	<option value="In Progress">In progress</option>
 	<option value="Completed">Completed</option>
 	<option value="Hold">Hold</option>
 	</select>
 	</td>
 	<td style={{width: 100}}>
 	<input type="text" name="task" id={OMV} data-id={idx} className="form-control " />
 	</td>
 	<td style={{width: 100}}>
 	<textarea name="fsv" id={FSV} data-id={idx} className="form-control"></textarea>
 	</td>
 	<td>
 	<input type="text" name="status" id={status} data-id={idx} className="form-control " />
 	</td>
 	<td>
 	{
 	idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
 	: <button className="btn btn-danger" onClick={(() => props.delete(val))} ><i className="fa fa-minus" aria-hidden="true"></i></button>
 	}
 	</td>
 	</tr >
 	)
 	})
 	)
 	}
 	export default TaskList