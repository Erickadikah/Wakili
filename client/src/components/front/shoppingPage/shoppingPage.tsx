import "./shoppingPage.scss";
import ProductCardGrid from "./productCards";
import ShoppingSideNav from "./shopingAside";
import { ProductCardGridProps } from "./productCards";
import PageFooter from "../landingPage/footer/pageFooter";

export interface ShoppingDisplayProps extends ProductCardGridProps {}

export default function ShoppingDisplay(props: ShoppingDisplayProps) {
  return (
    <div className="shopping-display">
      <header className="shopping-nav">
        <ShoppingSideNav />
      </header>
      <main className="shopping-main">
        <ProductCardGrid {...props} />
      </main>
      <div className="shopping-footer">
        <PageFooter />
      </div>
    </div>
  );
}
