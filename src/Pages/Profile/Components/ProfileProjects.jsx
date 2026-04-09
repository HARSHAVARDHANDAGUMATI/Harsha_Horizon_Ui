import { MdEdit } from 'react-icons/md'
import Card from '../../../Components/UI/Card'

const projects = [
  {
    title: 'Technology behind the Blockchain',
    subtitle: 'Project #1',
    image:
      '/images/nfts/eth_ai_brain_1775709462421.png',
  },
  {
    title: 'Greatest way to a good Economy',
    subtitle: 'Project #2',
    image:
      '/images/nfts/crystal_mind_1775709515782.png',
  },
  {
    title: 'Most essential tips for Burnout',
    subtitle: 'Project #3',
    image:
      '/images/nfts/mesh_gradients_1775709484715.png',
  },
]

function ProfileProjects() {
  return (
    <Card className="p-4 sm:p-5">
      <h3 className="font-display text-[22px] font-bold text-[var(--text)] sm:text-[28px]">
        All Projects
      </h3>
      <p className="mt-3 text-sm leading-6 text-[var(--text-muted)] sm:leading-7">
        Here you can find more details about your projects. Keep your user engaged
        by providing meaningful information.
      </p>

      <div className="mt-6 space-y-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col gap-3 rounded-[18px] bg-[var(--surface-soft)] p-3 sm:flex-row sm:items-center sm:gap-4 sm:p-4"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-14 w-14 shrink-0 rounded-[16px] object-cover sm:h-[62px] sm:w-[62px]"
            />
            <div className="min-w-0 flex-1">
              <p className="break-words text-base font-bold leading-6 text-[var(--text)] sm:text-sm sm:leading-5">
                {project.title}
              </p>
              <p className="mt-1 text-xs leading-5 text-[var(--text-soft)]">
                <span>{project.subtitle}</span>{' '}
                <span className="font-semibold text-brand-500">
                  - See project details
                </span>
              </p>
            </div>
            <button
              type="button"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center self-end rounded-full bg-white text-[var(--text-soft)] sm:self-auto"
            >
              <MdEdit className="h-4 w-4" />
            </button>
          </article>
        ))}
      </div>
    </Card>
  )
}

export default ProfileProjects
