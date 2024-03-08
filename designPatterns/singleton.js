const singleton = (() => {
  let instance;
  function createInstance() {
    instance = new Object("instance");
    return instance;
  }
  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

let i = singleton.getInstance();
let j= singleton.getInstance();
console.log(i);
console.log(j);
console.log(i === j)
