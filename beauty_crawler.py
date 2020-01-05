import requests
import sys
from bs4 import BeautifulSoup
import random
import re

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36'}
PPT_URL = 'https://www.ptt.cc'
beauty_url_list = []
img_list = []

def getUrlList():
  url = PPT_URL + '/bbs/Beauty/index.html'
  # 下載網站內容
  res = requests.get(url, headers=headers, cookies={'over18': '1'})
  res.encoding = 'utf-8'

  # 確認是否下載成功
  if res.status_code == requests.codes.ok:
    # 以 BeautifulSoup 解析 HTML 程式碼
    try:
      soup = BeautifulSoup(res.text, 'html.parser')
      for item in soup.find_all('div', class_='title'):
        if item.text[2:4] == '正妹' or item.text[2:4] == '神人':
          #print(PPT_URL+item.find('a').get('href'))
          beauty_url_list.append(PPT_URL+item.find('a').get('href'))
      #print(beauty_url_list)
      return beauty_url_list
    except:
      print('error')
  else:
    print('Invalid url: '+url)

def getRandomImage(url_list):
  random_url = random.choice(url_list)
  res = requests.get(random_url, headers=headers, cookies={'over18': '1'})
  res.encoding = 'utf-8'
  # 確認是否下載成功
  if res.status_code == requests.codes.ok:
    # 以 BeautifulSoup 解析 HTML 程式碼
    try:
      soup = BeautifulSoup(res.text, 'html.parser')
      for item in soup.find_all('a'):
        if(item.get('href')[len(item.get('href'))-4:] == '.jpg'):
          img_list.append(item.get('href'))
      print(random.choice(img_list))
    except:
      print('error')
  else:
    print('Invalid url: '+url)

#sys.stdout.reconfigure(encoding='utf-8')
getRandomImage(getUrlList())
