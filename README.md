# Travel Agency Marketplace & ERP Platform

## Overview

Travel Agency Marketplace & ERP Platform is a comprehensive enterprise system that combines:

- Travel Services Marketplace
- Flight Booking Management
- Hotel Booking Management
- Visa Management
- CRM
- Order Management
- Financial & Accounting Management
- Commission & Settlement Management
- HR & Payroll
- Multi Branch Operations
- Customer Portal
- Admin Dashboard
- External Integrations API Layer

---

# Features

## Customer Portal

- Registration & Login
- Profile Management
- Passport Information
- Orders Management
- Bookings Management
- Payments History
- Invoices
- Documents
- Notifications

---

## Marketplace

### Travel Services

- Flights
- Hotels
- Transportation
- Tours
- Insurance

### Visa Services

- Tourist Visa
- Business Visa
- Visit Visa

### Additional Services

- Airport Meet & Assist
- Corporate Services
- Custom Services

---

## Orders Management

Order Lifecycle:

```text
Draft
↓
Pending Payment
↓
Paid
↓
Processing
↓
Waiting Provider
↓
Confirmed
↓
Completed
```

Additional Statuses:

- Refunded
- Cancelled
- Failed
- Need Documents
- Need Review

---

## Flight Booking

Features:

- Search Flights
- Fare Rules
- Passenger Management
- Ticket Issuance
- PNR Management

---

## Hotel Booking

Features:

- Search Hotels
- Room Management
- Voucher Generation
- Booking Confirmation

---

## Visa Management

Features:

- Visa Applications
- Document Upload
- Processing Workflow
- Status Tracking

---

## Financial Module

Features:

- Revenue Tracking
- Expenses Tracking
- Profitability Analysis
- Supplier Settlements
- Commission Engine
- Bank Accounts
- Cash Accounts
- Journal Entries

---

## Commission System

Supported Models:

- Percentage
- Fixed Amount
- Markup
- Tier Based Commission
- Provider Specific Agreements

Example:

Supplier Cost = 100 USD

Commission = 8%

Agency Revenue = 8 USD

Supplier Receivable = 92 USD

---

## HR Module

Features:

- Employees
- Attendance
- Leave Management
- Payroll
- Employee Loans
- Performance Evaluation

---

## CRM

Features:

- Customer Timeline
- Orders
- Payments
- Invoices
- Documents
- Notes
- Communication History

---

## Reports

- Sales Reports
- Profitability Reports
- Provider Reports
- Customer Reports
- Financial Reports
- HR Reports

Export Formats:

- PDF
- Excel

---

# Technical Stack

## Frontend

- Next.js
- TypeScript
- TailwindCSS
- ShadCN UI

## Backend

- NestJS
- TypeScript

## Database

- PostgreSQL

## ORM

- Prisma

## Authentication

- JWT
- Refresh Tokens
- Two Factor Authentication

## Storage

- Amazon S3 Compatible Storage

## Queue System

- Redis
- BullMQ

---

# Project Structure

```text
project-root/

├── apps/
│   ├── web
│   ├── admin
│   └── api
│
├── database/
│   ├── schema
│   ├── migrations
│   └── seed
│
├── docs/
│   ├── SRS
│   ├── API
│   └── ERD
│
├── integrations/
│   ├── flights
│   ├── hotels
│   ├── visas
│   ├── payments
│   └── notifications
│
└── docker/
```

---

# Database Modules

- Authentication
- Users & Roles
- Customers
- Services
- Providers
- Orders
- Payments
- Invoices
- Bookings
- Finance
- Settlements
- HR
- Notifications
- Documents
- Audit Logs

---

# Security

Implemented Security Controls:

- HTTPS
- RBAC
- JWT Authentication
- 2FA
- Audit Logging
- SQL Injection Protection
- XSS Protection
- CSRF Protection
- Encrypted Sensitive Data
- Rate Limiting

---

# Multi Language

Supported Languages:

- Arabic
- English

Future Languages:

- Turkish
- French
- Others

---

# Multi Currency

Supported:

- USD
- SAR
- AED
- YER

Additional currencies can be configured from System Settings.

---

# External Integrations

## Flights

- GDS Providers
- NDC Providers
- Direct Airlines APIs

## Hotels

- Hotel Suppliers APIs

## Visas

- Visa Service Providers

## Payments

- Payment Gateways

## Communications

- Email
- SMS
- WhatsApp

---

# API

Base URL

```text
/api/v1
```

Examples:

```http
POST /auth/login

GET /services

POST /orders

POST /payments

GET /customers/{id}

GET /bookings/{id}
```

---

# Deployment

Requirements:

- Docker
- PostgreSQL
- Redis
- Node.js LTS

Run:

```bash
docker compose up -d
```

---

# Project Status

Current Phase:

Enterprise ERP & Marketplace Platform

Version:

1.0.0

License:

Private Commercial Project
