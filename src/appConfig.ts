import { HttpConnector } from "./modules/common/connector/httpConnector";
import { UserService } from "./modules/security/_share/services/userService";
import { IoCLifeCycle } from "./modules/common/ioc/ioc";

let appConfig = {
    ioc: [
        { name: "IConnector", mapTo: HttpConnector },
        { name: "IUserService", mapTo: UserService, lifecycle: IoCLifeCycle.Singleton }
    ]
};
export default appConfig;