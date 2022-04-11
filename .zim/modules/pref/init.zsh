#
# exports some variables and sets some aliases
#

export PATH="/usr/local/opt/python@3.10/bin:/usr/local/opt/python@3.10/libexec/bin:/usr/local/zfs/bin:/usr/local/opt/ccache/libexec:${HOME}/bin:/usr/local/bin/Scripts:${HOME}/Library/Python/3.10/bin:/usr/local/bin:/usr/local/sbin:/usr/bin:/bin:/usr/sbin:/sbin"
export MACOSX_DEPLOYMENT_TARGET=12.1
export CFLAGS='-march=alderlake -mtune=alderlake -mno-avx512f -pipe -flto=thin -O2'
export CXXFLAGS="$CFLAGS"
export OBJCFLAGS="$CFLAGS"
export OBJCXXFLAGS="$CFLAGS"
export LDFLAGS="$CFLAGS"
export RUSTFLAGS="-C target-cpu=alderlake -C target-feature=-avx512f"

# use rmate if connected via SSH, else mate
[[ $SSH_TTY ]] && export EDITOR='rmate -w' || export EDITOR='mate -w'

alias clang-format=/usr/local/opt/llvm/bin/clang-format
alias clang-check=/usr/local/opt/llvm/bin/clang-check
alias clang-tidy=/usr/local/opt/llvm/bin/clang-tidy
alias python=python3

alias config='git --git-dir="${HOME}/.cfg" --work-tree="$HOME"'

alias l='exa -lahm'

# Ctrl-Left and Ctrl-Right to move between words (or Command when using Alacritty on macOS)
bindkey "^[[1;5C" forward-word
bindkey "^[[1;5D" backward-word

alias mp4box=MP4Box
alias op='optimizeFiles.py -p'
alias minfo='MP4Box -info'

function aacon() {
	convert -resize 768x768 -quality 90 "$1" "$1"
	optimizeFiles.py -p "$(dirname ${1})"
}
