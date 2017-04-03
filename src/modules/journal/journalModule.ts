import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "../../defaultPage";
import { HttpModule } from "@angular/http";
import { AppCommonModule } from "src/common";
import { CommonModule } from "@angular/common";
import { AptJournals } from "./aptJournal/aptJournals";
import { JournalRoutes } from "./journalRoutes";
import { PatientNavigator } from "../journal/_share/components/patientNavigator";
import {SanitizeHtmlPipe} from "../common/customPipes/SanitizeHtmlPipe";

import { VsFor } from './_share/components/ng2-vs-for';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, CommonModule, AppCommonModule, JournalRoutes],
    declarations: [DefaultPage, AptJournals, PatientNavigator, VsFor, SanitizeHtmlPipe],
    bootstrap: [DefaultPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: []
})

export class JournalModule {
    constructor(ref: ApplicationRef) {
        window.ioc.registerInstance("IInjector", ref["_injector"]);
    }
}
