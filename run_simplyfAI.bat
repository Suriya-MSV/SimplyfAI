@echo off
echo Starting SimplyfAI App...

REM
start cmd /k "cd server && npm install && node server.js"

REM
start cmd /k "cd client && npm install && npm run dev"

echo Both backend and frontend are launching...
pause