/*  SYNCHRONOUS   VS     ASYNCRONOUS    JAVASCRIPT
  Snychronous: js is synchronous programming language later it became Async.
  sync means code execute one by one ..    
  
  #NOTE: JS is Synchronous in nature and single threading language

  Asynchronous : it waits none ..  Async do multi task together at once 
  example:  task1-1sec
            task2- 3sec
            task3- 1sec
            task4- 12 sec 
  so here task will not be printed line by line...
 some examples of Asynchronous in js we use are:
    1: setTimeOut   2: setTimeInterval  3: promises 4: fetch  5:axios  6:XMLHttpRequest

 so,if you are not using these keywords in js other code will be run as a synchronous.
 
 Sync. code examples are:
   console.log('hello');
  console.log('javascript');
  console.log('react js');

  Above code will print synchronously line by line..    
  
 Q: what is event LOOP in js ?
   EVENT LOOP:  1: call stack   2: Web Api's   3: Callback Queue.

Event loop  constantly checks if there is anything in the call stack to execute and if not it will check if there is anything in the callback queue.
If there is something in callback queue, event loop will push it to call stack - but only if the call stack is empty. That's all that event loop does really.

#Note: EVENT LOOP = call stack + callback Queue -> is equal to result(output)
so Event LOOP works  together with callstack and callback queue  back and forth.

  #NOTE: As a single threaded language js has only one call stack -> means only one thing can be executed at one time... call stack follow "L I F O" principal.

  3: Task Queue (or Callback Queue):
This is where asynchronous operations (like the result of setTimeout or HTTP requests) wait to be executed once the call stack is clear.
The event loop checks this queue and pushes the callback onto the call stack when the stack is empty.

Microtask Queue:
This is similar to the task queue, but it's for promises and other microtasks.
Microtasks have higher priority than tasks in the task queue. After each function execution, the event loop first checks the microtask queue before moving on to the task queue.
 
      Q.  single threaded vs Multi threaded language ?
sync(single threaded)     Async(multiThreaded) also known as concurrency  e.g: setTimeOut

#NOTE: In Event Loop we have (1) "call stack" : follows " LIFO " Where functions and js synchronous code is stored for exection line by line using "LIFO" principal..
(2) callbackQueue(Task Queue): here asynchronous code like ... setTimeOut() , promises,setInterval , etc. are stroed and waits for the first call stack  sync codes will execute after that Callback queue -> Async code will execute...Here in between callStack and callBack queue -> Event loop will check both codes to run ..

  #NOTE:  fetch , axios , promises , setTimeOut , setInterval   -> use  to send reqest.
# then catch , callBacks , async await   

# promises : 3 states   1:pending  2: resolve  3:reject
                              if reslove -> use   .then            if reject ->     .catch
                                                                                      
 #Note: write promise code only if we rely on 3rd party code like AJAX                 */

  console.log('i code javascript');
  //Async code..
  setTimeout(function(){
    console.log('asynchronous code is here');
  },3000);
  console.log('i code react js');


/*   Promises: NOTE: we have to write "new" keyword before promise because promise is a  constructor function in js.   */

let yourPromise = new Promise((reslove,reject)=>{
  if(true){
   return reslove();
  } else{
    return reject();
  }
});

yourPromise
.then(()=>{console.log('your promise succedd');})
.catch(()=>{console.log('your promise is failed');});


//Q: user ask a number between  0 to 9 if number is below 5 resolve if not reject:

let numberIs = new Promise((resolve,reject)=>{
 let num = Math.floor(Math.random()*10);
 if(num>5){
  return resolve();
 }else{
  return reject();
 }
});

numberIs.then(()=>{console.log("number is greater then 5 = resolved")})
.catch(()=>{console.log('number is below 5  = rejected');});


// Q: promises:   task1: open the door   task2:go to kitchen  task3: cook food   task4:eat food    task5:now sleep

let task1 = new Promise((resolve,reject)=>{
  return resolve('task1: open the door');
});

 let task2 = task1.then(function(data){
  console.log(data);
  return new Promise(function(resolve,reject){
    return resolve('task2: go to kitchen ')
  });
});

let task3 = task2.then((data)=>{
  console.log(data);
  return new Promise((resolve,reject)=>{
     return resolve(' task3: cook food');
  });
});

let task4 = task3.then((data)=>{
  console.log(data);
  return new Promise((resolve,reject)=>{
     return resolve('task4:eat food')
  })
});

let task5 = task4.then((data)=>{
  console.log(data);
  return new Promise((resolve,reject)=>{
      return resolve('task5: now sleep');
  })
});

task5.then((data)=>{
  console.log(data)
});


//  fetch()

function fetching (){
  fetch('https://randomuser.me/api/')
    .then((raw)=>{
      return raw.json();
    })
    .then((data)=>{
      console.log(data);
    })
};
fetching();

//now in async await version


 async function fetchData (){
   let rawData = await fetch('https://randomuser.me/api/')
     let finalData = await rawData.json();
     console.log(finalData);
 
};

fetchData();

// setTimeOut

function time(){
  console.log('async setTime out is');
}

setTimeout(time,3000);