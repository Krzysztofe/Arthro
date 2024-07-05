import { NavigationToggle } from "./navigationToggle";
import { ProductsCreator } from "./productsCreator";
import { Scroll } from "./scroll";

class indexHome {
  constructor() {
    new NavigationToggle();
    new Scroll();
    new ProductsCreator();
  }
}

new indexHome();
