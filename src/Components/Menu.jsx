import React, { useEffect, useState } from 'react';
import { getMenuItems, createMenuItem, deleteMenuItem } from '../menuService';
import { FaTrash } from 'react-icons/fa';

export default function MenuComponent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await getMenuItems();
    setItems(data);
  };

  const handleAdd = async () => {
    await createMenuItem({
      id: Date.now().toString(),
      name: 'Sushi Roll',
      description: 'Fresh salmon with avocado and rice.',
      price: 14.99,
    });
    fetchItems();
  };

  const handleDelete = async (id) => {
    await deleteMenuItem(id);
    fetchItems();
  };

  return (
    <section className="px-4 py-10 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Menu</h2>
        <button
          onClick={handleAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-sm sm:text-base"
        >
          Add Item
        </button>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full bg-white border border-gray-200 shadow-sm rounded-lg text-sm sm:text-base">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              {/* Removed Image header */}
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Description</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ? (
              items.map((item) => (
                <tr key={item.id} className="border-t hover:bg-gray-50">
                  {/* Removed Image cell */}
                  <td className="px-4 py-3 font-medium text-gray-800">{item.name}</td>
                  <td className="px-4 py-3 text-gray-600">{item.description}</td>
                  <td className="px-4 py-3 text-yellow-600 font-semibold">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors text-lg"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-4 py-6 text-center text-gray-500">
                  No menu items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}