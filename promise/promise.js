/*  Promise: is the solution in place of callback hell . Promise is for eventual completation of task. Promise is an object in javascript.   
  #SYNTAX:   let promise = new Promise((resolve,reject)=>{..})
                                function with 2 handlers..
                        (resolve,reject) are callbacks  provided by j.s 
  #Note: resolve()  and   reject()  are callback functions in js and it is created internally by javascript .                    
  #Promise 3 stages: 1)pending 2)fulfilled(resolved)   3)rejected           */

  let promiseIs = new Promise ((resolve,reject)=>{
    console.log('promise');
    resolve('promise is fuilfilled');

    });

//
    
  let promise2= new Promise ((resolve,reject)=>{
    console.log('promise');
   reject('promise is rejected due to some error...');
    });


//

function getData(data,getNextData){
  
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('data value is :', data)
      resolve('promise is resolved')
      if(getNextData){
        getNextData()
      }
     },4000)
    }) 
   };

   // In case  of      Promise.then()   when promise will be resolved or fullfiled   

const myPromise =  ()=>{
  return new Promise ((resolve,reject)=>{
    console.log('i made a promise');
    resolve('promise will be resolved soon');
  })
};

let promiseResult = myPromise();
promiseResult.then(()=>{
  console.log('you made promise is eventually resolved');
});

// in case of reject ...promise will not be printed

const yourPromise =  ()=>{
  return new Promise ((resolve,reject)=>{
    console.log('i made a promise');
    reject('promise will be rejected');
  })
};

let result = yourPromise();
result.then(()=>{
  console.log('you made promise is rejected');
});

result.catch(()=>{
  console.log('promise is rejected');
})