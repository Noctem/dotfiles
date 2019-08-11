#!/usr/bin/env bash

set -o pipefail -e
shopt -s dotglob
shopt -s extglob
shopt -s globstar
shopt -s nullglob

usage='Usage: dotroot-sync.sh [-c] [-f] [-r] [-s]'
copy='cp'
link='ln'
usesudo=0
from=0

while getopts 'cfhrs' opt; do
	case "$opt" in
		c)
			link='cp -p'
			;;
		f)
			from=1
			;;
		h)
			echo "$usage"
			exit 0
			;;
		r)
			usesudo=1
			;;
		s)
			link='ln -s'
			;;
		?)
			echo "$usage"
			exit 1
			;;
	esac
done

if [[ $usesudo -eq 1 ]]; then
	copy="sudo ${copy}"
	link="sudo ${link}"
fi

cd "$HOME"

if [[ $from -ne 1 ]]; then
	for file in .dotroot/**/!(.DS_Store|.|..); do
		[[ -f "$file" ]] && $link -fv "$file" "${file#.dotroot}"
	done
else
	if [[ "$link" = *'ln -s' ]]; then
		echo 'Requested symlinks from root into .dotroot, which is not allowed.'
		exit 1
	fi

	for file in .dotroot/**/!(.DS_Store|.|..); do
		[[ -f "${file#.dotroot}" ]] && $link -fv "${file#.dotroot}" "$file"
	done
fi
