#
# sets homebrew exports and aliases
#

export HOMEBREW_NO_ANALYTICS=1
export HOMEBREW_FORCE_BREWED_CURL=1
export HOMEBREW_FORCE_BREWED_GIT=1
export HOMEBREW_INSTALL_CLEANUP=1

# build from source (-s)
alias bi='brew install -s'
alias bupg='brew upgrade -s'
alias br='brew reinstall -s'
alias buu='brew update && brew upgrade -s'
alias buuf='brew update && brew upgrade -s --fetch-HEAD'
alias buuc='brew update && brew upgrade -s --fetch-HEAD && brew cask upgrade'

alias bupd='brew update'
alias bun='brew uninstall'
alias binf='brew info'

alias bci='brew cask install'
alias bcup='brew cask upgrade'
alias bcun='brew cask uninstall'
