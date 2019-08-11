#
# exports some variables and sets some aliases
#

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

# Ctrl-Left and Ctrl-Right to move between words
bindkey "^[[1;5C" forward-word
bindkey "^[[1;5D" backward-word
