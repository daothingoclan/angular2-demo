///<reference path="../resources/js/jsextension.d.ts"/>
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from '@angular/core';
import { SecurityModule } from "./modules/security/securityModule";
import { JournalModule } from "./modules/journal/journalModule";
import iocHelper from "src/common";
import appConfig from "./appConfig";

iocHelper.config(appConfig).subscribe(() => {
    enableProdMode();
    platformBrowserDynamic().bootstrapModule(JournalModule);
});