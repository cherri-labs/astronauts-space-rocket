export default function fragNav(fragSect, to, by) {
  const byElem = document.getElementById(fragSect + '_' + by);
  const toElem = document.getElementById(fragSect + '_' + to);
  const fragElem =
    document.getElementById('move-section-' + fragSect + '_index');

  if (by && byElem) {
    byElem.classList.remove('active');
  } else if (by === undefined) {
    const frags = fragElem.querySelectorAll('.fragment');
    [...frags].forEach(function (fr) {
      fr.classList.remove('active');
    });
  }

  if (to && toElem)
    toElem.classList.add('active');
}
