import { PROJECTS } from "../data/projects";
import { IconArrowUpRight, IconGH } from "../components/Icons";
import "../styles/archive.css";

export default function ProjectArchive() {
	const sortedProjects = [...PROJECTS].sort((a, b) => {
		const yearA = Number(a.year) || 0;
		const yearB = Number(b.year) || 0;
		return yearB - yearA;
	});

	return (
		<section className="archive-page">
			<div className="s-label">Projects</div>
			<div className="archive-title">Project Archive</div>

			<div className="archive-table">
				<div className="archive-row archive-head">
					<div>Year</div>
					<div>Title</div>
					<div>Built With</div>
					<div>Code</div>
					<div>Live</div>
				</div>
				{sortedProjects.map((p) => (
					<div className="archive-row" key={`archive-${p.id}`}>
						<div className="archive-year">{p.year}</div>
						<div className="archive-project">{p.title}</div>
						<div className="archive-stack">{p.tech.join(" / ")}</div>
						<div>
							{p.repoUrl && p.repoUrl !== "#" ? (
								<a className="archive-link" href={p.repoUrl} target="_blank" rel="noreferrer">
									<IconGH />
								</a>
							) : (
								<span className="archive-empty"></span>
							)}
						</div>
						<div>
							{p.liveUrl && p.liveUrl !== "#" ? (
								<a className="archive-link" href={p.liveUrl} target="_blank" rel="noreferrer">
									<IconArrowUpRight />
								</a>
							) : (
								<span className="archive-empty"></span>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
