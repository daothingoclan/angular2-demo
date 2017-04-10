import { Observable } from "rxjs/observable";
import { IConnector } from "src/common";
import { IAptJournalService } from "./iAptJournalService";
import appConst from "../const/appConstant";

export class AptJournalService implements IAptJournalService {
    public getJournalsByPatient(patientId: any): Observable<Array<any>> {
        let iconnector: IConnector = window.ioc.resolve("IConnector");
        let url = String.format("{0}/api/journal/patient/{1}", appConst.apiBaseUrl, patientId);
        return iconnector.get(url);
    }
}