import { CustomSelect } from "./customSelect";
import { NavUnderlinePrinter } from "./navigation/navUnderlinePrinter";
import { ProductsCreator } from "./products/productsCreator";
import { NavScroll } from "./navigation/navScroll";
import { StateReobservEl } from "./states/stateReobservEl";
import { NavigationToggle } from "./navigation/navigationToggle";
import { PopupProductDetails } from "./products/popupProductDetails";

class indexHome {
  constructor() {
    new NavUnderlinePrinter();
    new NavigationToggle();
    new NavScroll();
    new CustomSelect();
    const observ = new ProductsCreator();
    observ.observeLastElem();
    StateReobservEl.observRef = observ.reObserveLastElem.bind(observ);
    new PopupProductDetails();
  }
}

new indexHome();
