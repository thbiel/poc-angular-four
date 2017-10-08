#!/usr/bin/env bash

SCRIPT_DIR=`dirname $0`
DOCS_DIR=${SCRIPT_DIR}/docs
DIST_DIR=${SCRIPT_DIR}/dist

rm -r ${DOCS_DIR}/**
cp -a ${DIST_DIR}/. ${DOCS_DIR}/

echo 'Files copied from generated ../dist folder.' > ${DOCS_DIR}/README.txt
