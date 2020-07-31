Folder structure

```
.
└── src/
    ├── assets/
    │   ├── svg/
    │   └── fonts/
    ├── api/
    │   ├── auth/
    │   ├── onboarding/
    │   ├── bills/
    │   └── (other modules or main entry points of API)
    ├── constants/
    ├── providers/
    │   ├── auth/
    │   ├── home/
    │   ├── bills/
    │   ├── shared/
    │   └── (other modules)
    ├── screens/
    │   ├── auth/
    │   │   └── signIn/
    │   │       ├── sign-in.screen.js
    │   │       └── sign-in.styles.js
    │   ├── onboarding/
    │   ├── home/
    │   ├── news/
    │   └── (other modules)
    ├── components/
    │   ├── shared/
    │   │   └── search-bar/
    │   │       ├── search-bar.component.js
    │   │       ├── search-bar.styles.js
    │   │       └── __test__/
    │   │           └── search-bar.component.test.js
    │   ├── auth/
    │   ├── nav/
    │   ├── bills
    │   ├── (other modules)
    │   └── molecules/
    ├── styles/
    ├── nav/
    │   ├── home-nav-stack.js
    │   ├── bills-nav-stack.js
    │   └── (other navigators)
    └── App.js
```
