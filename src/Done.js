import React from 'react';
import style from './Done.module.css';
import EachTasks from "./EachTasks";
import unicArrayOfObject from "./unicArrayOfObject";



class Done extends React.Component
{

    transferTaskToAppComponent=(data)=>
    {

        this.props.getDataFromChild(data);
    }


    render()
    {
        let {inDone}=this.props;


        return(
            <div className={style.tasksContainer}>
                <div className={style.tasksTitle}>Done</div>
                <div className={style.tasksBody}>
                    {
                        inDone.length?
                            inDone.map((item)=>
                            {
                                return(<EachTasks onTransferTaskToApp={this.transferTaskToAppComponent} key={item.id} taskTitle={item.title} taskDescription={item.description} tasksStartDate={item.startDate} tasksEndDate={item.endDate} tasksId={item.id} /> )
                            }):<></>
                    }

                </div>

            </div>
        );
    }
}


export default Done;