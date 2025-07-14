@echo off
echo Regenerating ATS-friendly Resume PDF...

:: Navigate to scripts directory
cd scripts

:: Install dependencies if not already installed
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
)

:: Generate the PDF
echo Generating PDF from ATS-friendly HTML...
npm run generate-pdf

echo PDF generation completed!
echo File location: ..\public\Pankaj_Kumar_Gond_Resume.pdf

:: Go back to project root
cd ..
