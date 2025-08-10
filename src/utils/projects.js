export const projects = [
	{
		id: 'digitale-perspektiven',
		title: 'Digitale Perspektiven',
		tech: 'Nuxt | Tailwind | Gsap',
		website: 'https://www.digitaleperspektiven.net/',
		imageSrc: '/images/digitaleperspektiven.png',
		cardClass: 'rotate-[-4.5deg] bg-primary',
		pinClass: 'bg-gray',
		description: [
			'Ein sich ständig vergrößerndes Archiv der Universitäten Hessens, in dem Beiträge und Literatur zum Thema digitale Transformation in der Kunst- und dem Design gespeichert werden.',
			'Die Webseite bietet Filter- und Suchmöglichkeiten für Nutzer und stellt Storyblok Inhalte dynamisch dar.',
			'Entwickelt mit Nuxt, Tailwind und Gsap.',
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
		pinClass: 'bg-gray',
		description: [
			'Eine Community-Plattform für die Kunsthochschule Kassel, die es Studierenden ermöglicht, sich zu vernetzen und auszutauschen.',
			'Die Plattform bietet Funktionen wie einen anonymen Live-Chat mit Like-Funktion und eine Uploadmaske für Studenten, um ihre Events zu teilen.',
			'Entwickelt wurde die Plattform mit Nuxt und TypeScript. Für Events und Live-Chat wurden Supabase tables und storage buckets eingesetzt. Sharp wird als Bild-Kompressor verwendet.',
		],
	},
	{
		id: 'miteinander-fuer-afrika',
		title: 'Miteinander für Afrika',
		tech: 'Nuxt | Storyblok | Nodemailer',
		website: 'https://www.miteinander-fuer-afrika.de/',
		imageSrc: '/images/afrika.png',
		cardClass: 'rotate-[-7deg] bg-accent',
		pinClass: 'bg-gray',
		description: [
			'Ein Webprojekt, das sich für die Unterstützung von Menschen in Afrika einsetzt und dem e.V. Miteinander für Menschen in Afrika bei der Spendensammlung hilft.',
			'Die Webseite bietet eine umfangreiche CMS Anbindung für Standorteingaben der Brunnen in Afrika, dynamischen Storyseiten mit hoher Gestaltungsfreiheit, Videointegration, Newsletter und vielem mehr.',
			'Entwickelt mit Nuxt, Storyblok CMS und Nodemailer für das E-Mail-Management.',
		],
	},
	{
		id: 'smartops',
		title: 'SmartOPS',
		tech: 'Astro | Gsap | Tailwind',
		website: 'https://www.smartops.de/',
		imageSrc: '/images/www.smartops.de_.png',
		cardClass: 'rotate-[0deg] bg-tertiary',
		pinClass: 'bg-gray',
		description: [
			'Eine starke Online-Präsenz für die Energieberatungsfirma SmartOPS.',
			'Derzeit in der Entwicklung ist ein zugehöriger Datencenter für die Einsicht von Energiedaten aus Deutschland, sowie für die Prognose von Energieverbrauchswerten.',
			'Astro, Gsap und Tailwind sind für die Darstellung im Einsatz. Die SmardAPI und eigene Formeln zur Prognose werden für die Datenanbindung verwendet.',
		],
	},
];

export function getProjectById(id) {
	return projects.find((project) => project.id === id);
}
