import os

docs = {}
for file in os.listdir('.'):
    if file[-3:] == '.md':
        path = file
        name = file[:-3].split('-')[3:]
        name = '-'.join(name)
        docs[name] = file
names = list(docs.keys())
names.sort()
#print(names)
print('[')
for name in names:
    route = name
    file = docs[name]
    print('  {')
    print('    "name": "%s",' % name)
    print('    "path": "%s",' % path)
    print('    "route": "%s"' % route)
    print('  },')
print(']')