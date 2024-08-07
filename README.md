# RUNRUNRUN_commerce

### 커밋 컨벤션

---

#### 커밋 유형 지정

| **commit유형** | **의미**                                |
| -------------- | --------------------------------------- |
| Feat           | 새로운 기능 추가                        |
| Fix            | 버그 수정                               |
| Chore          | 기타 모든 것들                          |
| Design         | CSS 등 사용자 UI 디자인 변경            |
| Refactor       | 코드 리팩토링                           |
| HOTFIX         | 급하게 치명적인 버그를 고쳐야 하는 경우 |

#### 제목 첫 글자는 대문자로, 끝에는 . 금지

---

### 코드 컨벤션

---

- 문자열을 처리할 때는 **홑따옴표**를 사용하도록 합니다.
- 문장이 종료될 때는 **세미콜론**을 붙여줍니다.
- 함수명, 변수명은 **카멜케이스**로 작성합니다.
- 함수명은 **동사**로 시작합니다.
- 변수명은 **명사**로 시작합니다.
- 불리언값은 **긍정**으로 표시합니다. isLogin / isConfirmed
- 컴포넌트명은 **파스칼케이스**로 작성합니다.
- 컴포넌트를 제외한 다른 파일명, 폴더명은 **카멜케이스**로 작성합니다.
- 가독성을 위해 **한 줄에 하나의 문장**만 작성합니다.
- 복수는 + List를 사용합니다. (ex: const todoList = []; , const movieList = [];)
- **연산자** 사이에는 **공백을 추가**하여 가독성을 높입니다.
- 주석은 설명하려는 **구문에 맞춰 들여쓰기** 합니다.
- **콤마 다음**에 값이 올 경우 **공백을 추가**하여 가독성을 높입니다. (ex: var arr = [1,2,3,4]; -> var arr = [1, 2, 3, 4];)
- 함수는 **화살표 함수**로 작성합니다.

---

### TypeScript 컨벤션

---

- 함수의 타입 지정은 interface 사용합니다.
- 타입명은 파스칼 케이스를 사용합니다.
- enum 사용, as const 지양, const enum 지양합니다.

---

### 깃플로우

---

- **Main 브랜치** : Main 브랜치는 출시 가능한 프로덕션 코드를 모아두는 브랜치이다. Main 브랜치는 프로젝트 시작 시 생성되며, 개발 프로세스 전반에 걸쳐 유지된다. 배포된 각 버전을 Tag를 이용해 표시해둔다.

- **dev 브랜치** : 다음 버전 개발을 위한 코드를 모아두는 브랜치이다. 개발이 완료되면, Main 브랜치로 머지된다
- **feat 브랜치** : **하나의 기능을 개발하기 위한 브랜치**이다. dev 브랜치에서 생성하며, 기능이 개발 완료되면 다시 dev 브랜치로 머지된다. 머지할때 주의점은 Fast-Forward로 머지하지 않고, Merge Commit을 생성하며 머지를 해주어야 한다. 이렇게해야 히스토리가 특정 기능 단위로 묶이게 된다.
  네이밍은 **`feat/branch-name`** 과 같은 형태로 생성한다.

- **refactor 브랜치** : 리팩토링을 하기 위한 브랜치이다. dev 브랜치에서 생성하며 네이밍은 refactor/기능이름 과 같은 형태로 생성한다.

- **design 브랜치** : 디자인이나 css 수정을 위한 브랜치이다. dev 브랜치에서 생성하며 네이밍은 **`design/branch-name`** 과 같은 형태로 생성한다.

---

### 폴더, 파일명

---

컴포넌트 파일명은 파스칼 케이스(PascalCase)를 사용한다.

---
