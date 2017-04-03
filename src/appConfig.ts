import { UserService } from "./modules/security/_share/services/userService";
import { AptJournalService } from "./modules/journal/_share/services/aptJournalService";
import { HttpConnector, IoCLifeCycle } from "src/common";
import { PatientService } from "./modules/journal/_share/services/PatientService";

let appConfig = {
    ioc: [
        { name: "IConnector", mapTo: HttpConnector, lifecycle: IoCLifeCycle.Singleton },
        { name: "IUserService", mapTo: UserService, lifecycle: IoCLifeCycle.Singleton },
        { name: "IPatientService", mapTo: PatientService, lifecycle: IoCLifeCycle.Singleton },
        { name: "IAptJournalService", mapTo: AptJournalService, lifecycle: IoCLifeCycle.Singleton }
    ]
};
export default appConfig;