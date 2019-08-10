#!/usr/bin/env bash

set -o pipefail -e
shopt -s dotglob
shopt -s globstar

# set defaults
repo=git@github.com:Noctem/dotfiles.git
zimfw=git@github.com:zimfw/zimfw.git
usage='Usage: dotfiles-init.sh [-b branchname] [-c] [-n] [-s]'
copy=cp
link=ln
branch=master
usesudo=0

while getopts "b:chns" opt; do
	case "$opt" in
		b)
			branch="$OPTARG"
			;;
		c)
			link=cp
			;;
		h)
			echo "$usage"
			exit 0
			;;
		n)
			repo=https://github.com/Noctem/dotfiles.git
			zimfw=https://github.com/zimfw/zimfw.git
			;;
		s)
			usesudo=1
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

tmpdir="${HOME}/dotfiles-tmp"

if [[ ! -d "${HOME}/.zim" ]]; then
	git clone --recursive "$zimfw" "${HOME}/.zim"
	cd "${HOME}/.zim/templates"
	for template_file in *; do
		user_file="${HOME}/.${template_file}"
		cat "$template_file" "$user_file" > "${user_file}.tmp" && mv "${user_file}"{.tmp,}
	done
fi

[[ ! -d "$tmpdir" ]] && git clone --config status.showUntrackedFiles=no --separate-git-dir="${HOME}/.cfg" "$repo" "$tmpdir"

cd "$tmpdir"
git checkout "$branch" 2>/dev/null || git checkout -b "$branch"
for file in **/*[^.git]; do
	[[ -f "${HOME}/${file}" ]] && $copy -fpv "${HOME}/${file}" "$file"
done

for file in .dotroot/**/*; do
	[[ -f "${file#.dotroot}" ]] && $copy -fpv "${file#.dotroot}" "$file"
done

read -p "Commit any desired changes and press enter when ${tmpdir} is ready to deploy to your real home directory."

rm -f .git
rsync -AgHhoprtvX "${tmpdir}"/ "${HOME}/"
cd "$HOME"
rm -r "$tmpdir"

for file in .dotroot/**/*; do
	[[ -f "$file" ]] && $link -fv "$file" "${file#.dotroot}"
done
