import type { Metadata } from 'next'
import '../scss/main.scss'

export const metadata: Metadata = {
	title: 'Handcraft Guitars',
	description: 'This is a fake product landing page, a freecodecamp assignment',
	openGraph: {
		url: 'https://product-landing-page-jet.vercel.app/',
		type: 'website',
		title: 'Handcraft Guitars',
		description: 'This is a fake product landing page, a freecodecamp assignment',
		images: [
			'https://raw.githubusercontent.com/FedeHide/product-landing-page/main/public/assets/handcraft-guitars.webp',
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: 'https://product-landing-page-jet.vercel.app/',
	},
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
