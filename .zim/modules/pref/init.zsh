#
# exports some variables and sets some aliases
#

export PATH="/usr/lib/ccache/bin/:${HOME}/bin:${HOME}/.local/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
export CFLAGS="-march=armv7-a -mfloat-abi=hard -mfpu=neon-fp-armv8 -pipe -fno-plt -mtune=native"
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
