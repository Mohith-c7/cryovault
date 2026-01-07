import { supabase } from './supabase'
import type { User } from '@supabase/supabase-js'

export interface AuthUser extends User {
  profile?: {
    full_name: string | null
    phone: string | null
    role: string
  }
}

// Sign up with email and password
export const signUp = async (email: string, password: string, fullName: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
      emailRedirectTo: `${window.location.origin}/login?verified=true`
    },
  })
  
  return { data, error }
}

// Sign in with email and password
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  
  return { data, error }
}

// Sign out
export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

// Get current user
export const getCurrentUser = async (): Promise<AuthUser | null> => {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) return null
  
  // Get user profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name, phone, role')
    .eq('id', user.id)
    .single()
  
  return {
    ...user,
    profile: profile || { full_name: null, phone: null, role: 'customer' }
  }
}

// Update user profile
export const updateProfile = async (updates: {
  full_name?: string
  phone?: string
}) => {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) throw new Error('No user found')
  
  const { data, error } = await supabase
    .from('profiles')
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq('id', user.id)
    .select()
    .single()
  
  return { data, error }
}

// Reset password
export const resetPassword = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  })
  
  return { data, error }
}

// Update password
export const updatePassword = async (password: string) => {
  const { data, error } = await supabase.auth.updateUser({
    password,
  })
  
  return { data, error }
}