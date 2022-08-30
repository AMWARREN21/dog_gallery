import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPetImagesComponent } from './components/allpets/allPetImages.component';
import { BreedPageComponent } from './Pages/breed-page/breed-page.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { SubBreedPageComponent } from './Pages/sub-breed-page/sub-breed-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      { path: '', component: AllPetImagesComponent },
      { path: ':breed', component: BreedPageComponent },
      { path: ':breed/:subBreed', component: SubBreedPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
