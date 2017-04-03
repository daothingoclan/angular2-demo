import { Observable } from "rxjs";
import { IConnector } from "../../../common/connector/iconnector";
import { IPatientService } from "./ipatientService";
import appConst from "../const/apiBaseUrl";

export class PatientService implements IPatientService {
    public getAllPatients(): Observable<Array<any>> {
        let iconnector: IConnector = window.ioc.resolve("IConnector");
        let url = String.format("{0}/api/patient", appConst.apiBaseUrl);
        return iconnector.get(url);
    }
}