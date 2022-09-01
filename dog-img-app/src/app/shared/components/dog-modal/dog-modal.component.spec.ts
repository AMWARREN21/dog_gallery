import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'dog-img-app/src/app/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { DogModalComponent } from './dog-modal.component';

describe('DogModalComponent', () => {
    let component: DogModalComponent;
    let fixture: ComponentFixture<DogModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MaterialModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useClass: TranslateFakeLoader
                    }
                }),
            ],
            declarations: [DogModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: {} },
                { provide: MatDialogRef, useValue: {} }
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(DogModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create dog modal', () => {
        expect(component).toBeTruthy();
    });
});
