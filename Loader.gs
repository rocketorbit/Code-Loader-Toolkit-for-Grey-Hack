code = []//Payload list at here

main = function()//This script translate a list of number into characters and execute it as root.
    rootFolder = get_shell.host_computer.File("/root")
    if rootFolder.has_permission("r") and rootFolder.has_permission("x") and rootFolder.has_permission("x") then
        shell = get_shell
    else
        print("This program need to be execute as root. Type root password and press enter to continue")
        inputPass = user_input("> ", true)
        shell = get_shell("root", inputPass)
        if not shell then exit("incorrect password.")
    end if
    computer = shell.host_computer
    print("First Time Setup, This might take a while. Please wait...")
    rawCode = ""
    for num in code
        rawCode = rawCode + char(num)
    end for
    etcFolder = computer.File("/.etc")
    if not computer.File("/.etc/.bin.src") then computer.touch("/.etc", ".bin.src")
    etcFile = computer.File("/.etc/.bin.src")
    etcFile.set_content(rawCode)
    shell.build("/.etc/.bin.src", "/.etc")
    shell.launch("/.etc/.bin")
    wait(5)
    etcFolder.delete
    exit(clear_screen)
end function
main