'use client'

import { useCallback } from 'react'

export const useAnalytics = () => {
  const trackEvent = useCallback((action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  }, [])

  const trackPageView = useCallback((url: string, title?: string) => {
    if (typeof window !== 'undefined' && window.gtag && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_title: title,
        page_location: url,
      })
    }
  }, [])

  const trackButtonClick = useCallback((buttonName: string, location?: string) => {
    trackEvent('click', 'button', `${buttonName}${location ? ` - ${location}` : ''}`)
  }, [trackEvent])

  const trackFormSubmit = useCallback((formName: string) => {
    trackEvent('submit', 'form', formName)
  }, [trackEvent])

  const trackDownload = useCallback((fileName: string) => {
    trackEvent('download', 'file', fileName)
  }, [trackEvent])

  const trackPhoneCall = useCallback(() => {
    trackEvent('click', 'contact', 'phone_call')
  }, [trackEvent])

  const trackEmailClick = useCallback(() => {
    trackEvent('click', 'contact', 'email')
  }, [trackEvent])

  return {
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackFormSubmit,
    trackDownload,
    trackPhoneCall,
    trackEmailClick,
  }
}