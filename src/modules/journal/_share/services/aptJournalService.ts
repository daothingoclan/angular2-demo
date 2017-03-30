import { IConnector } from "../../../common/connector/iconnector";
import { IAptJournalService } from "./iAptJournalService";
import { Observable } from "rxjs";
import apiBaseUrl from "../const/apiBaseUrl";

export class AptJournalService implements IAptJournalService {
    public getAptsByPatient(patientId: number): Observable<Array<any>> {
        let iconnector = window.ioc.resolve("IConnector");
        let url = apiBaseUrl + "/api/appointment/" + patientId;
        return iconnector.get(url);
    }
}