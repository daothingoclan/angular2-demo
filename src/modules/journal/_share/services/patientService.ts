import { Observable } from "rxjs/observable";
import { IConnector } from "src/common";
import { IPatientService } from "./ipatientService";
import appConst from "../const/appConstant";

export class PatientService implements IPatientService {
    public getAllPatients(): Observable<Array<any>> {
        let iconnector: IConnector = window.ioc.resolve("IConnector");
        let url = String.format("{0}/api/patient", appConst.apiBaseUrl);
        return iconnector.get(url);
    }
}