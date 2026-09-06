// 공용 스크립트. 지금 하는 일은 하나다.
// PC(안드로이드·iOS가 아닌 기기)에서 앱인토스(intoss://) 링크를 누르면 주소를 여는 대신 안내 문구를 띄운다.
// 휴대폰에서는 아무것도 하지 않으므로 링크가 그대로 토스 앱을 연다.
(function () {
  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) return;
  var NOTICE = "휴대폰의 토스 앱에서 열려요";
  var toast = null;
  var hideTimer = 0;

  function showToast(text) {
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      document.body.appendChild(toast);
    }
    toast.textContent = text;
    toast.classList.remove("show");
    void toast.offsetWidth; // 연속 클릭에도 나타나는 애니메이션이 다시 돌도록 리플로우
    toast.classList.add("show");
    clearTimeout(hideTimer);
    hideTimer = setTimeout(function () { toast.classList.remove("show"); }, 2800);
  }

  var links = document.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute("href") || "";
    if (href.indexOf("intoss://") !== 0) continue;
    links[i].title = NOTICE;
    links[i].addEventListener("click", function (event) {
      event.preventDefault();
      showToast(NOTICE);
    });
  }
})();
