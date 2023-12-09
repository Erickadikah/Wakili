import { useState } from "react";

export default function ProductTabs({ description, reviews }: any) {
  const [activeTab, setActiveTab] = useState("Description");

  const changeTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="w-full">
      <div className="border-b border-gray-300">
        <div className="flex">
          <button
            onClick={() => changeTab("Description")}
            className={`${
              activeTab === "Profile"
                ? "bg-green-800 text-white"
                : "text-green-600"
            } py-2 px-4 border-b-2 border-transparent hover:border-green-600 focus:outline-none`}
          >
            Description
          </button>
          <button
            onClick={() => changeTab("Reviews")}
            className={`${
              activeTab === "Transactions"
                ? "bg-green-800 text-white"
                : "text-green-600"
            } py-2 px-4 border-b-2 border-transparent hover:border-green-600 focus:outline-none`}
          >
            Reviews
          </button>
        </div>
      </div>
      <div className="mt-4" style={{ margin: 0, paddingLeft: "0" }}>
        {activeTab === "Description" && (
          <div className="p-4">
            <p className="text-justify">{description}</p>
          </div>
        )}
        {activeTab === "Reviews" && (
          <div className="p-4 flex">
            {reviews.length > 0 ? (
              <ul>
                {reviews.map((review: string, index: number) => {
                  return <li key={index}>{review}</li>;
                })}
              </ul>
            ) : (
              <p className="text-justify">No reviews yet</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
