import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'HOME PAGE' },
  { path: 'about', component: AboutComponent, title: 'ABOUT PAGE' },
  { path: 'portfolio', component: PortfolioComponent, title: 'PORTFOLIO PAGE' },
  { path: 'contact', component: ContactComponent, title: 'CONTATCT PAGE' },
  { path: '**', component: NotfoundComponent, title: 'NOT FOUND PAGE' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
