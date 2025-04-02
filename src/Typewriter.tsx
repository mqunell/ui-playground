import clsx from 'clsx'

const TypewriterContainer = ({ children }: { children: React.ReactNode }) => (
	<div className="grid place-items-center">{children}</div>
)

const TypewriterText = ({ index, children }: { index: number; children: React.ReactNode }) => (
	<p
		className={clsx(
			`typewriter-${index}`,
			'col-[1] row-[1] overflow-hidden border-gray-300 font-mono text-lg whitespace-nowrap',
		)}
	>
		{children}
	</p>
)

// TODO: The parent <div> maintains the width of the longest <p> as it loops through the list,
// meaning any string that is shorter than any previous one renders too widely and the animation
// doesn't match. Need to find a clean, ideally CSS-only solution to make the parent <div> shrink
// along with each child <p> as they go toward 0%.
const Typewriter = () => (
	<div className="flex flex-col gap-2">
		{/* Single line (styles applied via Tailwind theme) */}
		<div className="flex justify-center">
			<p className="animate-typewriter overflow-hidden border-r-2 border-gray-300 font-mono text-lg whitespace-nowrap">
				This is a test
			</p>
		</div>

		{/* Multiple lines that "delete" and replace each other (styles applied via CSS) */}
		<TypewriterContainer>
			{['This is a test', 'Continued', 'Okay all done yay it works'].map((text, index) => (
				<TypewriterText key={index} index={index}>
					{text}
				</TypewriterText>
			))}
		</TypewriterContainer>
	</div>
)

export default Typewriter
