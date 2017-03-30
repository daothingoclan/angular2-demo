import { Component } from "@angular/core";
import { UserService } from "../_share/services/userService";
import { ActivatedRoute } from "@angular/router";
@Component({
    templateUrl: "src/modules/security/user/editUser.html"
})
export class EditUser {
    public user: any;

    constructor(activatedRoute: ActivatedRoute, userService: UserService) {
        let self = this;
        let userId = activatedRoute.params["value"].id;
        userService.getUser(userId).subscribe(
            (user: any) => {
                self.user = user;
            }
        );
    }

    public onSaveClicked() {
        console.log("Saved");
    }

    public onCancelClicked() {
        console.log("Cancelled");
    }
}