#
# sets homebrew exports and aliases
#

export HOMEBREW_NO_ANALYTICS=1
export HOMEBREW_FORCE_BREWED_CURL=1
export HOMEBREW_FORCE_BREWED_GIT=1
export HOMEBREW_INSTALL_CLEANUP=1
export HOMEBREW_DEVELOPER=1
export HOMEBREW_NO_AUTO_UPDATE=1

# build from source (-s)
alias bi='brew install -s'
alias bupd='brew update; [[ $(git --work-tree=/usr/local/Homebrew --git-dir=/usr/local/Homebrew/.git status --porcelain Library/Homebrew/extend/ENV/shared.rb) != " M Library/Homebrew/extend/ENV/shared.rb" ]] && (pushd /usr/local/Homebrew; git reset --hard; patch --no-backup-if-mismatch -p1 -i /Users/david/.dotother/homebrew-native.diff; popd)'
alias bupg='brew upgrade -s'
alias br='brew reinstall -s'
alias buu='bupd; brew upgrade -s'
alias buuf='bupd; brew upgrade -s --fetch-HEAD'
alias buuc='bupd; brew upgrade -s --fetch-HEAD; brew upgrade --greedy'

alias bun='brew uninstall'
alias binf='brew info'

alias bci='brew cask install'
alias bcup='brew cask upgrade'
alias bcun='brew cask uninstall'
