import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

export interface AiToolResponse {
  strategy: string;
  headlines: string[];
  keywords: string[];
  oversight: string;
  competitor_count: string;
  paid_ad_insights: string;
}