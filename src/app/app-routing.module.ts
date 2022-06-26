import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EnglishComponent } from './pages/english/english.component';
import { GrammarComponent } from './pages/grammar/grammar.component';
import { ScienceComponent } from './pages/science/science.component';
import { SstComponent } from './pages/sst/sst.component';
import { MathsComponent } from './pages/maths/maths.component';

const routes: Routes = [
  { path: 'english', component: EnglishComponent },
  { path: 'grammar', component: GrammarComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'sst', component: SstComponent },
  { path: 'maths', component: MathsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
