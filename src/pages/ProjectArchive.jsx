import { Link } from "react-router-dom";
import { PROJECTS, sortProjectsByDate } from "../data/projects";
import { IconArrowUpRight, IconGH } from "../components/Icons";
import "../styles/archive.css";

export default function ProjectArchive() {
	const sortedProjects = sortProjectsByDate(PROJECTS);

	return (
		<section className="archive-page">
			<div className="s-label">Projects</div>
			<div className="archive-title">Project Archive</div>

			<div className="archive-table" role="table" aria-label="Project archive">
				<div className="archive-row archive-head" role="row">
					<div role="columnheader">Year</div>
					<div role="columnheader">Title</div>
					<div role="columnheader">Built With</div>
					<div role="columnheader">Code</div>
					<div role="columnheader">Live</div>
				</div>
				{sortedProjects.map((p) => (
					<div className="archive-row" role="row" key={`archive-${p.id}`}>
						<div className="archive-year" role="cell">{p.year}</div>
						<div className="archive-project" role="cell">
							<Link className="archive-project-link" to={`/project/${p.id}`} aria-label={`Open ${p.title} case study`}>
								{p.title}
							</Link>
						</div>
						<div className="archive-stack" role="cell">{p.tech.join(" / ")}</div>
						<div role="cell">
							{p.repoUrl && p.repoUrl !== "#" ? (
								<a
									className="archive-link"
									href={p.repoUrl}
									target="_blank"
									rel="noreferrer"
									aria-label={`View ${p.title} source code`}
								>
									<IconGH />
								</a>
							) : (
								<span className="archive-empty"></span>
							)}
						</div>
						<div role="cell">
							{p.liveUrl && p.liveUrl !== "#" ? (
								<a
									className="archive-link"
									href={p.liveUrl}
									target="_blank"
									rel="noreferrer"
									aria-label={`View ${p.title} live demo`}
								>
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
