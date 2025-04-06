import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'steam-rise-1': {
					'0%': { transform: 'translateY(0) translateX(0) scale(0.5) rotate(-5deg)', opacity: '0.7' },
					'25%': { transform: 'translateY(-10px) translateX(-3px) scale(0.8) rotate(-2deg)', opacity: '0.8' },
					'50%': { transform: 'translateY(-25px) translateX(-5px) scale(1) rotate(0deg)', opacity: '0.6' },
					'75%': { transform: 'translateY(-40px) translateX(-7px) scale(1.2) rotate(2deg)', opacity: '0.3' },
					'100%': { transform: 'translateY(-60px) translateX(-10px) scale(1.5) rotate(5deg)', opacity: '0' }
				},
				'steam-rise-2': {
					'0%': { transform: 'translateY(0) translateX(0) scale(0.5) rotate(5deg)', opacity: '0.7' },
					'25%': { transform: 'translateY(-15px) translateX(3px) scale(0.8) rotate(2deg)', opacity: '0.8' },
					'50%': { transform: 'translateY(-30px) translateX(5px) scale(1) rotate(0deg)', opacity: '0.6' },
					'75%': { transform: 'translateY(-45px) translateX(7px) scale(1.2) rotate(-2deg)', opacity: '0.3' },
					'100%': { transform: 'translateY(-70px) translateX(10px) scale(1.5) rotate(-5deg)', opacity: '0' }
				},
				'steam-rise-3': {
					'0%': { transform: 'translateY(0) translateX(0) scale(0.5) rotate(0deg)', opacity: '0.7' },
					'25%': { transform: 'translateY(-20px) translateX(0px) scale(0.8) rotate(2deg)', opacity: '0.8' },
					'50%': { transform: 'translateY(-40px) translateX(0px) scale(1) rotate(-2deg)', opacity: '0.6' },
					'75%': { transform: 'translateY(-60px) translateX(0px) scale(1.2) rotate(0deg)', opacity: '0.3' },
					'100%': { transform: 'translateY(-80px) translateX(0px) scale(1.5) rotate(2deg)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'steam-1': 'steam-rise-1 4s ease-out infinite',
				'steam-2': 'steam-rise-2 4.5s ease-out infinite',
				'steam-3': 'steam-rise-3 3.8s ease-out infinite'
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
