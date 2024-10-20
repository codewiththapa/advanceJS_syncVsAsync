/*  Promise: is the solution in place of callback hell . Promise is for eventual completation of task. Promise is an object in javascript.   
  #SYNTAX:   let promise = new Promise((resolve,reject)=>{..})
                                function with 2 handlers..
                        (resolve,reject) are callbacks  provided by j.s 
  #Note: resolve()  and   reject()  are callback functions in js and it is created internally by javascript .                    
  #Promise 3 stages: 1)pending 2)fulfilled(resolved)   3)rejected          
  
   #SYNTAX:   Promise.then((result)=>{})    //result: parameter in case of resolved
              Promise.catch((result)=>{})    //error: parameter in case of reject
  */

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

function getData(data){
  
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('data value is :', data)
      resolve('promise is resolved')},4000)
    }) 
   };

   let p1 = getData(12)
    p1.then((result)=>{
    console.log(result);
    });


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

let resultIs = yourPromise();
resultIs.then((result)=>{
  console.log('you made promise is rejected',result);
});

resultIs.catch((error)=>{                    //catch method in case of reject
  console.log('promise is rejected',error);
});


//    What is Promise Chaining ?

   function chaining(){
    
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("your package is deliverd");
        resolve('promise succed');
       },3000)
    })
  };
   console.log('fetching data1');

  let output = chaining();
  output.then((result)=>{
    console.log(result);
  });

  //

  function promiseChain1(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('data1');
      resolve ('data1 resolved now');
    },3000)
    })
  };
  function promiseChain2(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('data2');
      resolve ('data2 is resolved now');
    },3000)
    })
  };

  console.log('fetching promiseChain1');
let firstData = promiseChain1();
firstData.then((res)=>{
   console.log('fetching promiseChain2');
   let secondData = promiseChain2()
   secondData.then((res)=>{})
});


// Promise chaining..

function newChain (foodDilevery){
  return new Promise((resolve,reject)=>{
   setTimeout(()=>{
    console.log(foodDilevery);
    resolve('your delivery is delivered scuccesfully');
   },5000)
  })
};

newChain('Your pizza is deliverd')
  .then((result)=>{
   return newChain('Your shoes has been deliverd')
   .then((result)=>{
   return newChain('your psp4 has been deliverd')
   .then((result)=>{
    console.log(result);
   })
   })
  })

  