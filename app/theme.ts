import { createTheme } from '@mantine/core';

// Professional enterprise-grade light theme for YieldGuard
export const customTheme = createTheme({
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  headings: { 
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontWeight: '800',
  },
  primaryColor: 'blue',
  defaultRadius: 'md',
  colors: {
    // Modern teal/green - Primary
    teal: [
      '#d0fef0',
      '#a3f5e1',
      '#6eedc8',
      '#3fe4ae',
      '#10b981',
      '#059669',
      '#047857',
      '#065f46',
      '#064e3b',
      '#022c22',
    ],
    // Deep blue - Accent
    blue: [
      '#dbeafe',
      '#bfdbfe',
      '#93c5fd',
      '#60a5fa',
      '#3b82f6',
      '#2563eb',
      '#1d4ed8',
      '#1e40af',
      '#1e3a8a',
      '#172554',
    ],
    // Slate - Dark backgrounds
    dark: [
      '#f8fafc',
      '#f1f5f9',
      '#e2e8f0',
      '#cbd5e1',
      '#94a3b8',
      '#64748b',
      '#475569',
      '#334155',
      '#1e293b',
      '#0f172a',
    ],
  },
  white: '#ffffff',
  black: '#0a0f1a',
  shadows: {
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.15)',
    sm: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.12)',
    md: '0 4px 8px -2px rgba(0, 0, 0, 0.25), 0 2px 4px -1px rgba(0, 0, 0, 0.15)',
    lg: '0 12px 24px -4px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.18)',
    xl: '0 24px 48px -12px rgba(0, 0, 0, 0.35), 0 12px 16px -6px rgba(0, 0, 0, 0.2)',
  },
  other: {
    gradients: {
      primary: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      secondary: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      dark: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      success: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
      warning: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      danger: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    },
  },
});

export default customTheme;

