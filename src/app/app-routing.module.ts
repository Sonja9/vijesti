import { FormaComponent } from './forma/forma.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { NewsComponent } from './news/news.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'news', component: NewsComponent },
  { path:'bitcoin', component: BitcoinComponent },
  { path: 'forma', component: FormaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
