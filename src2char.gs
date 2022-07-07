main = function() //this script translates the payload source code to a list of numbers and store as a file.
    if params.len < 2 then exit("usage: " + program_path.split("/")[-1] + " <source file> <output file>")
    codeFile = get_shell.host_computer.File(current_path + "/" + params[0])
    if not codeFile then exit("Error: payload not found.")
    code = codeFile.get_content
    codeList = []
    for character in code
        codeList.push(character.code)
    end for
    if not get_shell.host_computer.File(current_path + "/" + params[1]) then get_shell.host_computer.touch(current_path, params[1])
    payloadCode = get_shell.host_computer.File(current_path + "/" + params[1])
    payloadCode.set_content("code = []")
    indexOfChar = 0
    if codeList.len % 8 == 0 then outputLines = codeList.len / 8 else outputLines = floor(codeList.len / 8) + 1
    i = 0
    while i < outputLines
        payloadCode.set_content(payloadCode.get_content + char(10) + "code = code + [")
        j = 0
        while j < 8 and indexOfChar < codeList.len
            payloadCode.set_content(payloadCode.get_content + codeList[indexOfChar] + ",")
            indexOfChar = indexOfChar + 1
            j = j + 1
        end while
        payloadCode.set_content(payloadCode.get_content[:-1] + "]")
        i = i + 1
    end while
end function
main