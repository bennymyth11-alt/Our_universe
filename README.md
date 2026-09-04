# A Little Universe For You

A cinematic, single-page romantic experience built with plain HTML, CSS, and JavaScript. It runs without a build step.

## Run it

Open `index.html` directly in a browser, or run a local server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customize it

All likely edits live near the top of `script.js`:

1. Change the password in `CONFIG.password`.
2. The music is configured in `CONFIG.audio.source` and currently points to `assets/audio/our-love-song.mp3.mp3`, the existing filename in this project. Set `CONFIG.audio.enabled` to `false` to disable it.
3. Change the gate, hero, completion, and signature text in `CONFIG`.
4. Replace the `quizQuestions` array with your own questions and answers.
5. Replace `CONFIG.coupleImage` with your photo path. Both cinematic photo moments use this same value.
6. Edit the Bisaya final letter in `CONFIG.finalLetter.paragraphs`.
7. Customize the six romantic scenes in `CONFIG.story.scenes`.
8. Adjust the color variables at the top of `styles.css`.

The password is only a playful front-end gate and is not real security. Audio is optional and failure is handled gracefully. The experience also respects `prefers-reduced-motion` and switches the cursor challenge to normal tapping on touch devices.
