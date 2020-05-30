import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { BitcoinBrlComponent } from './bitcoin-brl/bitcoin-brl.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'bitcoin', component: BitcoinComponent},
  {path: 'bitcoin-brl', component: BitcoinBrlComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
