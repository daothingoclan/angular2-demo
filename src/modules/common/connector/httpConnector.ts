import { IConnector } from "./iconnector";
import { Observable } from "rxjs";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";

export class HttpConnector implements IConnector {
    public get(url: string): Observable<any> {
        let http = window.ioc.resolve(Http);
        return http.get(url)
            .map((response: Response) => { return response.json(); });
    }
}