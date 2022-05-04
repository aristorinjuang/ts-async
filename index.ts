const c = (f: Function) => {
  setTimeout(() => {
    f('Callback 1');
    setTimeout(() => {
      f('Callback 2');
      setTimeout(() => {
        f('Callback 3');
      }, 1000);
    }, 1000);
  }, 1000);
};

c((text: string) => console.log(text));

const delay = (ms: number) => new Promise(f => setTimeout(f, ms));
const p = async (f: Function) => {
  await delay(1000);
  f('Promise 1');
  await delay(1000);
  f('Promise 2');
  await delay(1000);
  f('Promise 3');
};

p((text: string) => console.log(text));