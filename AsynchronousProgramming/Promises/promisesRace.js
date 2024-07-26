// Promises.race returns promise which is first resolved or first rejected

// Example
async function promiseRaceFunc() {
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
    const promiseAllResult = await Promise.race([
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
promiseRaceFunc();
