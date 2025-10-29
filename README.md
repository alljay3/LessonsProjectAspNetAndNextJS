# Book Project

## Структра проекта
- `backend/` - ASP.NET Core API
- `frontend/` - Next.js application`

## Development

Должны быть установлены:
dontnet
docker
node.js

## Инициализация базы данных при первом запуске 

```bash
docker compose up -d
cd backend
dotnet ef database update -p BookStore.DataAccess -s BookStore.API
```
## Backend (Запуск в отдльной консоли)

```bash
cd backend/BookStore.API
dotnet run
```
## Frontend (Запуск в отдльной консоли)
```bash
cd frontend
npm install 
npm run dev
```

Frontend:
```bash
http://localhost:3000
```
Backend: 
```bash
http://localhost:5007
```
