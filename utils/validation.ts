// RFC 5322 compliant email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// Allowed characters for names: letters, spaces, hyphens, apostrophes
const NAME_REGEX = /^[a-zA-Z\s'-]+$/;

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormValidation {
  isValid: boolean;
  errors: {
    name?: string;
    email?: string;
    message?: string;
  };
}

export function validateEmail(email: string): boolean {
  if (!email || email.trim().length === 0) {
    return false;
  }
  return EMAIL_REGEX.test(email.trim());
}

export function validateName(name: string): { isValid: boolean; error?: string } {
  const trimmedName = name.trim();
  
  if (!trimmedName || trimmedName.length === 0) {
    return { isValid: false, error: 'Name is required' };
  }
  
  if (trimmedName.length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters' };
  }
  
  if (trimmedName.length > 100) {
    return { isValid: false, error: 'Name must not exceed 100 characters' };
  }
  
  if (!NAME_REGEX.test(trimmedName)) {
    return { isValid: false, error: 'Name contains invalid characters' };
  }
  
  return { isValid: true };
}

export function validateMessage(message: string): { isValid: boolean; error?: string } {
  const trimmedMessage = message.trim();
  
  if (!trimmedMessage || trimmedMessage.length === 0) {
    return { isValid: false, error: 'Message is required' };
  }
  
  if (trimmedMessage.length < 10) {
    return { isValid: false, error: 'Message must be at least 10 characters' };
  }
  
  if (trimmedMessage.length > 5000) {
    return { isValid: false, error: 'Message must not exceed 5000 characters' };
  }
  
  return { isValid: true };
}

export function validateForm(data: ContactFormData): ContactFormValidation {
  const errors: Record<string, string> = {};
  
  const nameValidation = validateName(data.name);
  if (!nameValidation.isValid) {
    errors.name = nameValidation.error!;
  }
  
  if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  const messageValidation = validateMessage(data.message);
  if (!messageValidation.isValid) {
    errors.message = messageValidation.error!;
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
