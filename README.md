# tngus842655.github.io

GitHub 사용자 사이트(루트 도메인 `https://tngus842655.github.io/`). 엔에스에이치가 만든 앱들의
소개 페이지와 검색 등록·광고 인증 파일을 둔다.

## 구조

| 경로 | 용도 |
| --- | --- |
| `index.html` | 홈 — 앱 목록. 검색 등록 인증 메타 태그(주석)도 여기 |
| `apps/<slug>/index.html` | 앱별 소개 페이지 (`apps/moneygame/` 등) |
| `apps/_template/` | 새 앱 소개 페이지 틀 (noindex, 링크 안 걸림) |
| `assets/site.css` | 공용 스타일. 색·간격은 여기서만 바꾼다 |
| `assets/<slug>/` | 앱별 자산: `icon-192.png`, `feature-graphic.png`(1024×500), `screen-*.jpg`(540 너비) |
| `assets/brand/` | 사이트 공용 브랜드 자산. `logo-96/192/512.png`(NSH 로고, 투명 배경: 헤더 마크·파비콘·조직 로고), `apple-touch-icon-180.png`(흰 배경, iOS 홈 화면용), `og-home-1200x630.jpg`(홈 공유 미리보기). 원본 PNG는 `C:/Workspace/brand/site/` |
| `assets/icons/` | 플랫폼 공식 아이콘: `google-play.svg`(Google Play 삼각형), `toss.png`(토스 심볼, static.toss.im 원본). 버튼 안에서 `<img class="ic">`로 쓴다 |
| `app-ads.txt` | AdMob 판매자 인증. Play 콘솔 스토어 등록정보의 **개발자 웹사이트**가 루트 주소여야 AdMob이 읽는다. 앱이 늘어도 파일은 하나 |
| `robots.txt` / `sitemap.xml` | 검색 엔진용. 페이지를 추가하면 sitemap에 URL을 넣는다 |
| `404.html` | 없는 주소 안내 |
| `.nojekyll` | GitHub Pages의 Jekyll 처리 끔 (`_template` 같은 밑줄 폴더도 그대로 서빙) |

앱 폴더는 `apps/` 아래에 두는 이유: 사용자 사이트 루트에 `moneygame/` 같은 폴더를 두면
같은 이름의 프로젝트 저장소 Pages(`/MoneyGame/`)와 경로가 겹칠 수 있어서다.

## 새 앱 추가하기 (파이어패스·미니게임30·원정몬스터즈 …)

1. `apps/_template/`를 `apps/<slug>/`로 복사한다. slug는 영문 소문자 (`firepath`, `minigame30`, `newworld`).
2. `assets/<slug>/`를 만들고 아이콘(192px PNG), 대표 이미지(1024×500), 스크린샷(540 너비 JPG, 상태바 잘라서)을 넣는다.
3. 복사한 `index.html`에서 `【 】`로 표시된 자리를 전부 채우고, `<meta name="robots" content="noindex">` 줄을 지운다.
   게임이 아니면 등급분류 블록도 지운다.
4. `index.html`(홈) 앱 목록의 주석 예시 카드를 풀어 채운다. 대표 앱을 바꾸고 싶으면 `.featured` 블록을 바꾼다.
5. `sitemap.xml`에 `https://tngus842655.github.io/apps/<slug>/`를 추가한다.
6. push. GitHub Pages가 1~2분 안에 반영한다.

각 앱 저장소의 정책 페이지(개인정보처리방침·환불 안내)는 그 앱의 프로젝트 Pages에 그대로 두고
여기서는 링크만 건다 — 스토어 등록정보에 적어 둔 주소가 바뀌지 않게.

## 검색 등록

- 구글 서치콘솔: 속성 추가 → URL 접두어 `https://tngus842655.github.io/` → HTML 태그 방식 → 값을 `index.html`의
  `google-site-verification` 메타에 넣고 주석 해제 → 확인 → 사이트맵 `sitemap.xml` 제출
- 네이버 서치어드바이저: 사이트 등록 `https://tngus842655.github.io/` → HTML 태그 방식 → `naver-site-verification` 메타 → 확인 →
  요청 → 사이트맵 제출 (`https://tngus842655.github.io/sitemap.xml`)
