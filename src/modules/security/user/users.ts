import { Component } from '@angular/core';
import { IUserService } from "../_share/services/iuserService";
import { Router } from "@angular/router";
@Component({
    templateUrl: 'src/modules/security/user/users.html'
})

export class Users {
    public users: Array<any>;
    public selectedUser: any;
    private router: Router;

    constructor(router: Router) {
        let self = this;
        self.router = router;
        let iuserService: IUserService = window.ioc.resolve("IUserService");
        iuserService.getUsers().subscribe(
            (users: Array<any>) => {
                self.users = users;
            }
        )
    }

    public onEditUserClicked(user: any) {
        this.router.navigate(["editUser", user.id]);
    }
}