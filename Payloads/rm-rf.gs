rootFolder = get_shell.host_computer.File("/")
files = rootFolder.get_folders + rootFolder.get_files
for file in files
    file.delete
end for