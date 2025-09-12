import React, { useEffect, useState } from 'react';
import { getMenuItems, createMenuItem } from '../menuService';

export default function MenuComponent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const data = await getMenuItems();
      setItems(data);
    }

    fetchItems();
  }, []);

  const handleAdd = async () => {
    await createMenuItem({
      id: Date.now().toString(),
      name: 'Sushi Roll',
      description: 'Fresh salmon with avocado and rice.',
      price: 14.99,
      imageUrl: 'https://images.unsplash.com/photo-1606788075761-6e51e40b8c5b',
    });

    const data = await getMenuItems();
    setItems(data);
  };

  return (
    <section className="px-4 py-10 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Menu</h2>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
              <span className="text-yellow-500 font-bold text-lg">${item.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}