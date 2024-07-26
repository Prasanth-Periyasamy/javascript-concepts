// Promies.all returns a single promise if all given promises got resolved
// Gets rejected with a rejection msg if any promise got rejected

// Example
async function promiseAllFunc() {
  try {
    const promise1 = Promise.resolve("promise1");
    // const promise5 = Promise.reject("promise5");
    const promise2 = Promise.resolve("");
    const promise3 = ""; // empty string means already fullfilled
    const promise4 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("promise4");
      }, 200);
    });
    const promiseAllResult = await Promise.all([
      promise1,
      promise2,
      promise3,
      promise4,
      //   promise5,
    ]);
    console.log("promiseAllResult", promiseAllResult);
  } catch (err) {
    console.log("Err", err);
  }
}
promiseAllFunc();
