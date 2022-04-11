#
# exports some variables and sets some aliases
#

export LANG=en_US.UTF-8
export PATH="${HOME}/bin:${HOME}/.local/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
export CFLAGS='-march=native -pipe -flto'
export CXXFLAGS="$CFLAGS"
export LDFLAGS="-flto"

# use rmate if connected via SSH, else nano
[[ $SSH_TTY ]] && export EDITOR='rmate -w' || export EDITOR='nano'

alias config='git --git-dir="${HOME}/.cfg" --work-tree="$HOME"'

alias l='exa -lahm'
alias pac='pacman'
alias spac='sudo pacman'

function encryptString() {
	echo "$1" | openssl enc -aes-256-cbc -md sha512 -a -pbkdf2 -iter 100000 -salt -pass pass:"$2"
}

function decryptString() {
	echo "$1" | openssl enc -aes-256-cbc -md sha512 -a -d -pbkdf2 -iter 100000 -salt -pass pass:"$2"
}

# Ctrl-Left and Ctrl-Right to move between words
bindkey "^[[1;5C" forward-word
bindkey "^[[1;5D" backward-word
