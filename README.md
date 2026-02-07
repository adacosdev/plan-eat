# Planeat 🥗

**Planeat** es una plataforma integral de planificación de comidas diseñada para ayudar a las personas a comer mejor, ahorrar dinero y reducir el desperdicio de alimentos mediante la gestión inteligente de recetas y presupuestos.

## 🎯 Objetivo del Proyecto

El objetivo principal es simplificar la logística diaria de alimentación. Planeat permite a los usuarios:
- **Planificar semanalmente:** Organizar menús basados en sus preferencias.
- **Gestionar el presupuesto:** Monitorizar precios de productos en diferentes supermercados (`ProductPrice`) para optimizar gastos.
- **Centralizar recetas:** Gestionar una biblioteca de recetas con ingredientes y pasos detallados.
- **Automatizar listas**: Generar requerimientos de compra basados en los menús planificados.

## 🏗️ Arquitectura Técnica (Monorepo)

Este proyecto utiliza un **Monorepo** gestionado con **Turborepo** y **pnpm workspaces**, siguiendo una arquitectura de paquetes compartidos para maximizar la reutilización de código y la seguridad de tipos.

### Aplicaciones (`apps/`)
- `web`: Portal de usuario e interfaz de planificación construida con **Next.js 15 (App Router)** y **React 19**.
- `api`: Backend de alto rendimiento construido con **NestJS**, encargado de la lógica de negocio y persistencia.

### Paquetes Compartidos (`packages/`)
- `@repo/database`: Fuente de verdad para el esquema de datos usando **Prisma**. Unifica el acceso a la base de datos PostgreSQL.
- `@repo/api`: Contratos de API, DTOs y validaciones compartidas para garantizar que el frontend y el backend hablen el mismo idioma.
- `@repo/ui`: Biblioteca de componentes de UI compartidos.
- `@repo/typescript-config`: Configuraciones base de TypeScript.

## 🛠️ Tecnologías Principales
- **Frontend**: Next.js, React, Tailwind CSS.
- **Backend**: NestJS, PostgreSQL.
- **ORM**: Prisma.
- **Herramientas**: Turborepo, pnpm, Docker.

## 🚀 Flujo de Desarrollo

1. **Instalación**: `pnpm install`
2. **Base de Datos**: `cd packages/database && pnpm db:generate` y asegúrate de tener una instancia de Postgres corriendo.
3. **Ejecución**: `pnpm dev` para lanzar todas las apps en paralelo.

---

### 📝 Nota sobre el Estado del Proyecto
Actualmente, Planeat se encuentra en fase de desarrollo activo centrado en la implementación del CRUD de Recetas y la infraestructura base del Monorepo.

*¿Tienes feedback o quieres ajustar el enfoque de alguna funcionalidad? Por favor, dímelo.*
