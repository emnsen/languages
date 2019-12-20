import json

with open('data.json') as json_file:
    data = json.load(json_file)
    for locale in ['en', 'ar', 'fa', 'he', 'tr']:
      print(data[locale])
