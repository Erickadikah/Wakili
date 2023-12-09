import React from 'react';
import { Drawer } from 'antd';
import './asideCart.scss';
import DrawerCartItems, {DrawerCartItemsProps} from './asideCartItems';


export interface CartProps extends DrawerCartItemsProps {
  drawerIsVisible: boolean;
  handleDrawerClose: () => void;
}

const OffCanvasCart: React.FC<CartProps> = (props: CartProps) => {
    const { drawerIsVisible, handleDrawerClose, handleCloseDrawer, ...restProps } = props
    return (
      <Drawer
        title="Shopping Cart"
        placement="right"
        closable={true}
        onClose={handleDrawerClose}
        open={drawerIsVisible}
        className="side-cart"
        zIndex={999999}
      >
        <div style={{height: "100%"}}>
              <DrawerCartItems handleCloseDrawer={handleDrawerClose} {...restProps} />
        </div>
      </Drawer>
    );
};

export default OffCanvasCart;

