import { IConnector } from "../../../common/connector/iconnector";
import { IPatientService } from "./iPatientService";
import { Observable } from "rxjs";
import apiBaseUrl from "../const/apiBaseUrl";

export class PatientService implements IPatientService {
    public getAllPatients(): Observable<Array<any>> {
        let iconnector = window.ioc.resolve("IConnector");
        let url = apiBaseUrl + "/api/patient";
        return iconnector.get(url);
    }
}