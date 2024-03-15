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
			'https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4/fedehide.github.io//https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F0f41fa24-57dd-406d-8308-663ac2723fec.png%3Ftoken%3DlLIyHdZloHXqDkYB3CYPNXqfPZ_4Ei9s6oDauBOqnec%26height%3D558%26width%3D1200%26expires%3D33241972125/og.png',
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
