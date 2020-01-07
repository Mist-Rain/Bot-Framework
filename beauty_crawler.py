import requests
import sys
from bs4 import BeautifulSoup
import random
import re
import os
os.makedirs('./image/', exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36'}
PPT_URL = 'https://www.ptt.cc'
beauty_url_list = []
img_list = []
page_list = []

def getRandomPage(page_num):
  url = PPT_URL + '/bbs/Beauty/index.html'
  # 下載網站內容
  res = requests.get(url, headers=headers, cookies={'over18': '1'})
  res.encoding = 'utf-8'
  # 確認是否下載成功
  if res.status_code == requests.codes.ok:
    # 以 BeautifulSoup 解析 HTML 程式碼
    try:
      soup = BeautifulSoup(res.text, 'html.parser')
      for child_a in soup.find('div', class_='btn-group btn-group-paging').find_all('a'):
        if(child_a.text == '‹ 上頁'):
          href = child_a.get('href')
          index_str = href[href.index('x')+1:href.index('.')]
          index_num = int(index_str)+1
          #print(index_num)
          for i in range(page_num):
            page_list.append(PPT_URL+ '/bbs/Beauty/index'+str(index_num-i)+'.html')
          #print(page_list)
          return page_list          
    except:
      print('get page error')
  else:
    print('Invalid url: '+url)

def getTitleUrlList(page_list):
  url = random.choice(page_list)
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
          #print(item.find('a').text)
          #print(PPT_URL+item.find('a').get('href'))
          beauty_url_list.append(PPT_URL+item.find('a').get('href'))
      #print(beauty_url_list)
      return beauty_url_list
    except:
      print('get title error')
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
      for item in soup.find_all('div', id='main-content'):
        for i in item.find_all('a'):
          if(i.parent.name != 'span'):
            if(i.get('href')[len(i.get('href'))-4:] == '.jpg'):
              img_list.append(i.get('href'))
      #print(img_list)
      random_img = random.choice(img_list)
      print(random_img)
      '''img_res = requests.get(random_img)
      with open('./image/img.png', 'wb') as f:
        f.write(img_res.content)'''
    except:
      getRandomImage(getTitleUrlList(getRandomPage(200)))
  else:
    print('Invalid url: '+url)

#sys.stdout.reconfigure(encoding='utf-8')
getRandomImage(getTitleUrlList(getRandomPage(200)))
