import { create } from "zustand";
import { Product } from "@/type";
import Cookies from "js-cookie";

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  loadCartFromCookies: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],

  // Function to add or update an item in the cart
  addToCart: (product: Product, quantity: number) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id,
      );

      let updatedCartItems;

      if (existingItem) {
        // Update the quantity of the existing item
        updatedCartItems = state.cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      } else {
        // Add the new item to the cart
        updatedCartItems = [
          ...state.cartItems,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity,
          },
        ];
      }

      // Save updated cart to cookies
      Cookies.set("cartItems", JSON.stringify(updatedCartItems), {
        expires: 7,
      });

      return { cartItems: updatedCartItems };
    }),

  // Function to remove an item from the cart
  removeFromCart: (id: number) =>
    set((state) => {
      const updatedCartItems = state.cartItems.filter((item) => item.id !== id);

      // Save updated cart to cookies
      Cookies.set("cartItems", JSON.stringify(updatedCartItems), {
        expires: 7,
      });

      return { cartItems: updatedCartItems };
    }),

  // Function to clear all items from the cart
  clearCart: () => {
    // Clear the cart in state and cookies
    Cookies.remove("cartItems");
    return { cartItems: [] };
  },

  // Load cart items from cookies
  loadCartFromCookies: () => {
    const savedCart = Cookies.get("cartItems");
    if (savedCart) {
      set({ cartItems: JSON.parse(savedCart) });
    }
  },
}));

// Usage example
// In your main component or any entry point
useCartStore.getState().loadCartFromCookies();

//  Without cookies

// interface CartItem {
//   id: number;
//   name: string;
//   price: string;
//   image: string;
//   quantity: number;
// }

// interface CartState {
//   cartItems: CartItem[];
//   addToCart: (product: Product, quantity: number) => void;
//   removeFromCart: (id: number) => void;
//   clearCart: () => void;
//   loadCartFromCookies: () => void;
// }

// export const useCartStore = create<CartState>((set) => ({
//   cartItems: [],

//   // Function to add or update an item in the cart
//   addToCart: (product: Product, quantity: number) =>
//     set((state) => {
//       const existingItem = state.cartItems.find(
//         (item) => item.id === product.id,
//       );

//       let updatedCartItems;

//       if (existingItem) {
//         // Update the quantity of the existing item
//         updatedCartItems = state.cartItems.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item,
//         );
//       } else {
//         // Add the new item to the cart
//         updatedCartItems = [
//           ...state.cartItems,
//           {
//             id: product.id,
//             name: product.name,
//             price: product.price,
//             image: product.image,
//             quantity,
//           },
//         ];
//       }

//       // Save updated cart to cookies
//       Cookies.set("cartItems", JSON.stringify(updatedCartItems), {
//         expires: 7,
//       });

//       return { cartItems: updatedCartItems };
//     }),

//   // Function to remove an item from the cart
//   removeFromCart: (id: number) =>
//     set((state) => {
//       const updatedCartItems = state.cartItems.filter((item) => item.id !== id);

//       // Save updated cart to cookies
//       Cookies.set("cartItems", JSON.stringify(updatedCartItems), {
//         expires: 7,
//       });

//       return { cartItems: updatedCartItems };
//     }),

//   // Function to clear all items from the cart
//   clearCart: () => {
//     // Clear the cart in state and cookies
//     Cookies.remove("cartItems");
//     return { cartItems: [] };
//   },

//   // Load cart items from cookies
//   loadCartFromCookies: () => {
//     const savedCart = Cookies.get("cartItems");
//     if (savedCart) {
//       set({ cartItems: JSON.parse(savedCart) });
//     }
//   },
// }));

// // Usage example
// // In your main component or any entry point
// useCartStore.getState().loadCartFromCookies();
