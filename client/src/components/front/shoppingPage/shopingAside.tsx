import { FaSearch } from "react-icons/fa";
import { Divider, Space, Tag } from "antd";

export default function ShoppingSideNav() {
  return (
    <div className="container p-2">
      <div>
        <form
          action=""
          className="flex flex-wrap items-center justify-center gap-2 mx-auto"
        >
          <div className="form-group">
            <input
              type="text"
              name="productSearch"
              id="productSearch"
              className="form-input px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
              placeholder="Search"
            />
          </div>
          <button className="btn bg-gray-900 hover:bg-pink-600 rounded text-white px-4 py-2 flex items-center">
            <span className="mr-2">Search</span> <FaSearch size={14} />
          </button>
        </form>
      </div>
      <div>
        <Divider orientation="left">Categories</Divider>
        <Space size={[0, 8]} wrap>
          <Tag color="magenta">Dairy</Tag>
          <Tag color="green">Fruits</Tag>
          <Tag color="volcano">Grains & Cereals</Tag>
          <Tag color="geekblue">Herbs & Spices</Tag>
          <Tag color="cyan">Meet & Poultry</Tag>
          <Tag color="purple">Nuts & Seeds</Tag>
          <Tag color="orange">Vegetables</Tag>
        </Space>
      </div>
    </div>
  );
}
