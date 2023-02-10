export default function tab(tabId) {
  if (document.getElementById(tabId + '-btn').className !== "disabled") {
    /* button */
    const btn = document.getElementById('tabs-bar')
                        .getElementsByTagName('button');
    [...btn].forEach(function (b) {
      if (b.className !== "disabled")
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
}
