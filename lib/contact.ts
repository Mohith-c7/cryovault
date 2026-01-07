import { supabase } from './supabase'
import type { Database } from './supabase'

type ContactSubmission = Database['public']['Tables']['contact_submissions']['Row']
type ContactSubmissionInsert = Database['public']['Tables']['contact_submissions']['Insert']
type Appointment = Database['public']['Tables']['appointments']['Row']
type AppointmentInsert = Database['public']['Tables']['appointments']['Insert']

// Contact Submissions

// Create contact submission
export const createContactSubmission = async (submission: ContactSubmissionInsert) => {
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert({
      ...submission,
      created_at: new Date().toISOString(),
    })
    .select()
    .single()

  return { data, error }
}

// Get all contact submissions (admin only)
export const getAllContactSubmissions = async () => {
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })

  return { data, error }
}

// Update contact submission status
export const updateContactSubmissionStatus = async (id: string, status: string) => {
  const { data, error } = await supabase
    .from('contact_submissions')
    .update({ status })
    .eq('id', id)
    .select()
    .single()

  return { data, error }
}

// Appointments

// Create appointment
export const createAppointment = async (appointment: AppointmentInsert) => {
  const { data, error } = await supabase
    .from('appointments')
    .insert({
      ...appointment,
      created_at: new Date().toISOString(),
    })
    .select()
    .single()

  return { data, error }
}

// Get all appointments (admin only)
export const getAllAppointments = async () => {
  const { data, error } = await supabase
    .from('appointments')
    .select('*')
    .order('created_at', { ascending: false })

  return { data, error }
}

// Get user appointments
export const getUserAppointments = async (userId: string) => {
  const { data, error } = await supabase
    .from('appointments')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  return { data, error }
}

// Update appointment status
export const updateAppointmentStatus = async (id: string, status: string) => {
  const { data, error } = await supabase
    .from('appointments')
    .update({ status })
    .eq('id', id)
    .select()
    .single()

  return { data, error }
}