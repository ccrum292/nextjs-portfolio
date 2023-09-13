export default function ProjectCard({ projectData }) {
  const { imgSrc, imgAlt, title, text, techUsedArr, deployedHref, githubHref } =
    projectData;
  return (
    <div className="flex flex-col gap-2">
      <a href={deployedHref} target="_blank">
        <img src={imgSrc} alt={imgAlt} />
      </a>
      <h3 className="text-lg">{title}</h3>
      <div className="flex flex-col gap-3">
        <p className="text-slate-400">{text}</p>
        <div className="flex flex-wrap gap-3">
          {techUsedArr.map((content) => (
            <div className="bg-cyan-600 p-1 rounded">
              <p className="text-sm">{content}</p>
            </div>
          ))}
        </div>
        {deployedHref && (
          <a href={deployedHref} target="_blank">
            <h4 className="hover:text-green-400 hover:font-semibold">
              Deployed Application
            </h4>
          </a>
        )}
        {githubHref && (
          <a href={githubHref} target="_blank">
            <h4 className="hover:text-green-400 hover:font-semibold">
              GitHub Repository
            </h4>
          </a>
        )}
      </div>
    </div>
  );
}
