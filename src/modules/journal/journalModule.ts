import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "../../defaultPage";
import { HttpModule } from "@angular/http";
import { CommonModule } from "../common/commonModule";
import {AptJournals} from "./aptJournal/aptJournals";
import {JournalRoutes} from "./journalRoutes";

@NgModule({
    imports: [BrowserModule, FormsModule, CommonModule, JournalRoutes],
    declarations: [DefaultPage, AptJournals],
    bootstrap: [DefaultPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: []
})

export class JournalModule {
    constructor(ref: ApplicationRef) {
        window.ioc.registerInstance("IInjector", ref["_injector"]);
    }
}