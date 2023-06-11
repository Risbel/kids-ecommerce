import { Store } from "@/utils/Store";
import React, { useContext } from "react";

const CategoriesCard = () => {
  const { state } = useContext(Store);

  return (
    <div>
      <div className="text-gray-700 text-sm divide-y divide-solid divide-gray-400 p-4 border border-gray-500 border-dashed">
        <div className="flex justify-between py-2">
          <span className="text-blue-800 font-semibold hover:text-orange-600">For Babies</span> <p>(1)</p>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-blue-800 font-semibold hover:text-orange-600">For Boys</span> <p>(10)</p>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-blue-800 font-semibold hover:text-orange-600">For Girls</span> <p>(3)</p>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-blue-800 font-semibold hover:text-orange-600">For Home</span> <p>(1)</p>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-blue-800 font-semibold hover:text-orange-600">For Play</span> <p>(0)</p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
