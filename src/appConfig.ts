import { HttpConnector } from "./modules/common/connector/httpConnector";
import { UserService } from "./modules/security/_share/services/userService";
import { IoCLifeCycle } from "./modules/common/ioc/ioc";
import { PatientService } from "./modules/journal/_share/services/PatientService";

let appConfig = {
    ioc: [
        { name: "IConnector", mapTo: HttpConnector },
        { name: "IUserService", mapTo: UserService, lifecycle: IoCLifeCycle.Singleton },
        { name: "IPatientService", mapTo: PatientService, lifecycle: IoCLifeCycle.Singleton }
    ]
};
export default appConfig;