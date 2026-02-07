# Planeat 🥗

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Turborepo](https://img.shields.io/badge/turborepo-EF4444?style=for-the-badge&logo=turborepo&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)

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
