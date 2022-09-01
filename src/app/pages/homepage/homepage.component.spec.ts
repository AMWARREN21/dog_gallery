import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';
import { MaterialModule } from '../../material.module';

import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
    let component: HomepageComponent;
    let fixture: ComponentFixture<HomepageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientModule,
                MaterialModule
            ],
            declarations: [
                HomepageComponent,
                SidenavComponent
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(HomepageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create homepage', () => {
        expect(component).toBeTruthy();
    });
});
