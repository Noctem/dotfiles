#
# exports some variables and sets some aliases
#

export PATH="/usr/local/opt/python/libexec/bin:/usr/local/opt/ccache/libexec:/usr/local/bin/Scripts:${HOME}/Library/Python/3.7/bin:/Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
export MACOSX_DEPLOYMENT_TARGET=10.14
export CFLAGS='-march=native -pipe -flto'
export CXXFLAGS="${CFLAGS}"
export OBJCFLAGS="${CFLAGS}"
export OBJCXXFLAGS="${CFLAGS}"
export LDFLAGS="-flto"

# use rmate if connected via SSH, else mate
[[ $SSH_TTY ]] && export EDITOR='rmate -w' || export EDITOR='mate -w'

alias clang-check=/usr/local/opt/llvm/bin/clang-check
alias clang-tidy=/usr/local/opt/llvm/bin/clang-tidy

alias config='git --git-dir="${HOME}/.cfg" --work-tree="$HOME"'

alias l='exa -lahm'
