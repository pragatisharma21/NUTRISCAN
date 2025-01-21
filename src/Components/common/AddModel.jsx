import React, { useState } from "react";
import { addDish } from "../../Api/apiStore";

const AddModel = ({ isModalOpen, setIsModalOpen }) => {
  const [ingredients, setIngredients] = useState([]);
  const [dishName, setDishName] = useState("");
  const [dishDescription, setDishDescription] = useState("");

  const handleIngredientAdd = () => {
    setIngredients([
      ...ingredients,
      { name: "", unit: "", quantity: "", caloriesPerUnit: "" },
    ]);
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][field] = value;
    setIngredients(updatedIngredients);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const validIngredients = ingredients.filter(
      (ingredient) =>
        ingredient.name && ingredient.quantity && ingredient.unit && ingredient.caloriesPerUnit
    );

    const formData = {
      dishName,
      dishDescription,
      ingredients: validIngredients,
    };

    const res = await addDish(formData)
    console.log(res)
   
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Add a New Dish
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setIsModalOpen(false)} // Close modal
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 md:p-5">
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                {/* Dish Name */}
                <div>
                  <label
                    htmlFor="dish_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Dish Name
                  </label>
                  <input
                    type="text"
                    name="dish_name"
                    id="dish_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={dishName}
                    onChange={(e) => setDishName(e.target.value)}
                    placeholder="Enter dish name"
                    required
                  />
                </div>

                {/* Dish Description */}
                <div>
                  <label
                    htmlFor="dish_description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Dish Description
                  </label>
                  <textarea
                    name="dish_description"
                    id="dish_description"
                    placeholder="Enter dish description"
                    value={dishDescription}
                    onChange={(e) => setDishDescription(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  ></textarea>
                </div>

                {/* Ingredients Section */}
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Ingredients
                  </h4>
                  <div
                    className="max-h-64 overflow-y-auto space-y-4"
                    style={{ maxHeight: "200px" }} // Ensures scroll appears in the ingredients area
                  >
                    {ingredients.map((ingredient, index) => (
                      <div key={index} className="flex space-x-4 mt-4">
                        <input
                          type="text"
                          placeholder="Name"
                          value={ingredient.name}
                          onChange={(e) =>
                            handleIngredientChange(index, "name", e.target.value)
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                        <input
                          type="number"
                          placeholder="Quantity"
                          value={ingredient.quantity}
                          onChange={(e) =>
                            handleIngredientChange(index, "quantity", e.target.value)
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                        <input
                          type="text"
                          placeholder="Unit"
                          value={ingredient.unit}
                          onChange={(e) =>
                            handleIngredientChange(index, "unit", e.target.value)
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                        <input
                          type="number"
                          placeholder="Calories per Unit"
                          value={ingredient.caloriesPerUnit}
                          onChange={(e) =>
                            handleIngredientChange(index, "caloriesPerUnit", e.target.value)
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={handleIngredientAdd}
                    className="mt-4 w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    + Add Ingredient
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                >
                  Add Dish
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddModel;
