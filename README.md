# Angular Fundamentals Lab

A hands-on study of Angular core concepts, built with **Angular 21** and **TypeScript 5.9**.

This repository contains practical examples covering the main building blocks of Angular — from components and data binding to services, pipes, routing, and more.

## Topics Covered

### Components & Templates
- **Custom Components** — Creating standalone components with templates and styles
- **Parent-Child Communication** — `input()` signals for passing data down and `output()` for emitting events up
- **Reusable Card Component** — Dynamic styling with `NgStyle` and content projection

### Data Binding
- **Interpolation & Property Binding** — Displaying and binding data in templates
- **Two-Way Data Binding** — Real-time form sync using `FormsModule` and `[(ngModel)]`

### Lifecycle & Reactivity
- **Lifecycle Hooks** — Understanding component lifecycle with `effect()` and signals
- **RxJS + Signals** — Reactive clock using `interval()` and `toSignal()`

### Services & Dependency Injection
- **Logger Service** — Singleton service (`providedIn: 'root'`) injected across components
- **Service Communication** — Sharing state and logic between components via DI

### Pipes
- **Custom Pipe** — `MultiplicaPorPipe` — a transform pipe that multiplies values by a given factor

### Rendering
- **List Rendering** — Iterating over typed arrays (`Celular[]`) with `@for`

### Routing
- **Angular Router** — Multi-page navigation with route configuration, redirects, and `routerLink`

### Type Safety
- **Interfaces** — TypeScript interfaces for domain models (`Celular`)
- **Unit Tests** — Test specs with Vitest

## Project Structure

```
.
├── fundamentos-angular/        # Core concepts
│   └── src/app/
│       ├── components/
│       │   ├── card/                     # Reusable card with dynamic styling
│       │   ├── ciclo-de-vida/            # Lifecycle hooks & signals
│       │   ├── componente-pai/           # Parent component (input/output)
│       │   ├── componente-filho/         # Child component (input/output)
│       │   ├── exemplo-servicos1/        # Service injection example
│       │   ├── exemplo-servicos2/        # Service injection example
│       │   ├── pipe-customizado/         # Custom pipe usage
│       │   ├── renderizando-listas/      # List rendering
│       │   └── two-way-data-binding/     # Two-way binding with forms
│       ├── types/                        # TypeScript interfaces
│       ├── logger.ts                     # Logger service
│       └── logger.spec.ts               # Service unit test
│
└── fundamentos-angular2/
    └── routing/                # Routing concepts
        └── src/app/
            ├── app.routes.ts             # Route definitions
            └── components/
                ├── homepage-component/   # Home page route
                └── about/                # About page route
```

## Getting Started

```bash
# Clone the repository
git clone https://github.com/rodhfr/angular-fundamentals-lab.git
cd angular-fundamentals-lab

# Install dependencies and start the fundamentals app
cd fundamentos-angular
npm install
ng serve

# Or start the routing app
cd fundamentos-angular2/routing
npm install
ng serve
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

## Tech Stack

| Technology | Version |
|------------|---------|
| Angular    | 21.1    |
| TypeScript | 5.9     |
| RxJS       | 7.8     |
| Vitest     | (test runner) |

## License

This project is for educational purposes.
