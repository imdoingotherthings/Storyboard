// Import Packages
import { useState } from 'react';

export const AddStory = () => {
	const [toggleAddStory, setToggleAddStory] = useState(false);
	const [action, setAction] = useState('');
	const [actionUseCase, setActionUseCase] = useState('');

	// dom functions
	const submitStory = () => {
		// api call to submit to
	};

	const handleAction = e => setAction(e.target.value);
	const handleActionUseCase = e => setActionUseCase(e.target.value);

	const cancelStory = () => {
		setAction('');
		setActionUseCase('');
		setToggleAddStory(false);
	};

	// renders
	const addStory = () => {
		return (
			<div className="w-full">
				<button onClick={() => setToggleAddStory(true)} className="w-full text-zinc-100 rounded-md py-1 bg-blue-700">
					Add Story
				</button>
			</div>
		);
	};

	const renderer = () => {
		if (toggleAddStory) {
			return (
				<div>
					<div className="mx-auto px-10 py-6 bg-zinc-200 rounded-md">
						<div className="my-2">
							<label className="text-sm font-light">Action</label>
							<input onChange={e => handleAction(e)} type="text" className="w-full rounded-md" />
						</div>

						<div className="my-2">
							<label className="text-sm font-light">Use Case</label>
							<textarea
								onChange={e => handleActionUseCase(e)}
								name="story_description"
								cols="25"
								rows="5"
								className="w-full rounded-md"
							/>
						</div>

						<div className="grid grid-cols-1 gap-3">
							<button onClick={() => submitStory()} className="rounded-md px-4 py-2 border border-zinc-300">
								Add
							</button>

							<button onClick={() => cancelStory()} className="rounded-md px-4 py-2 border border-zinc-300">
								Cancel
							</button>
						</div>
					</div>
				</div>
			);
		}
	};

	return (
		<div className="mx-auto px-4 py-8">
			{addStory()}
			{renderer()}
		</div>
	);
};
