'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, ArrowLeft, Loader2, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { supabase } from '@/lib/supabase'
import { toast } from 'sonner'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Email is required')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email')
      return
    }

    setIsLoading(true)

    try {
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      })

      if (resetError) {
        toast.error(resetError.message || 'Failed to send reset email')
        setError(resetError.message || 'Failed to send reset email')
      } else {
        setIsSubmitted(true)
        toast.success('Password reset email sent!')
      }
    } catch (err) {
      toast.error('An unexpected error occurred')
      console.error('Password reset error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="flex flex-col justify-center items-center min-h-screen p-6 md:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Back Link */}
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Login
          </Link>

          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-semibold text-foreground">
                  Reset Password
                </h1>
                <p className="text-muted-foreground">
                  Enter your email address and we'll send you a link to reset your password.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (error) setError('')
                      }}
                      className={`pl-12 h-12 text-base border-2 transition-colors ${
                        error
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-border focus:border-primary'
                      }`}
                      disabled={isLoading}
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <span>•</span> {error}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Reset Link'
                  )}
                </Button>
              </form>
            </>
          ) : (
            <>
              {/* Success Message */}
              <div className="space-y-6 text-center">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-foreground">Check your email</h2>
                  <p className="text-muted-foreground">
                    We've sent a password reset link to <span className="font-medium text-foreground">{email}</span>
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
                  <p className="text-sm text-blue-900">
                    <span className="font-semibold">Tip:</span> If you don't see the email, check your spam folder or contact our support team.
                  </p>
                </div>

                <Button
                  asChild
                  className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Link href="/login">Back to Login</Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
