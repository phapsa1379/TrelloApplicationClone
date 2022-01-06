import React from 'react';
import style from './Form.module.css';


let numberOfTasks=JSON.parse(localStorage.getItem('numberOfTasksStorage'));
if(!numberOfTasks)
{
    numberOfTasks=0;
}



class Form extends React.Component
{

    constructor(props) {
        super(props);
    }


    state={
        titleValue:"",
        endDateValue:"",
        descriptionValue:"",

    }

    submitButton=(e)=>
    {
        numberOfTasks++;
        localStorage.setItem('numberOfTasksStorage',JSON.stringify(numberOfTasks));
        e.preventDefault();
        let now=new Date();
        this.setState({
                ...this.state,
                titleValue:'',
                endDateValue:'',
                descriptionValue:'',

            }
        );

            let endDateNewFormat=e.target.date.value;
            endDateNewFormat=endDateNewFormat.replace('-','/');
            endDateNewFormat=endDateNewFormat.replace('-','/');



        this.props.onSub({
            id:numberOfTasks-1,
            title:e.target.title.value,//get value of input form with title name
            description:e.target.description.value,
            startDate:now.getFullYear()+"/"+now.getMonth()+1+"/"+now.getDate(),
            endDate:endDateNewFormat,
            status:0
        });

    }

    render() {
        return (

                <form onSubmit={this.submitButton}>
                    <button type="submit" name="submit" className={style.subBtn}  >Submit</button>
                    <input required onChange={(e)=>{this.setState({...this.state,titleValue:e.target.value})}}  value={this.state.titleValue} type="text" name="title" className={style.inputTitle} placeholder="Enter title" />
                    <input required onChange={(e)=>{this.setState({...this.state,endDateValue:e.target.value.toLocaleString()})}} value={this.state.endDateValue} type="date" className={style.inputDate} name="date" placeholder="Enter end date" />
                    <textarea required onChange={(e)=>{this.setState({...this.state,descriptionValue:e.target.value})}} value={this.state.descriptionValue} placeholder="Enter description" name="description" className={style.textArea}>

                    </textarea>

                </form>

        );
    }


}


export default Form;