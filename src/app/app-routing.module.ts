import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { BitcoinBrlComponent } from './bitcoin-brl/bitcoin-brl.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'bitcoin', component: BitcoinComponent},
  {path: 'bitcoin-brl', component: BitcoinBrlComponent},
  {path: 'list', component: ListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
