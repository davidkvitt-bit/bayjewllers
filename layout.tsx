@import 'tailwindcss';
@import 'tw-animate-css';

@custom-variant dark (&:is(.dark *));

:root {
  /* Luxury Black & White with Gold - Bay Jewellers */
  --background: oklch(0.99 0.002 90); /* Warm off-white / ivory */
  --foreground: oklch(0.12 0.01 60); /* Rich deep charcoal */
  --card: oklch(1 0 0); /* Pure white */
  --card-foreground: oklch(0.12 0.01 60);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.12 0.01 60);
  --primary: oklch(0.12 0.01 60); /* Deep black for buttons */
  --primary-foreground: oklch(0.99 0.002 90);
  --secondary: oklch(0.96 0.005 90); /* Light warm grey */
  --secondary-foreground: oklch(0.12 0.01 60);
  --muted: oklch(0.94 0.004 90);
  --muted-foreground: oklch(0.45 0.01 60);
  --accent: oklch(0.40 0.01 60); /* Subtle dark grey accent */
  --accent-foreground: oklch(0.99 0.002 90);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.90 0.005 90);
  --input: oklch(0.92 0.004 90);
  --ring: oklch(0.40 0.01 60); /* Subtle ring */
  --chart-1: oklch(0.75 0.12 85);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.125rem; /* Minimal radius for luxury feel */
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.12 0.01 60);
  --sidebar-primary: oklch(0.12 0.01 60);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.96 0.005 90);
  --sidebar-accent-foreground: oklch(0.12 0.01 60);
  --sidebar-border: oklch(0.90 0.005 90);
  --sidebar-ring: oklch(0.75 0.12 85);
  
  /* Custom tokens - subtle neutrals */
  --gold: oklch(0.55 0.01 60);
  --gold-light: oklch(0.70 0.01 60);
  --gold-dark: oklch(0.35 0.01 60);
}

.dark {
  --background: oklch(0.10 0.01 60);
  --foreground: oklch(0.96 0.005 90);
  --card: oklch(0.14 0.01 60);
  --card-foreground: oklch(0.96 0.005 90);
  --popover: oklch(0.14 0.01 60);
  --popover-foreground: oklch(0.96 0.005 90);
  --primary: oklch(0.96 0.005 90);
  --primary-foreground: oklch(0.10 0.01 60);
  --secondary: oklch(0.20 0.01 60);
  --secondary-foreground: oklch(0.96 0.005 90);
  --muted: oklch(0.25 0.01 60);
  --muted-foreground: oklch(0.60 0.01 60);
  --accent: oklch(0.75 0.12 85);
  --accent-foreground: oklch(0.10 0.01 60);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.25 0.01 60);
  --input: oklch(0.25 0.01 60);
  --ring: oklch(0.75 0.12 85);
  --chart-1: oklch(0.75 0.12 85);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.14 0.01 60);
  --sidebar-foreground: oklch(0.96 0.005 90);
  --sidebar-primary: oklch(0.75 0.12 85);
  --sidebar-primary-foreground: oklch(0.96 0.005 90);
  --sidebar-accent: oklch(0.20 0.01 60);
  --sidebar-accent-foreground: oklch(0.96 0.005 90);
  --sidebar-border: oklch(0.25 0.01 60);
  --sidebar-ring: oklch(0.75 0.12 85);
  
  --gold: oklch(0.55 0.01 60);
  --gold-light: oklch(0.70 0.01 60);
  --gold-dark: oklch(0.35 0.01 60);
}

@theme inline {
  --font-sans: 'Cormorant Garamond', 'Georgia', serif;
  --font-mono: 'Geist Mono', 'Geist Mono Fallback';
  --font-serif: 'Cormorant Garamond', 'Georgia', serif;
  --font-display: 'Cormorant Garamond', 'Georgia', serif;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 2px);
  --radius-md: var(--radius);
  --radius-lg: calc(var(--radius) + 2px);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-gold: var(--gold);
  --color-gold-light: var(--gold-light);
  --color-gold-dark: var(--gold-dark);
}

/* Custom utilities for gold colors */
.text-gold-light {
  color: var(--gold-light);
}

.text-gold-dark {
  color: var(--gold-dark);
}

.bg-gold {
  background-color: var(--gold);
}

.bg-gold-light {
  background-color: var(--gold-light);
}

.border-gold {
  border-color: var(--gold);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
  
  /* Luxury typography refinements */
  h1, h2, h3, h4, h5, h6 {
    @apply tracking-tight;
  }
  
  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
}

/* Custom scrollbar for luxury feel */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--muted-foreground);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--foreground);
}
