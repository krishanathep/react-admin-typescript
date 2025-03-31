import axios from "axios";
import { create } from "zustand";

// blogs type definition
export type Blog = {
  id: number;
  title: string;
  content: string;
  author: string;
  image: string;
  created_at: string;
  updated_at: string;
};

// defind the store type
export type BlogsStore = {
  blogs: Blog[];
  isLoading: boolean;
  error: string | null;
  fetchBlogs: () => Promise<void>;
};

// create and export Zustand store
export const useBlogStore = create<BlogsStore>((set) => ({
  blogs: [],
  isLoading: false,
  error: null,
  fetchBlogs: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get<{ blogs: Blog[] }>(
        "https://full-stack-app.com/laravel_auth_jwt_api/public/api/blogs"
      );
      set({ blogs: response.data.blogs, isLoading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Failed to fetch blogs",
        isLoading: false,
      });
    }
  },
}));
