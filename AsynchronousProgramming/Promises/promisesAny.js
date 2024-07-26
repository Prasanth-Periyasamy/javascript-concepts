// Promises.any returns promise which is first resolved but does not care the promises which is rejected
// Promises.any returns aggregate error when all promises got rejected

// Example
async function promiseAnyFunc() {
  try {
    const promise1 = Promise.reject("promise1");
    // const promise5 = Promise.reject("promise5");
    const promise2 = Promise.resolve("");
    const promise3 = ""; // empty string means already fullfilled
    const promise4 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("promise4");
      }, 200);
    });
    const promiseAllResult = await Promise.any([
      promise1,
      promise2,
      promise3,
      promise4,
      //   promise5,
    ]);
    console.log("promiseRaceResult", promiseAllResult);
  } catch (err) {
    console.log("Err", err);
  }
}
promiseAnyFunc();

// Example2
async function promiseAnyFunc2() {
  try {
    const promise1 = Promise.reject("promise1");
    const promise4 = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("promise4");
      }, 200);
    });
    const promiseAllResult = await Promise.any([promise1, promise4]);
    console.log("promiseRaceResult", promiseAllResult);
  } catch (err) {
    console.log("Err", err);
    // Err [AggregateError: All promises were rejected] {
    //     [errors]: [ 'promise1', 'promise4' ]
    //   }
  }
}
promiseAnyFunc2();
