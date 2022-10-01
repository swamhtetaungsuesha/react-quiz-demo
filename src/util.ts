export const sortingAnswer=(answer:any[])=>{
   return [...answer].sort(()=>Math.random()-0.5)
}