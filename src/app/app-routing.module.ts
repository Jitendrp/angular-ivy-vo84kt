import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IphoneComponent} from './iphone/iphone.component';
import { IpadComponent } from './ipad/ipad.component';

const routes: Routes = [
  {path: 'iPhone',component: IphoneComponent},
  {path: 'iPad', component: IpadComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = [IphoneComponent,IpadComponent]