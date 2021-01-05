### Lerna 로 Mono-Repo 환경 구성하기

[레르나](https://lerna.js.org/) 공식 홈페이지

레르나는 커맨드 명령어로 설치한다.

```
$ npm install --global lerna
$ git init lerna-repo && cd lerna-repo
$ lerna init
```

다음과 같이 파일이 생성된다.

```
lerna-repo/
  packages/
  package.json
  lerna.json
```

다음과 같이 packages 에 폴더를 생성하고, 예제로 react 를 설치해준다.

```
npx create-react-app pack-a
```

```
lerna-repo/
  packages/
   pack-a/package.json
  package.json
  lerna.json
```

packages/ 에 생성된 모든 node_modules 폴더를 삭제해준다.

```
$ lerna clean
```

각 패키지의 devDependencies를 `root`에서 관리해준다.

```
$ lerna link convert
```

```
// package.json
  "dependencies": {
    "pack-a": "file:packages\\pack-a"
  }
```

`root`에 패키지들의 node_modules 설치 및 Symlink 를 정리해준다.

```
$ lerna bootstrap
```

```
// package.json
  "devDependencies": {
    "lerna": "^3.22.1"
  }
```

각 패키지들의 npm 명령어를 실행합니다.

```
$ lerna run start
$ leran run build
```
