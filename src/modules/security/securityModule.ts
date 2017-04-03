import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "../../defaultPage";
import { SecurityRoutes } from "./securityRoutes";
import { Users } from "./user/users";
import { UserSummary } from "./_share/components/userSummary";
import { UserService } from "./_share/services/userService";
import { HttpModule } from "@angular/http";
import { EditUser } from "./user/editUser";
import { CommonModule } from "src/common";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, SecurityRoutes, CommonModule],
    declarations: [DefaultPage, Users, UserSummary, EditUser],
    bootstrap: [DefaultPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [UserService]
})
export class SecurityModule {
    constructor(ref: ApplicationRef) {
        window.ioc.registerInstance("IInjector", ref["_injector"]);
    }
}
