#
# sets up gpg-agent
#

gpg-agent --daemon &>/dev/null
export GPG_TTY=$TTY
