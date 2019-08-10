#
# sets homebrew exports and aliases
#

export HOMEBREW_NO_ANALYTICS=1
export HOMEBREW_FORCE_BREWED_CURL=1
export HOMEBREW_FORCE_BREWED_GIT=1
export HOMEBREW_INSTALL_CLEANUP=1

alias bi='brew install'
alias bupg='brew upgrade'
alias br='brew reinstall'
alias buu='brew update && brew upgrade'
alias buuf='brew update && brew upgrade --fetch-HEAD'
alias buuc='brew update && brew upgrade --fetch-HEAD && brew cask upgrade'

# build from source (-s)
alias bis='brew install -s'
alias bupgs='brew upgrade -s'
alias brs='brew reinstall -s'
alias buus='brew update && brew upgrade -s'
alias buufs='brew update && brew upgrade -s --fetch-HEAD'
alias buucs='brew update && brew upgrade -s --fetch-HEAD && brew cask upgrade'

alias bupd='brew update'
alias bun='brew uninstall'
alias binf='brew info'

alias bci='brew cask install'
alias bcup='brew cask upgrade'
alias bcun='brew cask uninstall'
