import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'
import { create } from 'zustand'

const useCartStore = create((set) => ({
  items: [{id:1,name:'t-shirt',price:12},{id:2,name:'jeans',price:24}],
  addItem: (item: any) => set((state: { items: any }) => ({ items: [...state.items, item] })),
  removeItem: (itemId: any) => set((state: { items: any[] }) => ({
    items: state.items.filter((item: { id: any }) => item.id !== itemId),
  })),
  clearCart: () => set({ items: [] }),
  total: 0,
  updateTotal: () => set((state: { items: any[] }) => ({
    total: state.items.reduce((sum: any, item: { price: any }) => sum + item.price, 0),
  })),
}))

// Usage in components
function App() {
  const { items, total, removeItem } = useCartStore()

  return (
    <div>
      {items.map((item: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; price: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined }) => (
        <div key={item.id}>
          {item.name} - ${item.price}
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <div>Total: ${total}</div>
    </div>
  )
}

export default App
