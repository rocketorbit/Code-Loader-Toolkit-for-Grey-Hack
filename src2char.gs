main = function() //this script translates the payload source code to a list of numbers and store as a file.
    if params.len < 2 then exit("usage: " + program_path.split("/")[-1] + " <source file> <output file>")
    srcFile = get_shell.host_computer.File(current_path + "/" + params[0])
    if not srcFile then exit("Error: source not found.")
    src = srcFile.get_content
    codeList = []
    for character in src
        codeList.push(character.code)
    end for
    codeContent = "code = []"
    indexOfChar = 0
    if codeList.len % 8 == 0 then outputLines = codeList.len / 8 else outputLines = floor(codeList.len / 8) + 1
    i = 0
    while i < outputLines
        codeContent = codeContent + char(10) + "code = code + ["
        j = 0
        while j < 8 and indexOfChar < codeList.len
            codeContent = codeContent + codeList[indexOfChar] + ","
            indexOfChar = indexOfChar + 1
            j = j + 1
        end while
        codeContent = codeContent[:-1] + "]"
        i = i + 1
    end while
    if not get_shell.host_computer.File(current_path + "/" + params[1]) then get_shell.host_computer.touch(current_path, params[1])
    codeFile = get_shell.host_computer.File(current_path + "/" + params[1])
    codeFile.set_content(codeContent)
end function
main