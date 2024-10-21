/* Callback function < callback hell < promise < Async Await  :Asynchronous programming

so. to solve the problem of "callback Hell" we have "promise or promise chaining"  and to solve the problem of "promise" again we have ->  "Async Await"     

#Note: Async function return " promise "      Await  pauses the  execution of its surrounding async function  untill the "promise" is setteled           */

// "Async" keyword  makes a normal function asynchronous and return promise:

function api(data){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('Today weather data is:',data);
      resolve(200);
    },6000)
  })
};

 async function getWeatherData(){
await api("30 degree c");
await api("28 degree c");
};
getWeatherData();


//

function getData(data){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
     console.log('your data',data);
     resolve("succed");
    },3000)
  })
};

async function yourData(){
  console.log('fetching data 1....')
  await getData(247294);
  console.log('fetching data 2....')
  await getData(283.225234);
  console.log('fetching data 3....')
  await getData(9807294);
  console.log('fetching data 4....')
  await getData(5093294);
};
yourData();


//By using Immedietly invoke function in async 

function shooping(item){
  return new Promise((resolve,reject)=>{
   setTimeout(()=>{    
    console.log(`your ${item} is deliverd`);
   resolve(200);
  },2000)
  })
};

(async function(){
  await shooping('coke');
  await shooping('burger');
  await shooping('pastery');
})();