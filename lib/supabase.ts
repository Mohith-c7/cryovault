import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Types for our database
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string | null
          full_name: string | null
          phone: string | null
          role: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email?: string | null
          full_name?: string | null
          phone?: string | null
          role?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string | null
          full_name?: string | null
          phone?: string | null
          role?: string
          created_at?: string
          updated_at?: string
        }
      }
      blogs: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string | null
          content: string
          image: string | null
          author: string
          date: string
          read_time: string | null
          category: string | null
          tags: string[] | null
          published: boolean
          featured: boolean
          meta_title: string | null
          meta_description: string | null
          view_count: number
          created_at: string
          updated_at: string
          published_at: string | null
        }
        Insert: {
          id?: string
          title: string
          slug: string
          excerpt?: string | null
          content: string
          image?: string | null
          author: string
          date: string
          read_time?: string | null
          category?: string | null
          tags?: string[] | null
          published?: boolean
          featured?: boolean
          meta_title?: string | null
          meta_description?: string | null
          view_count?: number
          created_at?: string
          updated_at?: string
          published_at?: string | null
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          excerpt?: string | null
          content?: string
          image?: string | null
          author?: string
          date?: string
          read_time?: string | null
          category?: string | null
          tags?: string[] | null
          published?: boolean
          featured?: boolean
          meta_title?: string | null
          meta_description?: string | null
          view_count?: number
          created_at?: string
          updated_at?: string
          published_at?: string | null
        }
      }
      contact_submissions: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          subject: string
          message: string
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          subject: string
          message: string
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          subject?: string
          message?: string
          status?: string
          created_at?: string
        }
      }
      appointments: {
        Row: {
          id: string
          user_id: string | null
          name: string
          email: string
          phone: string
          preferred_date: string | null
          preferred_time: string | null
          location: string | null
          service_type: string | null
          message: string | null
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          name: string
          email: string
          phone: string
          preferred_date?: string | null
          preferred_time?: string | null
          location?: string | null
          service_type?: string | null
          message?: string | null
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          name?: string
          email?: string
          phone?: string
          preferred_date?: string | null
          preferred_time?: string | null
          location?: string | null
          service_type?: string | null
          message?: string | null
          status?: string
          created_at?: string
        }
      }
    }
  }
}
