///<reference path="../resources/js/jsextension.d.ts"/>
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { SecurityModule } from "./modules/security/securityModule";
import { JournalModule } from "./modules/journal/journalModule";
import iocHelper from "./modules/common/ioc/iocHelper";
import appConfig from "./appConfig";

iocHelper.config(appConfig).subscribe(() => {
    platformBrowserDynamic().bootstrapModule(JournalModule);
});