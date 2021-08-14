import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { ArticleComponent } from './article/article.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { EjemplosBoostrapComponent } from './ejemplos-boostrap/ejemplos-boostrap.component';
import { Error404Component } from './error404/error404.component';
import { EventoshtmlComponent } from './eventoshtml/eventoshtml.component';
import { PipeComponent } from './pipe/pipe.component';
import { TitulosComponent } from './titulos/titulos.component';
import { UserAddComponent } from './usuarios/user-add/user-add.component';
import { UserEditComponent } from './usuarios/user-edit/user-edit.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: TitulosComponent
  },
  {
    path: 'pipes',
    component: PipeComponent
  },
  {
    path: 'directivas',
    component: DirectivasComponent
  },
  {
    path: 'ejemploboostrap',
    component: EjemplosBoostrapComponent
  },
  {
    path: 'eventos',
    component: EventoshtmlComponent
  },
  {
    path: 'user',
    component: UsuariosComponent,
    children: [
      { path: 'add', component: UserAddComponent },
      { path: 'edit', component: UserEditComponent }
    ]
  },
  {
    path: 'article',
    component: ArticleComponent,
  },
  {
    path: 'article/details',
    component: ArticleDetailComponent
  },
  {
    //Para marcar la pagina de error en el path se pone '**'
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
