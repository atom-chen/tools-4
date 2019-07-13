# coding=utf-8
# Python 2.7.10

import sys
import util

command = ''
for i in range(1, len(sys.argv)):
    command = command+" "+sys.argv[i]
util.run_cmd(command)