# GitHub 업로드 체크리스트

## 준비

- [ ] GitHub 저장소 이름: **`design-system`**
- [ ] 계정: **seo-er** (또는 본인 계정 + vite.config.js 경로 수정)

## 올릴 폴더

`design-system-app` **전체** (아래는 Git이 자동으로 빼 줌)

```
design-system-app/
├── .github/workflows/deploy.yml   ← 배포 자동화 (필수)
├── public/
├── src/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 올리지 말 것 (git / GitHub Desktop 사용 시 자동 제외)

- `node_modules/`
- `dist/`
- `app/`, `gradle/`, `.gradle/`, `.idea/` (웹 앱과 무관)

## 순서

1. GitHub에서 저장소 `design-system` 생성
2. GitHub Desktop으로 이 폴더 Publish → Push
3. 저장소 **Settings → Pages → Source: GitHub Actions**
4. **Actions** 탭에서 배포 완료 확인
5. https://seo-er.github.io/design-system/ 접속

## 자주 하는 실수

| 실수 | 결과 |
|------|------|
| 저장소 이름을 `design-system-app`으로 만듦 | 주소/경로 불일치, 빈 화면 |
| 웹 UI로 `node_modules`까지 드래그 업로드 | 느리고 실패하기 쉬움 → Desktop 사용 |
| Pages Source를 `main` 브랜치 `/root`만 선택 | Actions 배포와 충돌 → **GitHub Actions** 선택 |
