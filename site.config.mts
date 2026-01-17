export interface SocialLink {
	name: string;
	url: string;
	icon: string;
}

export default {
	title: 'Aslı Siol',
	favicon: 'favicon.ico',
	owner: 'Aslı Siol',
	profileImage: 'profile.webp',
	socialLinks: [
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/asli-siol/',
			icon: 'mdi:linkedin',
		} as SocialLink,
		{
			name: 'Behance',
			url: 'https://www.behance.net/asli-siol',
			icon: 'mdi:behance',
		} as SocialLink,
	],
};
