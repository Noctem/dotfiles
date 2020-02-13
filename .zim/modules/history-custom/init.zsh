#
# Configures history options
#

# The file to save the history in.
HISTFILE="${HOME}/.zsh_history"

# The maximum number of events stored in the internal history list and in the history file.
HISTSIZE=1048576
SAVEHIST=16777216

# record timestamp of command in HISTFILE
setopt EXTENDED_HISTORY

# delete duplicates first when HISTFILE size exceeds HISTSIZE
setopt HIST_EXPIRE_DUPS_FIRST

# add commands to HISTFILE in order of execution
setopt INC_APPEND_HISTORY

# This option both imports new commands from the history file, and also causes your
# typed commands to be appended to the history file (like specifying INC_APPEND_HISTORY).
# The history lines are also output with timestamps ala EXTENDED_HISTORY.
setopt SHARE_HISTORY

# Do not enter command lines into the history list if they are duplicates of the previous event.
setopt HIST_IGNORE_DUPS

# Remove command lines from the history list when the first character on the
# line is a space, or when one of the expanded aliases contains a leading space.
setopt HIST_IGNORE_SPACE

# Whenever the user enters a line with history expansion, don't execute the line directly;
# instead, perform history expansion and reload the line into the editing buffer.
setopt HIST_VERIFY

alias history='custom_history'

# Lists the ten most used commands.
alias history-stat="fc -ln 0 | awk '{print \$1}' | sort | uniq -c | sort -nr | head"
