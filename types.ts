import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ClientTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface InsightItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
  slug: string;
  author: string;
  keywords: string[];
}