import { ContactFormData } from '../utils/validation';

export interface FormResponse {
  success: boolean;
  message?: string;
}

export async function submitContactForm(data: ContactFormData): Promise<FormResponse> {
  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  
  if (!FORMSPREE_ENDPOINT) {
    throw new Error('Form submission endpoint not configured');
  }
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: data.name.trim(),
        email: data.email.trim(),
        message: data.message.trim()
      }),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Form submission failed');
    }
    
    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Request timed out. Please try again.');
      }
      throw error;
    }
    throw new Error('An unexpected error occurred');
  }
}
