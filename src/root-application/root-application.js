import * as singleSpa from 'single-spa';

singleSpa.registerApplication('app-1', () =>
  import ('../app1/app1.js'), pathPrefix('/app1'));
singleSpa.registerApplication('app-2', () =>
  import ('../app2/app2.js'), pathPrefix('/app2'));
singleSpa.registerApplication('app-3', () =>
  import ('../app3/app3.js'), pathPrefix('/app3'));

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}

// registerApplication takes name of the child app, 
// A callback function which loads the child app (with codesplitting).
// and a path to match.