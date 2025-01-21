import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../common/Footer';

const AddDishForm = () => {
  const [formData, setFormData] = useState({
    dishName: '',
    dishImage: '',
    ingredients: [{ name: '', quantity: '', unit: '', caloriesPerUnit: '' }]
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleIngredientChange = (index, e) => {
    const { name, value } = e.target;
    const newIngredients = [...formData.ingredients];
    newIngredients[index][name] = value;
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const addIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, { name: '', quantity: '', unit: '', caloriesPerUnit: '' }]
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, dishImage: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        console.log(formData)
      const response = await axios.post('https://nutri-scan-baqj.onrender.com/api/dish/', formData);
      setMessage('Dish added successfully!');
      setFormData({
        dishName: '',
        dishImage: '',
        ingredients: [{ name: '', quantity: '', unit: '', caloriesPerUnit: '' }]
      });
    //   console.log(formData)
    } catch (error) {
      setMessage('Failed to add dish. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <section className="py-20 px-6 bg-yellow-50">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-yellow-500 mb-6">Add New Dish</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
              <div className="mb-4">
                <input
                  type="text"
                  name="dishName"
                  placeholder="Dish Name"
                  value={formData.dishName}
                  onChange={handleInputChange}
                  className="px-4 py-2 w-full rounded border"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="file"
                  name="dishImage"
                  onChange={handleImageUpload}
                  className="px-4 py-2 w-full rounded border"
                  required
                />
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
                {formData.ingredients.map((ingredient, index) => (
                  <div key={index} className="mb-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Ingredient Name"
                      value={ingredient.name}
                      onChange={(e) => handleIngredientChange(index, e)}
                      className="px-4 py-2 w-full rounded border mb-2"
                      required
                    />
                    <input
                      type="number"
                      name="quantity"
                      placeholder="Quantity"
                      value={ingredient.quantity}
                      onChange={(e) => handleIngredientChange(index, e)}
                      className="px-4 py-2 w-full rounded border mb-2"
                      required
                    />
                    <input
                      type="text"
                      name="unit"
                      placeholder="Unit"
                      value={ingredient.unit}
                      onChange={(e) => handleIngredientChange(index, e)}
                      className="px-4 py-2 w-full rounded border mb-2"
                      required
                    />
                    <input
                      type="number"
                      name="caloriesPerUnit"
                      placeholder="Calories Per Unit"
                      value={ingredient.caloriesPerUnit}
                      onChange={(e) => handleIngredientChange(index, e)}
                      className="px-4 py-2 w-full rounded border"
                      required
                    />
                  </div>
                ))}
                <button type="button" onClick={addIngredient} className="px-4 py-2 bg-blue-500 text-white rounded">Add Ingredient</button>
              </div>
              <button type="submit" className="px-6 py-2 bg-green-500 text-white rounded">Submit</button>
            </form>
            {message && <p className="mt-4 text-red-500">{message}</p>}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AddDishForm;

