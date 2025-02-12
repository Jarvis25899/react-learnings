import Button from './Button';

export default function Sidebar({
  addProject,
  viewProject,
  projects,
  selectedProjectId,
}) {
  const itemClasses =
    'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800';

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <Button onClick={addProject}>+ Add Project</Button>
      <ul className="mt-8">
        {projects.map((project, index) => (
          <li
            key={index}
            className="flex justify-between my-4"
            onClick={() => viewProject(project.id)}
          >
            <button
              className={
                project.id === selectedProjectId
                  ? itemClasses + ' text-stone-200 bg-stone-800'
                  : itemClasses
              }
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
