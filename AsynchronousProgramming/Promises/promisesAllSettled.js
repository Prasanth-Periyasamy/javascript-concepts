// Promies.allSettled returns an array of promises which are rejected and resolved

// Example
async function promiseAllSettledFunc() {
  try {
    const promise1 = Promise.reject("promise1");
    // const promise5 = Promise.reject("promise5");
    const promise2 = Promise.reject("");
    // const promise3 = ""; // empty string means already fullfilled
    const promise4 = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("promise4");
      }, 200);
    });
    const promiseAllResult = await Promise.allSettled([
      promise1,
      promise2,
      //   promise3,
      promise4,
      //   promise5,
    ]);
    console.log("promiseAllSettledResult", promiseAllResult);
    // [
    //     { status: 'fulfilled', value: 'promise1' },
    //     { status: 'fulfilled', value: '' },
    //     { status: 'fulfilled', value: '' },
    //     { status: 'rejected', reason: 'promise4' }
    //   ]
    // Even if all promises got rejected it returns a value
    // [
    //     { status: 'rejected', reason: 'promise1' },
    //     { status: 'rejected', reason: '' },
    //     { status: 'rejected', reason: 'promise4' }
    //   ]
  } catch (err) {
    console.log("Err", err);
  }
}
promiseAllSettledFunc();
