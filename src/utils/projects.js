export const projects = [
	{
		id: 'digitale-perspektiven',
		title: 'Digitale Perspektiven',
		tech: 'Nuxt | Tailwind | Gsap',
		website: 'https://www.digitaleperspektiven.net/',
		imageSrc: '/images/digitaleperspektiven.png',
		cardClass: 'rotate-[-4.5deg] bg-primary',
		pinClass: 'bg-[#8053ea] top-[-5px] left-[110px]',
		description: [
			'Ein interaktives Webprojekt, das die digitale Transformation in der Kunst- und Designausbildung thematisiert.',
			'Die Seite bietet eine ansprechende Benutzeroberfläche mit Animationen und interaktiven Elementen, um die Inhalte lebendig zu präsentieren.',
			'Entwickelt mit Nuxt, Tailwind CSS für das Styling und GSAP für die Animationen.',
		],
	},
	{
		id: 'khk-community',
		title: 'khk.community',
		tech: 'Typescript | Supabase | Sharp',
		website: 'https://www.khk.community/',
		github: 'https://github.com/ElianKas/uni-network-nuxt',
		imageSrc: '/images/khkcommunity.png',
		cardClass: 'rotate-[3.5deg] bg-secondary',
		pinClass: 'bg-[#F0A11D] top-[-8px] right-[120px]',
		description: [
			'Eine Community-Plattform für die Kunsthochschule Kassel, die es Studierenden ermöglicht, sich zu vernetzen und auszutauschen.',
			'Die Plattform bietet Funktionen wie einen anonymen Live-Chat mit Like-Funktion und eine Uploadmaske für Studenten, um ihre Events zu teilen.',
			'Entwickelt wurde die Plattform mit Nuxt und TypeScript. Für Events und Chat wurden Supabase tables und storage buckets eingesetzt. Sharp wird als Bild-Kompressor verwendet.',
		],
	},
	{
		id: 'miteinander-fuer-afrika',
		title: 'Miteinander für Afrika',
		tech: 'Nuxt | Storyblok | Nodemailer',
		website: 'https://www.miteinander-fuer-afrika.de/',
		imageSrc: '/images/afrika.png',
		cardClass: 'rotate-[-7deg] bg-accent',
		pinClass: 'bg-[#EF5F1D] top-[-6px] right-[70px]',
		description: [
			'Ein Webprojekt, das sich für die Unterstützung von Menschen in Afrika einsetzt.',
			'Die Seite bietet eine ansprechende Benutzeroberfläche mit Animationen und interaktiven Elementen, um die Inhalte lebendig zu präsentieren.',
			'Entwickelt mit Nuxt, Storyblok für das Content-Management und Nodemailer für das E-Mail-Management.',
		],
	},
	{
		id: 'smartops',
		title: 'SmartOPS',
		tech: 'React | Node.js | MongoDB',
		website: 'https://www.smartops.de/',
		imageSrc: '/images/www.smartops.de_.png',
		cardClass: 'rotate-[2deg] bg-primary',
		pinClass: 'bg-[#4a90e2] top-[-5px] left-[90px]',
		description: [
			'Eine intelligente Operations-Plattform für Unternehmen.',
			'Bietet umfassende Tools für das Management von Geschäftsprozessen.',
			'Entwickelt mit modernen Web-Technologien für optimale Performance.',
		],
	},
];

export function getProjectById(id) {
	return projects.find((project) => project.id === id);
}
