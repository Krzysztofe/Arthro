import { CustomSelect } from "./customSelect";
import { NavUnderlinePrinter } from "./navUnderlinePrinter";
import { NavigationToggle } from "./navigationToggle";
import { PopupProductDetails } from "./popupProductDetails";
import { ProductsCreator } from "./productsCreator";
import { Scroll } from "./scroll";

class indexHome {
  constructor() {
    new NavUnderlinePrinter()
    new NavigationToggle();
    new Scroll();
    new CustomSelect();
    new ProductsCreator();
    new PopupProductDetails();
  }
}

new indexHome();


