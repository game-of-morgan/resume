#!/bin/bash
npm run build
cd ./build
git init
git remote add origin git@github.com:game-of-morgan/resume.git
git fetch --all
git add .
git commit -m 'Deploy pages'
git checkout -b gh-pages
git push -u origin gh-pages --force-with-lease
cd ../