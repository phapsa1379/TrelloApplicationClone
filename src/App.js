import React from 'react';
import './App.css';
import Form from './Form';
import Tasks from './Tasks';
import Doing from './Doing';
import Done from './Done';
import unicArrayOfObject from "./unicArrayOfObject";

let allTasks=[],recentTasks=JSON.parse(localStorage.getItem('allTasksStorage'));
let index;


class App extends React.Component
{

    state={
        tasks : unicArrayOfObject(recentTasks,allTasks)
    }



    transferDataFromFormToTasks=(data)=>
    {
        this.setState({...this.state,tasks:[...this.state.tasks,data]}
        ,
            ()=>
            {
                allTasks=this.state.tasks;
                allTasks=unicArrayOfObject(recentTasks,allTasks);
                localStorage.setItem('allTasksStorage',JSON.stringify(allTasks));

            }
        );
    }


    getTasksToDoOperationsOnThem=(data)=>
    {
        index =-1;

        this.state.tasks.forEach((item,ind)=>
        {
            if(item.id===data.id)
            {
                index=ind;
            }
        })


        if (index > -1) {
            if(data.status===-1)
            {
                this.state.tasks.splice(index,1);
            }
            else
            {
                this.state.tasks[index]=data;
            }

            this.setState({...this.state,...this.state.tasks}
                ,
                ()=>
                {
                    allTasks=this.state.tasks;
                    allTasks=unicArrayOfObject(recentTasks,allTasks);
                    recentTasks=allTasks;
                    localStorage.setItem('allTasksStorage',JSON.stringify(allTasks));

                }
            );
        }
        else
        {
            console.log(data);
        }
    }



    filterBaseStatus(statusNumber)
    {
        return this.state.tasks.filter((item)=>item.status===statusNumber);
    }


    render()
    {


        return (
            <div className="allComponnents">
                <Form onSub={this.transferDataFromFormToTasks} />
                <div className="operatingPart">
                    <Tasks tasks={this.filterBaseStatus(0)} getDataFromChild={this.getTasksToDoOperationsOnThem}  />
                    <Doing inDoing={this.filterBaseStatus(1)} getDataFromChild={this.getTasksToDoOperationsOnThem}  />
                    <Done  inDone={this.filterBaseStatus(2) } getDataFromChild={this.getTasksToDoOperationsOnThem}/>
                </div>
            </div>
        );
    }


}

export default App;
