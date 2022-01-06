import React from 'react';
import style from './Doing.module.css';
import EachTasks from "./EachTasks";
import unicArrayOfObject from "./unicArrayOfObject";



class Doing extends React.Component
{



    transferTaskToAppComponent=(data)=>
    {

       this.props.getDataFromChild(data);
    }

    render()
    {
        let {inDoing}=this.props;


        return(
            <div className={style.tasksContainer}>
                <div className={style.tasksTitle}>Doing</div>
                <div className={style.tasksBody}>
                    {
                        inDoing.length?
                            inDoing.map((item)=>
                            {
                                return(<EachTasks onTransferTaskToApp={this.transferTaskToAppComponent} key={item.id} taskTitle={item.title} taskDescription={item.description} tasksStartDate={item.startDate} tasksEndDate={item.endDate} tasksId={item.id} /> )
                            }):<></>
                    }

                </div>

            </div>
        );
    }
}


export default Doing;