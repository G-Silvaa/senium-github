import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonLayoutComponent} from "./shared/layouts/common-layout/common-layout.component";

const routes: Routes = [
    {
        path: '',
        component: CommonLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/initial-page/initial-page.module').then(m => m.InitialPageModule)
            }
           
        ]
    },
    

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
