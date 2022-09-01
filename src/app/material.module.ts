import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        MatCardModule,
        MatToolbarModule,
        MatSidenavModule,
        MatDialogModule,
        MatButtonModule
    ],
    exports: [
        MatCardModule,
        MatToolbarModule,
        MatSidenavModule,
        MatDialogModule,
        MatButtonModule
    ]
})

export class MaterialModule { }