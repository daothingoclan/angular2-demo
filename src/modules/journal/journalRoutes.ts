import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import {AptJournals} from "./aptJournal/aptJournals";

let routes: Routes = [
    { path: "", redirectTo: "aptJournals", pathMatch: "full" },
    { path: "aptJournals", component: AptJournals }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class JournalRoutes { }
