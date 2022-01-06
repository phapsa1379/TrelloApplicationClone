import React from 'react';
import style from './EachTasks.module.css';


class EachTasks extends React.Component
{



    render()
    {
        const {taskTitle,taskDescription,tasksStartDate,tasksEndDate,tasksId}=this.props;

        return(
            <div className={style.eachTasksBox} >
                <div className={style.eachTasksHeader}>
                    <div className={style.eachTasksHeaderTitle}>{taskTitle}</div>
                    <div className={style.eachTasksHeaderClose}><i  className={`fas fa-window-close ${style.closeIcon}`}
                    onClick={(e)=>
                    {
                        this.props.onTransferTaskToApp({title:taskTitle,description:taskDescription,startDate:tasksStartDate,endDate:tasksEndDate,status:-1,id:tasksId});

                    }}></i></div>
                </div>
                <div className={style.eachTasksDescription}>
                    {taskDescription}
                </div>
                <div className={style.eachTasksDate}>
                    <div className={style.eachTasksDateStart}><span className={style.eachTasksDateStartText}>Start : </span>{tasksStartDate}</div>
                    <div className={style.eachTasksDateEnd}><span className={style.eachTasksDateEndText}>End : </span>{tasksEndDate}</div>
                </div>
                <div className={style.eachTasksStatus}>
                    <div className={style.eachTasksStatusTasks} onClick={(e)=>
                    {

                        this.props.onTransferTaskToApp({title:taskTitle,description:taskDescription,startDate:tasksStartDate,endDate:tasksEndDate,status:0,id:tasksId});

                    }}><i className="fas fa-minus"></i></div>
                    <div className={style.eachTasksStatusDoing} onClick={(e)=>
                    {

                      this.props.onTransferTaskToApp({title:taskTitle,description:taskDescription,startDate:tasksStartDate,endDate:tasksEndDate,status:1,id:tasksId});

                    }}><i className="fas fa-tasks"></i></div>
                    <div className={style.eachTasksStatusDone}  onClick={(e)=>
                    {

                        this.props.onTransferTaskToApp({title:taskTitle,description:taskDescription,startDate:tasksStartDate,endDate:tasksEndDate,status:2,id:tasksId});

                    }}><i className="fas fa-check"></i></div>
                </div>
            </div>

        );
    }

}


export default EachTasks;