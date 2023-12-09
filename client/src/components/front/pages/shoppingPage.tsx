import ShoppingDisplay from "../shoppingPage/shoppingPage";
import { ShoppingDisplayProps } from "../shoppingPage/shoppingPage";

export interface ShoppingPageProps extends ShoppingDisplayProps {}

export default function ShoppingPage(props: ShoppingPageProps) {
  return (
    <div>
      <ShoppingDisplay {...props} />
    </div>
  );
}
