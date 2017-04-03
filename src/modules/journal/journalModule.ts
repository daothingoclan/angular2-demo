import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "../../defaultPage";
import { HttpModule } from "@angular/http";
import { CommonModule } from "src/common";
import { AptJournals } from "./aptJournal/aptJournals";
import { JournalRoutes } from "./journalRoutes";
import { PatientNavigator } from "../journal/_share/components/patientNavigator";

import { VsFor } from './_share/components/ng2-vs-for';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, CommonModule, JournalRoutes],
    declarations: [DefaultPage, AptJournals, PatientNavigator, VsFor],
    bootstrap: [DefaultPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: []
})

export class JournalModule {
    constructor(ref: ApplicationRef) {
        window.ioc.registerInstance("IInjector", ref["_injector"]);
    }
}
