import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { UserSearchComponent } from './user-search.component';
import { UserSearchRoutingModule } from './user-search-routing.module';



@NgModule({
    declarations: [UserSearchComponent],
    imports: [
        CommonModule,
        UserSearchRoutingModule

    ]
})
export class UserSearchModule {
}
