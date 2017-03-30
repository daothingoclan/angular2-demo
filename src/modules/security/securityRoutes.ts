import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Users } from "./user/users";
import { EditUser } from "./user/editUser";

let routes: Routes = [
    { path: "", redirectTo: "users", pathMatch: "full" },
    { path: "users", component: Users },
    { path: "editUser/:id", component: EditUser }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class SecurityRoutes { }
