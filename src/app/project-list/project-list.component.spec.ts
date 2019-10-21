import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListComponent } from './project-list.component';
import { FileService } from '../shared/file.service';
import { RouterService } from '../shared/router.service';

describe('ProjectListComponent', () => {
    let component: ProjectListComponent;
    let fixture: ComponentFixture<ProjectListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProjectListComponent],
            providers: [
                {provide: FileService, useValue: {}},
                {provide: RouterService, useValue: {}},
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
