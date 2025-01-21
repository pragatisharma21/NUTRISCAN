
import React, { useEffect, useState } from "react";
import axios from "axios";

const InventoryPage = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axios.get("https://nutri-scan-baqj.onrender.com/api/dish/getAllDishes");
        console.log(response);
        setDishes(response.data.dishes);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch dishes. Please try again later.");
        setLoading(false);
      }
    };

    fetchDishes();
  }, []);

  if (loading) return <div className="text-center text-lg font-medium mt-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 font-medium mt-10">{error}</div>;

  return (
    <>
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Dish Inventory</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dishes.map((dish) => (
          <div key={dish._id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={dish.dishImage} alt={dish.dishName} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{dish.dishName}</h2>
              <h3 className="text-lg font-medium mb-2">Ingredients:</h3>
              <ul className="list-disc list-inside space-y-1">
                {dish.ingredients.map((ingredient) => (
                  <li key={ingredient._id}>
                    {ingredient.name} - {ingredient.quantity} {ingredient.unit} ({ingredient.caloriesPerUnit} cal/unit)
                  </li>
                ))}
              </ul>
              <a
                href={dish.qrCode}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-blue-500 hover:underline text-center"
              >
                View QR Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default InventoryPage;
