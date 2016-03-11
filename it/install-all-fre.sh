#!/bin/bash

sudo npm install
bash it/npm-install-gulp.sh
bower install
bash it/compile.sh

exit
