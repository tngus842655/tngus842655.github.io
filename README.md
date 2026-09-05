# tngus842655.github.io

GitHub 사용자 사이트(루트 도메인). 머니 게임 소개 페이지와 검색 등록·광고 인증 파일이 있다.

| 파일 | 용도 |
| --- | --- |
| `index.html` | 머니 게임 소개 페이지 (MoneyGame 저장소 `docs/index.html`과 같은 내용, 정책 링크만 절대경로) |
| `app-ads.txt` | AdMob 판매자 인증. Play 콘솔 스토어 등록정보의 **개발자 웹사이트**가 `https://tngus842655.github.io/`여야 AdMob이 읽는다 |
| `robots.txt` / `sitemap.xml` | 검색 엔진용 |
| `404.html` | 없는 주소 안내 |
| `.nojekyll` | GitHub Pages의 Jekyll 처리 끔 |

검색 등록 인증(구글 서치콘솔·네이버 서치어드바이저)은 `index.html` 상단의 주석 처리된
`google-site-verification` / `naver-site-verification` 메타 태그에 값을 넣고 주석을 풀거나,
받은 HTML 인증 파일을 이 폴더 루트에 두면 된다.
