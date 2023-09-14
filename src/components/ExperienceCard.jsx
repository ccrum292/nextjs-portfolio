export default function ExperienceCard({ experienceData }) {
  const { title, org, orgLocation, time, listItemsArr } = experienceData;

  return (
    <div className="flex flex-col lg:flex-row gap-2" key={title}>
      <div className="basis-3/12 flex lg:flex-col justify-between lg:justify-start">
        <h4 className="text-slate-500">{time}</h4>
        <h4 className="text-slate-500">{orgLocation}</h4>
      </div>
      <div className="basis-9/12">
        <h3 className="text-lg">{title}</h3>
        <h4 className="text-slate-500">{org}</h4>
        <ul className="list-disc ml-6 mt-1">
          {listItemsArr.map((val) => (
            <li className="text-slate-400" key={val}>
              {val}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
