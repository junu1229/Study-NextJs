# nextjs

## 목차

1. [리액트 돌아보기](#1-리액트-돌아보기)
    - [React.js란?](#reactjs란)
    - [React 시작하기](#react-시작하기)
    - [JSX](#jsx)
    - [컴포넌트](#컴포넌트)
    - [JSX에 값 넣는법](#jsx에-값-넣는법)
    - [스타일](#스타일)

## 1. 리액트 돌아보기

### React.js란?

- 리액트는 UI를 빌드하게 해주는 자바스크립트 라이브러리다.

- 개발자가 정말 편리하게 빌드 할 수 있게 도와줌 ㅇㅇ
---
### React 시작하기

기본적인 방법
```
npx create-react-app
```

vite 사용
```
npm create vite
```

실행 방법

npx create-react-app
```
npm start
```

npm create vite
```
npm run dev
```
---
### JSX

리액트에서 html 코드를 가지고 있는것을 JSX라고 한다.

```html
<h1>Hello World!</h1>
```
---
### 컴포넌트

컴포넌트는 무조건 대문자로 시작해야 한다

Why??

```html
<h1></h1>
```

위와 같은 기존의 html 코드들이 소문자로 시작해서 인식을 못한다~

---
### JSX에 값 넣는법

```html
<p>{값}</p>
```
---
### 스타일

컴포넌트와 같은 폴더에
```
Post.module.css
```
로 따로 css 파일을 만들 수 있다

이후 해당파일을 import 한다
```javascript
import styles from './Post.module.css';
```

이후 css에서 만든 클래스를 적용시킨다.

``` html
<div className={styles.post}></div>
```