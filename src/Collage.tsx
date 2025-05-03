// Based on this video from Optimistic Web: https://www.youtube.com/watch?v=caGLU5skTug

import GitHubIcon from './assets/collage/GitHub.svg'
import MongoDBIcon from './assets/collage/MongoDB.svg'
import NextjsIcon from './assets/collage/Nextjs.svg'
import ReactIcon from './assets/collage/React.svg'
import TailwindIcon from './assets/collage/Tailwind.svg'
import TypeScriptIcon from './assets/collage/TypeScript.svg'
import VercelIcon from './assets/collage/Vercel.svg'
import VSCodeIcon from './assets/collage/VSCode.svg'

const gridTemplateAreas = `
	'.  react react react vercel  .  . '
	'vs react react react ts      ts s1'
	'.  react react react ts      ts gh'
	's2 mongo next  next  tw      .  . '
	'.  .     next  next  s3      .  . '
`

const CollageIcon = ({ gridArea, src, alt }: { gridArea: string; src: string; alt: string }) => (
	<div style={{ gridArea }}>
		<img className="transition hover:scale-105" src={src} alt={alt} />
	</div>
)

const Collage = () => (
	<div
		style={{ gridTemplateAreas }}
		className="grid max-w-[525px] min-w-[350px] grid-cols-7 grid-rows-5 gap-2 rounded-xl border-4 border-slate-200 px-8 py-4 dark:border-white dark:bg-white"
	>
		<CollageIcon gridArea="react" src={ReactIcon} alt="React" />
		<CollageIcon gridArea="ts" src={TypeScriptIcon} alt="TypeScript" />
		<CollageIcon gridArea="next" src={NextjsIcon} alt="Next.js" />
		<CollageIcon gridArea="tw" src={TailwindIcon} alt="Tailwind CSS" />
		<CollageIcon gridArea="mongo" src={MongoDBIcon} alt="MongoDB" />
		<CollageIcon gridArea="vs" src={VSCodeIcon} alt="VS Code" />
		<CollageIcon gridArea="vercel" src={VercelIcon} alt="Vercel" />
		<CollageIcon gridArea="gh" src={GitHubIcon} alt="GitHub" />
		<div style={{ gridArea: 's1' }} className="rounded-tr-full bg-green-500/50"></div>
		<div style={{ gridArea: 's2' }} className="rounded-tl-full bg-yellow-500/50"></div>
		<div style={{ gridArea: 's3' }} className="rounded-br-full bg-red-500/50"></div>
	</div>
)

export default Collage
