

// import React from "react";

// const DishTable = ({ data, updateQuantity }) => {
//   const calculateTotalCalories = () =>
//     data.ingredients.reduce((total, ingredient) => {
//       return total + ingredient.quantity * ingredient.caloriesPerUnit;
//     }, 0);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
//         <h1 className="text-3xl font-bold text-center mb-4">{data.dishName}</h1>
//         <div className="flex justify-center mb-6">
//           <img
//             src={data.dishImage}
//             alt={data.dishName}
//             className="w-48 h-auto rounded-md shadow-md"
//           />
//         </div>
//         <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
//           <thead className="bg-gray-200 text-gray-700">
//             <tr>
//               <th className="px-4 py-2 border border-gray-300">Ingredient Name</th>
//               <th className="px-4 py-2 border border-gray-300">Quantity</th>
//               <th className="px-4 py-2 border border-gray-300">Unit</th>
//               <th className="px-4 py-2 border border-gray-300">Calories Per Unit</th>
//               <th className="px-4 py-2 border border-gray-300">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.ingredients.map((ingredient) => (
//               <tr key={ingredient._id} className="hover:bg-gray-100">
//                 <td className="px-4 py-2 border border-gray-300">{ingredient.name}</td>
//                 <td className="px-4 py-2 border border-gray-300">{ingredient.quantity}</td>
//                 <td className="px-4 py-2 border border-gray-300">{ingredient.unit}</td>
//                 <td className="px-4 py-2 border border-gray-300">{ingredient.caloriesPerUnit}</td>
//                 <td className="px-4 py-2 border border-gray-300">
//                   <button
//                     onClick={() => updateQuantity(ingredient._id, 10)}
//                     className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mr-2"
//                   >
//                     +
//                   </button>
//                   <button
//                     onClick={() => updateQuantity(ingredient._id, -10)}
//                     className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
//                   >
//                     -
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <h2 className="text-xl font-semibold text-center mt-6">
//           Total Calories:{" "}
//           <span className="text-green-600">
//             {calculateTotalCalories().toFixed(2)}
//           </span>
//         </h2>
//       </div>
//     </div>
//   );
// };

// export default DishTable;
import React from "react";

const DishTable = ({ data, updateQuantity }) => {
  const calculateTotalCalories = () =>
    data.ingredients.reduce((total, ingredient) => {
      return total + ingredient.quantity * ingredient.caloriesPerUnit;
    }, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-4">{data.dishName}</h1>
        <div className="flex justify-center mb-6">
          <img
            src={data.dishImage}
            alt={data.dishName}
            className="w-48 h-auto rounded-md shadow-md"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="px-4 py-2 border border-gray-300">Ingredient Name</th>
                <th className="px-4 py-2 border border-gray-300">Quantity</th>
                <th className="px-4 py-2 border border-gray-300">Unit</th>
                <th className="px-4 py-2 border border-gray-300">Calories Per Unit</th>
                <th className="px-4 py-2 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.ingredients.map((ingredient) => (
                <tr key={ingredient._id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border border-gray-300">{ingredient.name}</td>
                  <td className="px-4 py-2 border border-gray-300">{ingredient.quantity}</td>
                  <td className="px-4 py-2 border border-gray-300">{ingredient.unit}</td>
                  <td className="px-4 py-2 border border-gray-300">{ingredient.caloriesPerUnit}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <button
                      onClick={() => updateQuantity(ingredient._id, 1)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mr-2"
                    >
                      +
                    </button>
                    <button
                      onClick={() => updateQuantity(ingredient._id, -1)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    >
                      -
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-xl font-semibold text-center mt-6">
          Total Calories:{" "}
          <span className="text-green-600">
            {calculateTotalCalories().toFixed(2)}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default DishTable;
