# Jcast 웹사이트 프로젝트

회사 소개 및 제품 소개를 할 수 있는 웹사이트 구축이 목표

## 사용 스택
- react(https://ko.legacy.reactjs.org/) 를 사용하여 사이트를 번들링하고 관리합니다.
- gsap(https://greensock.com/gsap) 를 이용하여 패럴랙스 효과를 줍니다.
- lenis(https://lenis.studiofreight.com/) 를 이용하여 스므스 효과를 구현합니다.
- git(https://github.com/) 을 사용하여 파일을 관리합니다.
- docker(https://www.docker.com/)을 사용하여 프로젝트 관리 및 배포합니다.

## 프로젝트 실행
- react 설치. `npx create-react-app 리액트앱명`
- react-router-dom 설치. `npm install react-router-dom`
- sass 설치. `npm install sass`
- gsap 설치. `npm install gsap`
- lenis 설치. `npm install@studio-freight/lenis`

## 프로젝트 배포
`Synology NAS`에서 `Docker`를 이용해 배포.

1.`Synology NAS`로 `react-app` 전송. <br/>
2. 개발 혹은 작성한 `react-app`의 `root`디렉토리에 `Dockerfile` 작성. <br/>
3. `Dockerfile`을 통해서 `docker buildx build . -t your-image-name:your-tag` 명령어를 통해 이미지 빌드. <br/>
4. `docker save -o <path-for-tar>/your-image-name.tar your-image-name:your-tag` 명령어를 통해 `Docker 이미지`를 `.tar`파일로 `Export`. <br/>
5. `Synology NAS`로 `.tar`파일 전송. <br/>
6. `Docker GUI`에서 `Docker 이미지`를 추가 및 생성. <br/>
7. `Docker 이미지`에서 `Container`만들기. <br/>
    cf) 포트 설정은 내부포트를 설정하고 볼륨같은 경우에는 React 앱의 경우 정적이기 때문에 설정하지 않음. <br/>
8. `Container`실행 후 웹브라우저에 `NAS IP 주소`와 `PORT번호`를 입력하여 액세스하면 배포 완료. <br/>
