# Jcast 회사 홈페이지 구축

## - 소프트웨어 선정 기준
### 1.Django
안정적 버전인 `Django 3.2 LTS`를 사용. 회사 DB가 `MariaDB`인데 `Django 4.2 LTS`은 현재 DB 버전과 호환이 되지 않음.
![image](https://github.com/knockinthecave/Jcast-company-website/assets/98227391/75b2c876-566b-46e4-9424-ba5ff07fe8ca)

### 2.React.js
이전에 모바일 웹앱을 개발하던 `React`를 그대로 사용하기로 함. 원래는 모바일 화면에 맞추는 `Flutter`를 고려하려 하였으나 시간적인 여유가 부족하기에 현재 바로 사용가능한 `React`를 선정.

## - 배포
### 1. ssh 접속을 통한 Docker Container 생성
```
sudo docker-compose up -d
```

### 2. NAS에서의 Docker 실행
이유는 아직 찾지 못했으나 아마 ssh에서의 포트를 막아놓은듯 하다. Web Station을 통해 포트를 배정하면 된다.

### 3. Docker 이미지 실행을 통한 컨테이너 생성
이때 Web Station에서 80/443포트로 배정을 받아 바로 웹 페이지를 생성할 수 있게 해준다.
