import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ColorUtComponent } from "./color-ut.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

fdescribe("ColorUtComponent", () => {
  let component: ColorUtComponent;
  let fixture: ComponentFixture<ColorUtComponent>;
  let el: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorUtComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorUtComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  /* Le premier test: vérifier que la div est rouge */
  it("should have red div", () => {
    const para = el.query(By.css(`[data-testid=para]`));
    expect(para.nativeElement.style["background-color"]).toBe("red");
  });
  /* Le deuxième test: vérifier que apres le click ca devienne jaune  */

  it("should have yellow div after clicking the p", () => {
    const para = el.query(By.css(`[data-testid=para]`));
    para.nativeElement.click();
    fixture.detectChanges();
    expect(para.nativeElement.style["background-color"]).toBe("yellow");
  });
});
