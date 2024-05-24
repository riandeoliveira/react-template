#!/bin/bash

# To start your project, fill in the data below and run this file with: bash start.sh

AUTHOR_NAME="John Doe"
GITHUB_USERNAME="johndoe"
AUTHOR_EMAIL="johndoe2000@mail.com"
PROJECT_NAME="My Project"
PROJECT_DESCRIPTION="Lorem Ipsum..."
PROJECT_KEYWORDS="html, css, js"
PROJECT_LANGUAGE="en-US"
HOMEPAGE_URL="https:\/\/www.example.com\/"

function break_line() {
  echo ""
}

function replace_in_file() {
  local var_name=$1
  local file_name=$2
  local var_value=${!var_name}

  sed -i "s/%${var_name}/${var_value}/g" "$file_name"
}

CURRENT_YEAR=$(date +"%Y")
LOWERCASE_PROJECT_NAME=$(echo "$PROJECT_NAME" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

clear

break_line

echo "========== REACT TEMPLATE GENERATOR =========="

break_line

echo "Starting to create the project based on the data provided..."

break_line

# echo "Deleting template .git..."

# rm -rf .git

echo "Modifying index.html..."

replace_in_file "PROJECT_LANGUAGE" "index.html"
replace_in_file "AUTHOR_NAME" "index.html"
replace_in_file "PROJECT_DESCRIPTION" "index.html"
replace_in_file "PROJECT_KEYWORDS" "index.html"
replace_in_file "PROJECT_NAME" "index.html"

echo "Modifying LICENSE..."

replace_in_file "CURRENT_YEAR" "LICENSE"

echo "Modifying package.json..."

replace_in_file "LOWERCASE_PROJECT_NAME" "package.json"
replace_in_file "PROJECT_DESCRIPTION" "package.json"
replace_in_file "HOMEPAGE_URL" "package.json"
replace_in_file "AUTHOR_NAME" "package.json"
replace_in_file "AUTHOR_EMAIL" "package.json"
replace_in_file "GITHUB_USERNAME" "package.json"

echo "Modifying README.md..."

replace_in_file "GITHUB_USERNAME" "README.md"
replace_in_file "LOWERCASE_PROJECT_NAME" "README.md"
replace_in_file "PROJECT_NAME" "README.md"
replace_in_file "PROJECT_DESCRIPTION" "README.md"
replace_in_file "HOMEPAGE_URL" "README.md"
replace_in_file "AUTHOR_NAME" "README.md"

echo "Modifying README.pt-br.md..."

replace_in_file "GITHUB_USERNAME" "README.pt-br.md"
replace_in_file "LOWERCASE_PROJECT_NAME" "README.pt-br.md"
replace_in_file "PROJECT_NAME" "README.pt-br.md"
replace_in_file "PROJECT_DESCRIPTION" "README.pt-br.md"
replace_in_file "HOMEPAGE_URL" "README.pt-br.md"
replace_in_file "AUTHOR_NAME" "README.pt-br.md"

break_line

echo "Deleting 'start.sh' file..."
echo "Have a nice coding, $AUTHOR_NAME!"

sleep 3

# rm -rf runme.sh
