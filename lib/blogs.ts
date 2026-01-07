import { supabase } from './supabase'
import type { Database } from './supabase'

type Blog = Database['public']['Tables']['blogs']['Row']
type BlogInsert = Database['public']['Tables']['blogs']['Insert']
type BlogUpdate = Database['public']['Tables']['blogs']['Update']

// Get all published blogs
export const getPublishedBlogs = async (limit?: number) => {
  let query = supabase
    .from('blogs')
    .select('*')
    .eq('published', true)
    .order('date', { ascending: false })

  if (limit) {
    query = query.limit(limit)
  }

  const { data, error } = await query

  return { data, error }
}

// Get featured blogs
export const getFeaturedBlogs = async (limit: number = 3) => {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('published', true)
    .eq('featured', true)
    .order('date', { ascending: false })
    .limit(limit)

  return { data, error }
}

// Get blog by slug
export const getBlogBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  return { data, error }
}

// Get blogs by category
export const getBlogsByCategory = async (category: string, limit?: number) => {
  let query = supabase
    .from('blogs')
    .select('*')
    .eq('published', true)
    .eq('category', category)
    .order('date', { ascending: false })

  if (limit) {
    query = query.limit(limit)
  }

  const { data, error } = await query

  return { data, error }
}

// Search blogs
export const searchBlogs = async (searchTerm: string) => {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('published', true)
    .or(`title.ilike.%${searchTerm}%,excerpt.ilike.%${searchTerm}%,content.ilike.%${searchTerm}%`)
    .order('date', { ascending: false })

  return { data, error }
}

// Increment blog view count
export const incrementBlogViews = async (blogId: string) => {
  const { error } = await supabase.rpc('increment_blog_views', {
    blog_id: blogId
  })

  return { error }
}

// Get blog categories
export const getBlogCategories = async () => {
  const { data, error } = await supabase
    .from('blogs')
    .select('category')
    .eq('published', true)
    .not('category', 'is', null)

  if (error) return { data: [], error }

  // Get unique categories
  const categories = [...new Set(data.map(blog => blog.category))]
  
  return { data: categories, error: null }
}

// Admin functions (require admin role)

// Create blog
export const createBlog = async (blog: BlogInsert) => {
  const { data, error } = await supabase
    .from('blogs')
    .insert({
      ...blog,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .select()
    .single()

  return { data, error }
}

// Update blog
export const updateBlog = async (id: string, updates: BlogUpdate) => {
  const { data, error } = await supabase
    .from('blogs')
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single()

  return { data, error }
}

// Delete blog
export const deleteBlog = async (id: string) => {
  const { error } = await supabase
    .from('blogs')
    .delete()
    .eq('id', id)

  return { error }
}

// Get all blogs (admin only)
export const getAllBlogs = async () => {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false })

  return { data, error }
}