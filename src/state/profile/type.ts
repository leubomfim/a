interface Review {
  id: string;
  productId: string;
  rating: number;
  Product: ProductState[];
}

interface ProductState {
  id: string;
  description: string;
  name: string;
  price: number;
  userId: string;
  userName: string;
  userEmail: string;
  userPhoto: string;
  stock: number;
  discount: number;
  image_url: string;
  freight: number;
  comments: unknown[];
  rating: number;
  reviews: Review[];
  purchased: number;
}

export type { ProductState };
