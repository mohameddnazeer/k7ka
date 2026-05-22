import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ children, onClose, className = '', ariaLabel, showScrollIndicator = true, onProgress }) {
  const contentRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose?.(); }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  useEffect(() => {
    if (!showScrollIndicator) return
    const el = contentRef.current
    if (!el) return
    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight
      const pct = max > 0 ? (el.scrollTop / max) * 100 : 0
      const clamped = Math.min(100, Math.max(0, pct))
      setProgress(clamped)
      if (typeof onProgress === 'function') onProgress(clamped)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    // init
    onScroll()
    return () => el.removeEventListener('scroll', onScroll)
  }, [showScrollIndicator])

  if (typeof document === 'undefined') return null

  return createPortal(
    <div onClick={onClose} className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 p-4">
      <div role="dialog" aria-label={ariaLabel || 'modal'} onClick={(e) => e.stopPropagation()} className={`relative ${className}`} ref={contentRef}>
        {showScrollIndicator && (
          <div className="absolute inset-x-0 top-0 h-0.5 bg-transparent z-20">
            <div style={{ width: `${progress}%` }} className="h-full bg-brand-ink transition-all duration-150"></div>
          </div>
        )}
        {children}
      </div>
    </div>,
    document.body
  )
}
