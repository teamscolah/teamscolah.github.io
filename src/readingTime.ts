export function readingTime(body: string | undefined): string {
	const words = (body ?? '').replace(/```[\s\S]*?```/g, ' ').split(/\s+/).filter(Boolean).length;
	return `${Math.max(1, Math.round(words / 230))} min read`;
}
