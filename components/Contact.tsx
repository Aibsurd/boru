import React, { useState, memo } from 'react';
import { ArrowRight, CheckCircle2, Loader2, MapPin, Mail } from './Icons';
import { validateForm, ContactFormData } from '../utils/validation';
import { submitContactForm } from '../services/formService';

const Contact = memo(() => {
  const [formState, setFormState] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'validating' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    setStatus('validating');
    const validation = validateForm(formState);
    
    if (!validation.isValid) {
      setValidationErrors(validation.errors);
      setStatus('idle');
      return;
    }
    
    setValidationErrors({});
    setStatus('submitting');
    
    try {
      await submitContactForm(formState);
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      
      // Reset status after delay
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : 'Unable to submit form. Please try again or contact us directly.'
      );
      
      // Reset error status after delay
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 8000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    // Clear validation error for this field when user starts typing
    if (validationErrors[e.target.name]) {
      setValidationErrors({ ...validationErrors, [e.target.name]: '' });
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-warm-50 dark:bg-zinc-975 relative border-t border-zinc-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* LEFT COLUMN: Header & Info */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="mb-12">
              <span className="text-gold-600 dark:text-gold-500 text-[10px] font-semibold tracking-[0.3em] uppercase mb-6 block">Inquiry</span>
              <h2 className="font-serif text-4xl md:text-6xl text-zinc-900 dark:text-white mb-6 leading-tight font-medium tracking-tight transition-colors duration-500">Start the dialogue</h2>
              <p className="text-zinc-600 dark:text-zinc-500 text-base md:text-lg font-light leading-[160%] text-balance transition-colors duration-500">
                We are selective with our engagements. Please provide brief details regarding your strategic requirements.
              </p>
            </div>

            <div className="mt-auto hidden lg:block space-y-10 border-t border-zinc-200 dark:border-white/5 pt-10 transition-colors duration-500">
               <div itemScope itemType="https://schema.org/Organization">
                  <div className="flex items-center gap-3 mb-3 text-zinc-900 dark:text-white transition-colors duration-500">
                      <MapPin className="w-4 h-4 text-gold-600 dark:text-gold-500" />
                      <h4 className="font-serif text-xl font-medium tracking-tight" itemProp="location">United Kingdom</h4>
                  </div>
                  <div className="pl-7 text-zinc-500 text-sm space-y-1 font-light">
                    <span itemProp="legalName" className="block text-zinc-600 dark:text-zinc-400">Boru Global (UK) Limited</span>
                    <span className="block">Registered in England & Wales</span>
                    <span className="block">Co. No. <span itemProp="identifier">14435343</span></span>
                    <a href="tel:+4402034112148" className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors mt-2" itemProp="telephone">+44 (0)20 341 121 48</a>
                  </div>
               </div>

               <div itemScope itemType="https://schema.org/Organization">
                   <div className="flex items-center gap-3 mb-3 text-zinc-900 dark:text-white transition-colors duration-500">
                      <MapPin className="w-4 h-4 text-gold-600 dark:text-gold-500" />
                      <h4 className="font-serif text-xl font-medium tracking-tight" itemProp="location">United Arab Emirates</h4>
                  </div>
                  <div className="pl-7 text-zinc-500 text-sm space-y-1 font-light">
                    <span itemProp="legalName" className="block text-zinc-600 dark:text-zinc-400">Boru Consulting L.L.C-FZ</span>
                    <span className="block">Registered in U.A.E.</span>
                    <span className="block">Co. No. <span itemProp="identifier">2415755</span></span>
                    <a href="tel:+9710504354530" className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors mt-2" itemProp="telephone">+971 (0)50 435 4530</a>
                  </div>
               </div>

               <div>
                   <div className="flex items-center gap-3 mb-3 text-zinc-900 dark:text-white transition-colors duration-500">
                      <Mail className="w-4 h-4 text-gold-600 dark:text-gold-500" />
                      <h4 className="font-serif text-xl font-medium tracking-tight">Electronic</h4>
                  </div>
                  <div className="pl-7 space-y-1 font-light">
                     <a href="mailto:rlm@boru-consulting.com" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm block">rlm@boru-consulting.com</a>
                     <a href="mailto:jl@boru-consulting.com" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm block">jl@boru-consulting.com</a>
                  </div>
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Form */}
          <div className="lg:col-span-7 lg:pl-12 lg:border-l border-zinc-200 dark:border-white/5 transition-colors duration-500">
            {/* ARIA live region for screen readers */}
            <div 
              role="status" 
              aria-live="polite" 
              aria-atomic="true"
              className="sr-only"
            >
              {status === 'success' && 'Form submitted successfully'}
              {status === 'error' && errorMessage}
            </div>

            <form onSubmit={handleSubmit} className="space-y-10 relative h-full flex flex-col justify-center" aria-label="Contact form">
              {/* Success Overlay */}
              {status === 'success' && (
                <div className="absolute inset-0 bg-warm-50/95 dark:bg-zinc-975/95 backdrop-blur-sm z-20 flex items-center justify-center animate-fade-in border border-zinc-200 dark:border-white/10 rounded-lg">
                    <div className="text-center p-8">
                        <CheckCircle2 className="w-12 h-12 text-gold-600 dark:text-gold-500 mx-auto mb-4" />
                        <h3 className="text-3xl font-serif text-zinc-900 dark:text-white mb-2 font-medium">Request Received</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm font-light">Our partners will review your inquiry shortly.</p>
                    </div>
                </div>
              )}

              {/* Error Message */}
              {status === 'error' && errorMessage && (
                <div className="p-4 border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded text-red-800 dark:text-red-300 text-sm">
                  {errorMessage}
                </div>
              )}

              <fieldset disabled={status === 'submitting' || status === 'success'} className="space-y-12 border-none p-0 m-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="group relative">
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-800 py-3 text-zinc-900 dark:text-white text-lg focus:outline-none focus:border-gold-600 dark:focus:border-gold-500 transition-colors peer placeholder-transparent font-sans font-light disabled:opacity-50"
                      placeholder="Name"
                      onChange={handleChange}
                      aria-invalid={!!validationErrors.name}
                      aria-describedby={validationErrors.name ? "name-error" : undefined}
                    />
                    <label 
                      htmlFor="name-input"
                      className="absolute left-0 top-0 text-zinc-500 dark:text-zinc-600 text-[10px] uppercase tracking-[0.2em] transition-all peer-focus:-top-5 peer-focus:text-gold-600 dark:peer-focus:text-gold-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs cursor-text pointer-events-none"
                    >
                      Name
                    </label>
                    {validationErrors.name && (
                      <p id="name-error" className="text-red-600 dark:text-red-400 text-xs mt-1">{validationErrors.name}</p>
                    )}
                  </div>
                  <div className="group relative">
                    <input
                      id="email-input"
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-800 py-3 text-zinc-900 dark:text-white text-lg focus:outline-none focus:border-gold-600 dark:focus:border-gold-500 transition-colors peer placeholder-transparent font-sans font-light disabled:opacity-50"
                      placeholder="Email"
                      onChange={handleChange}
                      aria-invalid={!!validationErrors.email}
                      aria-describedby={validationErrors.email ? "email-error" : undefined}
                    />
                    <label 
                      htmlFor="email-input"
                      className="absolute left-0 top-0 text-zinc-500 dark:text-zinc-600 text-[10px] uppercase tracking-[0.2em] transition-all peer-focus:-top-5 peer-focus:text-gold-600 dark:peer-focus:text-gold-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs cursor-text pointer-events-none"
                    >
                      Email
                    </label>
                    {validationErrors.email && (
                      <p id="email-error" className="text-red-600 dark:text-red-400 text-xs mt-1">{validationErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="group relative">
                  <textarea
                    id="message-input"
                    name="message"
                    rows={4}
                    required
                    value={formState.message}
                    className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-800 py-3 text-zinc-900 dark:text-white text-lg focus:outline-none focus:border-gold-600 dark:focus:border-gold-500 transition-colors peer placeholder-transparent resize-none font-sans font-light disabled:opacity-50 leading-relaxed"
                    placeholder="Context"
                    onChange={handleChange}
                    aria-invalid={!!validationErrors.message}
                    aria-describedby={validationErrors.message ? "message-error" : undefined}
                  ></textarea>
                  <label 
                    htmlFor="message-input"
                    className="absolute left-0 top-0 text-zinc-500 dark:text-zinc-600 text-[10px] uppercase tracking-[0.2em] transition-all peer-focus:-top-5 peer-focus:text-gold-600 dark:peer-focus:text-gold-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs cursor-text pointer-events-none"
                  >
                    Strategic Context
                  </label>
                  {validationErrors.message && (
                    <p id="message-error" className="text-red-600 dark:text-red-400 text-xs mt-1">{validationErrors.message}</p>
                  )}
                </div>
              </fieldset>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className="group flex items-center gap-4 text-zinc-900 dark:text-white hover:text-gold-600 dark:hover:text-gold-500 transition-colors focus:outline-none disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                      <>
                        <span className="text-[10px] uppercase tracking-[0.3em]">Processing</span>
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </>
                  ) : (
                      <>
                        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Submit Request</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* MOBILE ONLY: Contact Details */}
          <div className="lg:hidden mt-12 pt-12 border-t border-zinc-200 dark:border-white/5 grid grid-cols-1 md:grid-cols-2 gap-12 transition-colors duration-500">
             <div itemScope itemType="https://schema.org/Organization">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-4 h-4 text-gold-600 dark:text-gold-500" />
                  <h4 className="text-zinc-900 dark:text-white font-serif text-xl font-medium tracking-tight" itemProp="location">United Kingdom</h4>
                </div>
                <div className="pl-7 text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed mb-4 font-light">
                  <span itemProp="legalName">Boru Global (UK) Limited</span><br/>
                  Registered in England & Wales<br/>
                  Company No. <span itemProp="identifier">14435343</span>
                </div>
                <a href="tel:+4402034112148" className="pl-7 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm block" itemProp="telephone">+44 (0)20 341 121 48</a>
            </div>
            <div itemScope itemType="https://schema.org/Organization">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-4 h-4 text-gold-600 dark:text-gold-500" />
                  <h4 className="text-zinc-900 dark:text-white font-serif text-xl font-medium tracking-tight" itemProp="location">United Arab Emirates</h4>
                </div>
                <div className="pl-7 text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed mb-4 font-light">
                  <span itemProp="legalName">Boru Consulting L.L.C-FZ</span><br/>
                  Registered in U.A.E.<br/>
                  Company No. <span itemProp="identifier">2415755</span>
                </div>
                <a href="tel:+9710504354530" className="pl-7 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm block" itemProp="telephone">+971 (0)50 435 4530</a>
            </div>
            <div>
                 <div className="flex items-center gap-3 mb-4">
                   <Mail className="w-4 h-4 text-gold-600 dark:text-gold-500" />
                   <h4 className="text-zinc-900 dark:text-white font-serif text-xl font-medium tracking-tight">Contact</h4>
                 </div>
                 <div className="pl-7 space-y-1 font-light">
                   <a href="mailto:rlm@boru-consulting.com" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm block">rlm@boru-consulting.com</a>
                   <a href="mailto:jl@boru-consulting.com" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm block">jl@boru-consulting.com</a>
                 </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
});

export default Contact;