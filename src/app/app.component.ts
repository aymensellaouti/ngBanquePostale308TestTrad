import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(public translateService: TranslateService) {
    translateService.setDefaultLang("fr");
    translateService.addLangs(["en", "fr"]);
    const browserLang = translateService.getBrowserLang() ?? "";
    translateService.use(browserLang.match(/en|fr/) ? browserLang : "fr");
  }

  translate(locale: string) {
    this.translateService.use(locale);
  }

  title = "startingTest";
}
