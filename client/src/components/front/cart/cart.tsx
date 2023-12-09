import React, { useState} from 'react';
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

//import cart item interface

export interface CartItem  {
    itemId: string | number;
    itemName : string;
    image: string;
    quantity:number;
    price:number;
    vendorId: number | string,
};



interface DataType {
  key: React.Key;
  productName: string;
  productImage: string;
  quantity: number;
  unitPrice: number;
}





const columns: ColumnsType<DataType> = [
  {
    title: 'Product',
    dataIndex: 'productName',
    render: (_, record) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={record.productImage}
          alt="product image"
          style={{
            width: "30px",
            height: "30px",
            objectFit: "contain",
            borderRadius: "50%",
            marginRight: "10px"
          }}
        />
        <p>{record.productName}</p>
      </div>
    ),
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
  },
  {
    title: 'Unit Price',
    dataIndex: 'unitPrice',
  },
  {
    title: 'Sub total',
    dataIndex: 'subTotal',
    render: (_, record) => (
      <span>
        {record.quantity * record.unitPrice}
      </span>
    ),
  }
];

export interface ClientCartProps {
    clientCartItems: CartItem[];
}

const ClientCart: React.FC<ClientCartProps> = ({clientCartItems}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  //work with session Storage



  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  const data: DataType[] = clientCartItems.map((CartItem, index) => ({
    key: index,
    productName: CartItem.itemName,
    productImage: CartItem.image,
    quantity: CartItem.quantity,
    unitPrice: CartItem.price,
  }));

  //console.log(clientCartItems);
  return (
    <div style={{ margin: "50px auto 10px auto", width: "90vw", padding: "20px 10px"}}>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};



export default ClientCart;
