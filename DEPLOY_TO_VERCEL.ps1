# FOR EMILY — Vercel deployment to the existing protected project.
# Run this script from PowerShell. It will not send anything to Emily.
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

function Check-Exit([string] $Step) {
    if ($LASTEXITCODE -ne 0) {
        throw "$Step failed with exit code $LASTEXITCODE. Deployment stopped."
    }
}

if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    throw "Node.js/npm is missing. Install Node.js 22 LTS first."
}
if (-not (Get-Command npx -ErrorAction SilentlyContinue)) {
    throw "npx is missing. Install Node.js 22 LTS first."
}

Write-Host "`n[1/5] Installing dependencies..." -ForegroundColor Cyan
npm install --no-audit --no-fund
Check-Exit "npm install"

Write-Host "`n[2/5] Checking TypeScript..." -ForegroundColor Cyan
npm run typecheck
Check-Exit "TypeScript validation"

Write-Host "`n[3/5] Building production application..." -ForegroundColor Cyan
npm run build
Check-Exit "Next.js production build"

Write-Host "`n[4/5] Signing in to Vercel if necessary..." -ForegroundColor Cyan
npx --yes vercel@latest login
Check-Exit "Vercel login"

Write-Host "`n[5/5] Linking and deploying a protected PREVIEW..." -ForegroundColor Cyan
npx --yes vercel@latest link --yes --scope dusan2 --project prj_hTrrluFGOyfNBaCRc9yT0TuMjtB1
Check-Exit "Vercel project link"
npx --yes vercel@latest deploy --yes --scope dusan2
Check-Exit "Vercel preview deployment"

Write-Host "`nDeployment requested. Copy the deployment URL above back into ChatGPT for verification." -ForegroundColor Green
Write-Host "Project: for-emily-private-consultation (dusan2)."
Write-Host "Access: Vercel Authentication protection is enabled."
