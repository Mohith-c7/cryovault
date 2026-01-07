'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  MessageSquare, 
  Calendar, 
  Mail, 
  Phone, 
  User,
  Clock,
  CheckCircle,
  AlertCircle,
  Search,
  Filter
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/contexts/auth-context'
import { getAllContactSubmissions, getAllAppointments, updateContactSubmissionStatus, updateAppointmentStatus } from '@/lib/contact'
import type { Database } from '@/lib/supabase'

type ContactSubmission = Database['public']['Tables']['contact_submissions']['Row']
type Appointment = Database['public']['Tables']['appointments']['Row']

export default function AdminSubmissionsPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [contacts, setContacts] = useState<ContactSubmission[]>([])
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'contacts' | 'appointments'>('contacts')
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  useEffect(() => {
    if (!loading && (!user || user.profile?.role !== 'admin')) {
      router.push('/login')
      return
    }

    if (user && user.profile?.role === 'admin') {
      loadSubmissions()
    }
  }, [user, loading, router])

  const loadSubmissions = async () => {
    try {
      const [contactsResult, appointmentsResult] = await Promise.all([
        getAllContactSubmissions(),
        getAllAppointments()
      ])

      if (contactsResult.data) {
        setContacts(contactsResult.data)
      }

      if (appointmentsResult.data) {
        setAppointments(appointmentsResult.data)
      }
    } catch (error) {
      // Error loading submissions
    } finally {
      setIsLoading(false)
    }
  }

  const handleUpdateContactStatus = async (id: string, status: string) => {
    try {
      const { error } = await updateContactSubmissionStatus(id, status)
      if (error) throw error

      setContacts(prev =>
        prev.map(contact =>
          contact.id === id ? { ...contact, status } : contact
        )
      )
    } catch (error) {
      // Error updating contact status
    }
  }

  const handleUpdateAppointmentStatus = async (id: string, status: string) => {
    try {
      const { error } = await updateAppointmentStatus(id, status)
      if (error) throw error

      setAppointments(prev =>
        prev.map(appointment =>
          appointment.id === id ? { ...appointment, status } : appointment
        )
      )
    } catch (error) {
      // Error updating appointment status
    }
  }

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = !searchTerm || 
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.subject.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' || contact.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = !searchTerm || 
      appointment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.location?.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' || appointment.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'contacted':
      case 'confirmed':
        return 'bg-blue-100 text-blue-800'
      case 'resolved':
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading || isLoading) {
    return (
      <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading submissions...</p>
        </div>
      </div>
    )
  }

  if (!user || user.profile?.role !== 'admin') {
    return null
  }

  return (
    <main className="w-full min-h-screen bg-gray-50">
      {/* Header */}
      <section className="w-full px-5 md:px-8 py-8 md:py-12 bg-white border-b">
        <div className="mx-auto max-w-7xl">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Link href="/admin" className="text-primary hover:text-primary/80">
                Admin
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Submissions</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Form Submissions
            </h1>
            <p className="text-gray-600">
              View and manage contact forms and appointment bookings
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="w-full px-5 md:px-8 py-6 bg-white border-b">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveTab('contacts')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'contacts'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                Contact Forms ({contacts.length})
              </button>
              <button
                onClick={() => setActiveTab('appointments')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'appointments'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Calendar className="w-4 h-4" />
                Appointments ({appointments.length})
              </button>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="pending">Pending</option>
                <option value="contacted">Contacted</option>
                <option value="confirmed">Confirmed</option>
                <option value="resolved">Resolved</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="w-full px-5 md:px-8 py-8">
        <div className="mx-auto max-w-7xl">
          {activeTab === 'contacts' ? (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {filteredContacts.length === 0 ? (
                <div className="text-center py-12">
                  <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No contact submissions</h3>
                  <p className="text-gray-600">
                    {searchTerm || statusFilter !== 'all'
                      ? 'No submissions match your filters'
                      : 'Contact submissions will appear here'
                    }
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contact Info
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Subject
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Message
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredContacts.map((contact) => (
                        <tr key={contact.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div>
                              <div className="flex items-center text-sm font-medium text-gray-900">
                                <User className="w-4 h-4 mr-2 text-gray-400" />
                                {contact.name}
                              </div>
                              <div className="flex items-center text-sm text-gray-500 mt-1">
                                <Mail className="w-4 h-4 mr-2" />
                                {contact.email}
                              </div>
                              {contact.phone && (
                                <div className="flex items-center text-sm text-gray-500 mt-1">
                                  <Phone className="w-4 h-4 mr-2" />
                                  {contact.phone}
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">
                              {contact.subject}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500 line-clamp-3 max-w-xs">
                              {contact.message}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <select
                              value={contact.status}
                              onChange={(e) => handleUpdateContactStatus(contact.id, e.target.value)}
                              className={`text-xs font-medium px-2.5 py-0.5 rounded-full border-0 ${getStatusColor(contact.status)}`}
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                              <option value="resolved">Resolved</option>
                            </select>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="w-4 h-4 mr-2" />
                              {new Date(contact.created_at).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => window.open(`mailto:${contact.email}?subject=Re: ${contact.subject}`)}
                            >
                              Reply
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {filteredAppointments.length === 0 ? (
                <div className="text-center py-12">
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No appointments</h3>
                  <p className="text-gray-600">
                    {searchTerm || statusFilter !== 'all'
                      ? 'No appointments match your filters'
                      : 'Appointment bookings will appear here'
                    }
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contact Info
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Appointment Details
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Message
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Submitted
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredAppointments.map((appointment) => (
                        <tr key={appointment.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div>
                              <div className="flex items-center text-sm font-medium text-gray-900">
                                <User className="w-4 h-4 mr-2 text-gray-400" />
                                {appointment.name}
                              </div>
                              <div className="flex items-center text-sm text-gray-500 mt-1">
                                <Mail className="w-4 h-4 mr-2" />
                                {appointment.email}
                              </div>
                              <div className="flex items-center text-sm text-gray-500 mt-1">
                                <Phone className="w-4 h-4 mr-2" />
                                {appointment.phone}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm">
                              {appointment.preferred_date && (
                                <div className="flex items-center text-gray-900 mb-1">
                                  <Calendar className="w-4 h-4 mr-2" />
                                  {new Date(appointment.preferred_date).toLocaleDateString()}
                                </div>
                              )}
                              {appointment.preferred_time && (
                                <div className="flex items-center text-gray-500 mb-1">
                                  <Clock className="w-4 h-4 mr-2" />
                                  {appointment.preferred_time}
                                </div>
                              )}
                              {appointment.location && (
                                <div className="text-gray-500">
                                  Location: {appointment.location}
                                </div>
                              )}
                              {appointment.service_type && (
                                <div className="text-gray-500">
                                  Service: {appointment.service_type}
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500 line-clamp-3 max-w-xs">
                              {appointment.message || 'No message'}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <select
                              value={appointment.status}
                              onChange={(e) => handleUpdateAppointmentStatus(appointment.id, e.target.value)}
                              className={`text-xs font-medium px-2.5 py-0.5 rounded-full border-0 ${getStatusColor(appointment.status)}`}
                            >
                              <option value="pending">Pending</option>
                              <option value="confirmed">Confirmed</option>
                              <option value="completed">Completed</option>
                              <option value="cancelled">Cancelled</option>
                            </select>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="w-4 h-4 mr-2" />
                              {new Date(appointment.created_at).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => window.open(`mailto:${appointment.email}?subject=Appointment Confirmation`)}
                            >
                              Contact
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}