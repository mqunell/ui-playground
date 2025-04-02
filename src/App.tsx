import Typewriter from './Typewriter'
import Logos from './Logos'
import Weasel from './Weasel'
import Balls from './Balls'
import Collage from './Collage'
import AnimatedBorder from './AnimatedBorder'
import { useState } from 'react'
import DisplaySelector from './DisplaySelector'
import TextClipping from './TextClipping'

const App = () => {
	const [display, setDisplay] = useState<Display>('Text clipping')

	return (
		<section className="mx-auto flex flex-col items-center gap-8 p-8">
			<Logos />
			<DisplaySelector display={display} setDisplay={setDisplay} />

			{display === 'Text clipping' && <TextClipping />}

			{display === 'Hover effects' && (
				<>
					<button className="cursor-pointer rounded-lg bg-stone-100 px-2.5 py-5 font-medium outline-2 outline-offset-0 outline-transparent transition-[outline-color,outline-offset] duration-150 hover:outline-offset-3 hover:outline-cyan-600 dark:bg-stone-700">
						Outline effect on hover
					</button>

					<button
						style={{
							backgroundImage: 'linear-gradient(blue, blue), linear-gradient(to right, cyan, lime)',
							backgroundClip: 'padding-box, border-box',
						}}
						className="max-w-52 cursor-pointer rounded-2xl border-[10px] border-transparent bg-origin-border px-5 py-2.5 text-center text-slate-100 outline-2 -outline-offset-4 outline-black transition-[outline-offset] hover:-outline-offset-8"
					>
						Another outline effect on hover
					</button>
				</>
			)}

			{display === 'Animated borders' && (
				<>
					<Weasel />
					<AnimatedBorder />
				</>
			)}

			{display === 'Typewriter' && <Typewriter />}
			{display === 'Loading spinner' && <Balls />}
			{display === 'Collage' && <Collage />}
		</section>
	)
}

export default App
