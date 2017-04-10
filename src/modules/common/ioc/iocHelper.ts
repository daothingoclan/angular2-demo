import { IoCFactory } from "./ioc";
import { Observable } from "rxjs/observable";
import "rxjs/add/observable/from"

let iocHelper = {
    config: config
};
export default iocHelper;
function config(appConfig: any) {
    let iocContainer = IoCFactory.create();
    iocContainer.import(appConfig.ioc);
    window.ioc = iocContainer;
    return Observable.from([iocContainer]);
}