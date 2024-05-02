export const sections= [{head:"To Do"},{head:"Doing"},{head:"Done"}]

export const selectArr = (head,tasks) =>{
   return tasks.filter((task)=>task.status===head)
}