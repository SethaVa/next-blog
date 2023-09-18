export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  name: string;
  slug: string;
}

export interface Post {
  title: string;
  slug: string;
  createdAt: string;
  auditor: JSON;
  featuredImage: JSON;
  excerpt: JSON
  id: string
  content: JSON;
  isFeaturePost: boolean;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}
