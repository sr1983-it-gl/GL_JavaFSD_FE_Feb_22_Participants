
function printAppInfo(name : string, version : string){

  console.log(`${name} - ${version}`);
}
printAppInfo("Google Chrome", "50.1");

type AppInfo = {
  name: string,
  version: string
}

function printAppInfo2(appInfo : AppInfo){

  console.log(`${appInfo.name} - ${appInfo.version}`);
}

let zoom = {
  name: "Zoom App",
  version: "10.5"
}

printAppInfo2(zoom);

interface DeviceInfo {
  name: string,
  model: string
} 

function printAppInfo3(device : DeviceInfo){

  console.log(`${device.name} - ${device.model}`);
}

let samungMobile = {
  name: "Samsung",
  model: "Galaxy"
}

printAppInfo3(samungMobile);