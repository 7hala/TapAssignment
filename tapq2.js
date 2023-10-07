let arrOfnum=[7,1,3,4,50,5];
let target=9;
let indices=[];
for(let i=0;i<arrOfnum.length;i++){
    const complemant=target-arrOfnum[i];
    if(arrOfnum.includes(complemant)){
        indices.push(i);
        indices.push(arrOfnum.indexOf(complemant));
     console.log(indices);
     break; 
    }
}
if(indices.length<1)
console.log("there is no 2 number in the array that sum of these number ="+target);