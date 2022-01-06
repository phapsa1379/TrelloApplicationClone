


function unicArrayOfObject(recent,tasks)
{


    if(tasks===null)
        tasks=[];

    if(JSON.stringify(recent)==="{}" || recent===null)
        recent=[];


    let flag=1;
    recent.forEach((item1,index1)=>
    {
        tasks.forEach((item2,index2)=>
        {
            if(item1.id===item2.id)
            {
                flag=0;
            }
        })

        if(flag)
        {
            tasks.push(item1);
        }
    flag=1;
    })

    return tasks;
}


export default unicArrayOfObject;