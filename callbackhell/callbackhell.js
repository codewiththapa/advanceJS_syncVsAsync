/* CallbackHell : is a nested callbacks stacked below one another froming a pyramid structure called "pyramid of Doom"..... which cause difficult to understand and  hard to manage the code.....  in Asynchronous programming         
#NOTE: so to solve the nested promblems of callback hell javascript introduced  -> Promise
                                            */

//nesting example..

let age = 18;
if(age<=19){
  if(age>=60){
    console.log('senior citizen');
  }else{
    console.log('middle age citizen');
  }
}  else{
  console.log('child'); 
};


// examle of callbackHell: print the getData function each after 2 second delay in line  

function getData(dataId,getNextData){

  setTimeout(()=>{
    if(getNextData){
      getNextData();
    }
    console.log('data is ',dataId);
  },1000)
};
getData(1,()=>{ getData(2,()=>{ getData(3);})});


// complete task1,2,3,4 after 4 sec one by one using callbackHell

function task(yourTask,nextTask){

  setTimeout( ()=>{ 
    if(true){
         nextTask();
    }
    console.log('Done :' , yourTask)
  },2000)
};
task('task one ',()=>{
  task('task two')},()=>{
    task('task three')
  },()=>{task('task four')
});


//callback hell    task1<task2<task3<task4

function task1(callback){
  setTimeout(()=>{
console.log("task1 is complete");
callback();
   },2000)
   
};

function task2(callback){
  setTimeout(()=>{
 console.log("task2 is complete");
 callback();
   },5000)
  
}

function task3(callback){
  setTimeout(()=>{
  console.log("task3 is complete");
  callback();
   },1000)
 
}

function task4(callback){
  setTimeout(()=>{
console.log("task4 is complete");
   callback();
   },3000)

}

task1(()=>{
 task2(()=>{
   task3(()=>{
      task4(()=>{
         console.log('All task is completed');
      });

   });
 });  
});









