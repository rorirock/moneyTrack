import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolbarComponent } from '../../../../views/shared/toolbar/toolbar.component';


describe('ToolbarComponent test: ', () => {

    let component: ToolbarComponent;
    let fixture: ComponentFixture<ToolbarComponent>;

    beforeEach(async () => {
    
        await TestBed.configureTestingModule({
          imports: [ToolbarComponent],
          providers: [],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ToolbarComponent);
        component = fixture.componentInstance;
    });

    it('should call showMenu == false when call emitActiveMenu',()=>{
        spyOn(component.emitShowMenu, 'emit');
        component.emitActiveMenu()
        expect(component.showMenu).toBeFalse() 
        expect(component.emitShowMenu.emit).toHaveBeenCalled()
        component.emitActiveMenu()
        expect(component.showMenu).toBeTrue() // true, segunda llamada
    })

})