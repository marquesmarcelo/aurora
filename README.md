# Estrutura de diretório
https://www.thirdrocktechkno.com/blog/angular-architecture-best-practices/

# CRUD
https://www.syncfusion.com/blogs/post/how-to-build-a-crud-app-in-angular.aspx

https://medium.com/swlh/how-to-make-angular-project-layout-which-requires-many-screens-including-header-footer-and-navbar-3b73cfe69ce7

# Iniciando o projeto

1. Criando o projeto inicial

```bash
ng new aurora-app --routing

cd aurora-app

ng generate module modules/home --route home --module app.module

ng generate module core --module app.module

ng g c shared/components/layout

ng g c shared/components/header

ng g c shared/components/footer

ng g c shared/components/navbar

```

2. Alterar o arquivo `app.component.html`
```html
<app-header></app-header>
<app-layout></app-layout>
<app-footer></app-footer>
```

3. Alterar o arquivo `shared\components\navbar\navbar.component.html`
```html
<button type="button" routerLink="/students">Alunos</button>
<button type="button" routerLink="/classes">Turmas</button>
<button type="button" routerLink="">Home</button>
```
3. Alterar o arquivo `shared\components\layout\layout.component.html`

```html
<div>
    <div>
        <app-navbar></app-navbar>
    </div>
    <div>
        <router-outlet></router-outlet>
    </div>
</div>
```

4. Adicionar no arquivo `app-routing.module.ts` a seguinte rota default:
 ```typescript
 { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }, 
 ```
 
### Criando um novo módulo

1. Passo a passo para criar um novo módulo

```bash
ng g m modules/students --route students --module app.module

ng g c modules/students/pages/AddStudent
ng g c modules/students/pages/EditStudent
ng g c modules/students/pages/ViewStudent
ng g c modules/students/pages/ListStudents

ng g c modules/students/components/StudentForm
ng g c modules/students/components/StudentFilter
ng g c modules/students/components/StudentsGrid

ng g s modules/students/services/students

ng g class modules/students/models/student --type=model --skip-tests 

```

2. Apagar os arquivos do módulo:
```
students.component.ts
students.component.html
students.component.css
students.component.spec.ts
```

3. Editar o arquivo modules/students/students-routing.module.ts:
```typescript
  { path: '', component: ListStudentsComponent },
  { path: 'view', component: ViewStudentComponent },
  { path: 'edit', component: EditStudentComponent },
  { path: 'add', component: AddStudentComponent },
  { path: 'list', component: ListStudentsComponent },
```

4. Adicionar a `modules/students/pages/list-students/list-students.component.html` os componentes `StudentFilter` e `StudentsGrid`
```html
<app-student-filter></app-student-filter>
<app-students-grid></app-students-grid>
```

4. Adicionar a `modules/students/pages/view-student/view-student.component.html`, `modules/students/pages/add-student/add-student.component.html` e `modules/students/pages/view-student/view-student.component.html`  o componente `StudentForm`
```html
<app-student-form></app-student-form>
```


# Correção de Erros

1. Erro informando que o componente não é um elemento de um módulo

Mensagem:

```javascript
Failed: Template parse errors: 
'app-nav' is not a known element:
1. If 'app-nav' is an Angular component, then verify that it is part of this module.
2. If 'app-nav' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.
```
Solução:

Declarar o NavComponent dentro do arquivo de teste `.spec.js`

```javascript
describe('AppComponent', () => {
  beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          NavComponent
        ]
      }).compileComponents();
    }));
```

Outra solução seria adicionar  `schemas: [ NO_ERRORS_SCHEMA ]` ao arquivo de `.spec.js`
```javascript
beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));
```