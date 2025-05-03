import { useState } from 'react'
import AnimatedBorder from './AnimatedBorders/AnimatedBorder'
import Collage from './Collage'
import DisplaySelector from './DisplaySelector'
import HoverEffects from './HoverEffects'
import Logos from './Logos'
import Spinners from './Spinners/Spinners'
import TextClipping from './TextClipping/TextClipping'
import Typewriter from './Typewriter/Typewriter'
import Weasel from './AnimatedBorders/Weasel'
import './App.css'

const App = () => {
	const [display, setDisplay] = useState<Display>('Text clipping')

	return (
		<section className="mx-auto flex flex-col items-center gap-8 p-8">
			<Logos />
			<DisplaySelector display={display} setDisplay={setDisplay} />

			{display === 'Text clipping' && <TextClipping />}
			{display === 'Hover effects' && <HoverEffects />}
			{display === 'Animated borders' && (
				<>
					<Weasel />
					<AnimatedBorder />
				</>
			)}
			{display === 'Typewriter' && <Typewriter />}
			{display === 'Loading spinner' && <Spinners />}
			{display === 'Collage' && <Collage />}
		</section>
	)
}

export default App
