import { IConnector } from "../../../common/connector/iconnector";
import { IAptJournalService } from "./iAptJournalService";
import { Observable } from "rxjs";
import appConst from "../const/apiBaseUrl";

export class AptJournalService implements IAptJournalService {
    public getAptsByPatient(patientId: number): Observable<Array<any>> {
        let iconnector = window.ioc.resolve("IConnector");
        let url = appConst.apiBaseUrl + "/api/appointment/" + patientId;
        return iconnector.get(url);
    }
}