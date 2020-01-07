# 爬ptt表特版圖片並下載

import requests
import sys
from bs4 import BeautifulSoup
import random
import re
import os
os.makedirs('./image/', exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36'}
PTT_URL = 'https://www.ptt.cc'

# 回傳表特版前n頁網址list
def getPageList(page_num):
  url = PTT_URL + '/bbs/Beauty/index.html'
  
  # 下載網站內容
  res = requests.get(url, headers=headers, cookies={'over18': '1'})
  res.encoding = 'utf-8'
  
  page_list = []
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
            page_list.append(PTT_URL+ '/bbs/Beauty/index'+str(index_num-i)+'.html')
          #print(page_list)
          return page_list          
    except:
      print('get page error')
  else:
    print('Invalid url: '+url)

# 回傳文章標題url
def getTitleUrlList(page_list):
	title_url_list = []
	# 下載網站內容
	for url in page_list:
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
						title_url_list.append(PTT_URL+item.find('a').get('href'))
						#print(item.find('a').get('href'))
				#print(beauty_url_list)
			except:
				print('get title error')
		else:
			print('Invalid url: '+url)
	return title_url_list

# 回傳文章內圖片url
def getImageUrlList(title_url_list):
	img_url_list = []
	for url in title_url_list:
		res = requests.get(url, headers=headers, cookies={'over18': '1'})
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
								img_url_list.append(i.get('href'))
								#print(i.get('href'))
			except:
				print('get image error')
		else:
			print('Invalid url: '+url)
	return img_url_list

def randomImage(num):
	#sys.stdout.reconfigure(encoding='utf-8')
	page_list = getPageList(num)
	page = [random.choice(page_list)]
	
	title_list = getTitleUrlList(page)
	title = [random.choice(title_list)]
	
	try:
		img_url_list = getImageUrlList(title)
		print(random.choice(img_url_list))
	except:
		randomImage(num)
	return img_url_list
	
def download(url_list):
	count = 1
	for url in url_list:
		img_res = requests.get(url)
		with open('./image/'+str(count)+'.png', 'wb') as f:
			f.write(img_res.content)
		print("%s download"%url)
		count+=1
	return
	
if __name__ == '__main__':
	randomImage(1)