import React from 'react';
import style from './Tasks.module.css';
import EachTasks from "./EachTasks";
import unicArrayOfObject from "./unicArrayOfObject";



class Tasks extends React.Component
{

    transferTaskToAppComponent=(data)=>
    {
        this.props.getDataFromChild(data);
    }


    render()
    {
      let {tasks}=this.props;


        return(
            <div className={style.tasksContainer}>
                <div className={style.tasksTitle}>Tasks</div>
                <div className={style.tasksBody}>
                    {
                        tasks.length?
                        tasks.map((item)=>
                        {
                            if(item.status===0)
                        return(<EachTasks onTransferTaskToApp={this.transferTaskToAppComponent} key={item.id} taskTitle={item.title} taskDescription={item.description} tasksStartDate={item.startDate} tasksEndDate={item.endDate} tasksId={item.id}  /> )
                        }):<></>
                    }

                </div>

            </div>
        );
    }
}


export default Tasks;