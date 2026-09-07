# Tirppatunnistin

## Background

This is a fresh repo created with

```sh
bunx @tanstack/cli create --router-only
```

## Tech

Use the following technologies

- TypeScript
- React
- Tanstack router
- Bun
- Tailwind
- Shadcn / UI
- Biome
- Git (use git and sensible git commits as you make progress; no remote repo exists yet, only local repo)

## Purpose

This is a client-side web app for learning birds. It is intended to be played on mobile to learn birds.

## Dataset

The 100 most common birds in Finland.

Subdataset:

- The 10 most common birds in Finland.
- The 20 most common birds in Finland.
- The 50 most common birds in Finland.
- The 100 most common birds in Finland.

Each bird must come with:

- Finnish name
- English name
- Scientific name
- Image (preferably a clear photo of the bird)
- Wikipedia URL
- Wingspan
- 2-5 facts about the bird
- Voice sample

The source for this data should be Wikipedia, if possible.

## Screens

All screens should be narrow and mobile-first design. The desktop will simply use the mobile layout, with automatic margins on the sides. The maximum width of the screen will be capped at 660px.

### Main menu

- Supertitle: Jussi Nevavuoren (link to `jussinevavuori.com`)
- Main title: Tirppatunnistin
- Subtitle: "Opi tunnistamaan Suomen linnut"
- Progress bar (more info below)
- Choose gamemode
  - Guess name by image
	- Guess image by name
	- Guess name by voice
	- Guess voice by name
- Choose answer mode
  - Select from 4 random suggestions (one is correct)
	- Type answer manually
- Start button
- Footer: "Lähde: Wikipedia"

### Game screen before submission

- Header: Round X / 10
	- Shows which round is curretly ongoing
	- There are always 10 rounds per game
- At the top, there is the hint (either the name, image or voice based on the gamemode)
- At the bottom, there is the answer (either 4 options or textbox based on answer mode)
  - Textbox: Textbox with submit button below
	- 4 options: Four buttons with one correct answer, submit on click button

### Game screen after submission

- If correct: Show success (with corrected answer if auto-corrected)
- If incorrect: Show failure (with correct answer)
- Play sound of bird, show facts, image, names and other data about bird and a link to wikipedia
	- The wingspan should be displayed along with a classification:
		- Tirppa (small wingspan)
		- Suurtirppa (medium wingspan)
		- Megatirppa (large wingspan)
- Show how many points the user gained or lost for this bird
- Show next button

### Round end screen

- Shows a list of your guesses and which ones you got right, which ones you got wrong
  - Also shows how many times you've gotten the bird right or wrong
	- Also shows when was the last date you encountered that bird in this game if ever
- Bottom floating footer
	- Play again (same settings, new birds)
	- End game (return to main menu)

## Features

### Animations

You may use animations

### Storage and memory

All data will be stored in `localStorage`.

All attempts should be recorded in `localStorage`:

- List of guesses: Game mode, timestamp, answer mode, bird, correct answer, guess, `wasCorrect`, etc.

### Repetition, score and progress

- There should be a progress bar that shows how many birds the player has "learned"
	- A bird is considered "learned" when it exceeds 10 points
	- Birds are scored as follows:
		- A negative answer multiplies score by 0.5
		- A positive answer adds 1-5 points (linear interpolation based on how long ago the last guess
		was)
		  - Within last 12 hours: 1 point
			- Within last week: lerp(1 point -> 5 point)
			- Older than week: 5 points
	- These scores can be dynamically calculated based on `localStorage` state
	- The score is always rounded to the nearest integer
- The progress bar in the main menu should show 4 overlaid bars
  - Bars
		- Bottom bar: Birds with >= 1 points ("nähdyt tirpat")
		- Middle bar: Birds with >= 3 points ("tutut tirpat")
		- Top bar: Birds with >= 6 points ("kaveritirpat")
		- Top bar: Birds with >= 10 points ("ystävätirpat")
	- Below that are the labels, e.g. "Ystävätirpat (10+): 7, Kaveritirpat (6+): 12, Tutut tirpat (3+): 20, Nähdyt tirpat (1+): 31, Tuntemattomat tirpat (0): 5"

- The selected birds for each round should not be random, instead

### Auto-correct

- Normalization
	- All guesses are case-insensitive
	- All guesses are whitespace- and punctuation-insensitive (e.g. "Viti-valkoinen tirppa" and "vitivalkoinentirppa" are equal)
- Guesses (after normalization) with a levenshtein distance of 2 from the correct answer are considered correct, but a correction is shown

### Easter eggs

- "Tirppa" is always considered correct

## Hosting

- I will deploy this project later, do not worry about deployment -- only ensure the project is in a ready-to-deploy state.
- This project must be made hostable on Vercel via the Vercel git integration.
- This project will be hosted at `tirppatunnistin.jussinevavuori.com`.

## Language

- All UI must be written in Finnish.
- The word "Lintu" (bird) must always be replaced by the word "Tirppa" (a colloquial term for bird).
- The UI text can use a bit of humor.