export function setNoteDisplay(note, value) {
  note.style.visibility = value;
}

export function mouseOver(note) {
  /* view note */
  setNoteDisplay(note, 'visible');
}

export function mouseLeave(note) {
  /* hide note */
  setNoteDisplay(note, 'hidden');
}

export function setText(e, value) {
  if (e)
    e.placeholder = value;
}
