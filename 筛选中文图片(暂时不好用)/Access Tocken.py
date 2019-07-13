
#!/usr/bin/env python


import urllib, urllib2
import ssl

config={"ApiKey":"GifLh8t1oYHfQ7Iv2zQNirph","SelectKey":"DRdVu02byKsnL1ocL3lGWGEPaD0Sci8T"}

host = 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id='+config["ApiKey"]+'&client_secret='+config["SelectKey"]
request = urllib2.Request(host)
request.add_header('Content-Type', 'application/json; charset=UTF-8')
response = urllib2.urlopen(request)
content = response.read()
if (content):
    print(content)