# Book Project

## Project Structure
- `backend/` - ASP.NET Core API
- `frontend/` - Next.js application

## Development

## Init database

docker compose up -d
cd backend
dotnet ef database update -p BookStore.DataAccess -s BookStore.API


### Backend
```bash
cd backend/BookStore.API
dotnet run

### Frontend
cd frontend

npm install 
npm run dev