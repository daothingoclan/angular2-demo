import { IConnector } from "../../../common/connector/iconnector";
import { HttpConnector } from "../../../common/connector/httpConnector";
import { IUserService } from "./iuserService";

export class UserService implements IUserService {
    public getUsers() {
        let iconnector = window.ioc.resolve("IConnector");
        return iconnector.get("api/users.json");
    }

    public getUser(userId: string) {
        let iconnector = window.ioc.resolve("IConnector");
        let url = String.format("api/user_{0}.json", userId);
        return iconnector.get(url);
    }
}