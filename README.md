# Flow Design System

디자인 토큰 문서 사이트 (React + Vite).

**배포 주소:** https://seo-er.github.io/design-system/

---

## GitHub에 올리기 (이 폴더 통째로)

아래만 지키면 **소스 폴더 전체**를 GitHub에 올린 뒤, GitHub가 자동으로 빌드·배포합니다.  
`dist`나 `node_modules`를 직접 올릴 필요는 없습니다.

### 1. GitHub 저장소 만들기

1. https://github.com/new 접속
2. **Repository name:** `design-system` (이 이름이어야 주소가 맞습니다)
3. Public 선택 → **Create repository**

### 2. 폴더 업로드 (GitHub Desktop — 가장 쉬움)

1. [GitHub Desktop](https://desktop.github.com/) 설치
2. **File → Add local repository** → `design-system-app` 폴더 선택  
   (처음이면 “create a repository”로 이 폴더를 저장소로 만듦)
3. Summary에 메시지 입력 → **Commit to main**
4. **Publish repository**  
   - Name: `design-system`  
   - Account: `seo-er` (본인 계정)
5. **Push origin** (또는 Publish 시 함께 업로드)

### 2-2. 또는: 터미널에서 push

```powershell
cd d:\design-system-app
git init
git add .
git commit -m "Design system site"
git branch -M main
git remote add origin https://github.com/seo-er/design-system.git
git push -u origin main
```

`git`이 없다면 GitHub Desktop(위)을 쓰세요.

### 3. GitHub Pages 켜기 (한 번만)

1. 저장소 https://github.com/seo-er/design-system → **Settings**
2. 왼쪽 **Pages**
3. **Build and deployment** → Source: **GitHub Actions**
4. **Actions** 탭에서 `Deploy to GitHub Pages` 워크플로가 초록색으로 끝날 때까지 대기 (1~3분)

완료 후 https://seo-er.github.io/design-system/ 에서 사이트를 확인합니다.

### 4. 수정 후 다시 올리기

코드를 바꾼 뒤 GitHub Desktop에서 **Commit** → **Push** 하면 Actions가 다시 빌드해 사이트가 갱신됩니다.

---

## 올리면 안 되는 것 (자동 제외)

`.gitignore` 때문에 Git에 **포함되지 않습니다** (Desktop / git 사용 시):

| 폴더/파일 | 이유 |
|-----------|------|
| `node_modules/` | 용량 큼, GitHub에서 `npm ci`로 다시 설치 |
| `dist/` | 빌드 결과물, Actions가 새로 만듦 |

웹에서 파일을 **드래그만** 올리면 `.gitignore`가 적용되지 않아 `node_modules`까지 올라갈 수 있습니다.  
**GitHub Desktop 또는 git push를 권장합니다.**

---

## 로컬에서 미리보기

```bash
npm install
npm run dev
```

브라우저: http://localhost:5173/

배포와 비슷하게 보려면:

```bash
npm run build
npm run preview:pages
```

---

## 저장소 이름이 `design-system`이 아닐 때

`vite.config.js` 안의 `GITHUB_PAGES_BASE`를 `/<저장소이름>/` 으로 바꾼 뒤 다시 push 하세요.

---

## 기술 스택

- React + Vite
- Tailwind CSS
- GitHub Actions → GitHub Pages
