export default function openTab(tabId) {
  /* button */
  const btn = document.getElementById('tabs-bar').
                       getElementsByTagName('button');
  [...btn].forEach(function (b) {
      b.className = "";
  });
  document.getElementById(tabId + '-btn').className = "active";

  /* tab */
  const tabs = document.getElementsByClassName('tab');
  [...tabs].forEach(function (t) {
      t.className = "tab";
  });
  document.getElementById(tabId).className += " active";
}
