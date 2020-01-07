import requests
import sys
from bs4 import BeautifulSoup
import random

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36'}
data_src_list = []

def gooImage(search_text):
    search_text = search_text.replace('\"','')
    url = 'https://www.google.com.tw/search?tbm=isch&q='+search_text
    # 下載網站內容
    res = requests.get(url, headers=headers)
    res.encoding = 'utf-8'
    
    # 確認是否下載成功
    if res.status_code == requests.codes.ok:
        # 以 BeautifulSoup 解析 HTML 程式碼
        try:
            soup = BeautifulSoup(res.text, 'html.parser')
            img = soup.find_all(class_='rg_ic rg_i')
            for item in img:
                if(item.has_attr('data-src')):
                    #print(item['data-src'])
                    data_src_list.append(item['data-src'])
                    '''if(len(data_src_list)==20):
                        break'''
            print(random.choice(data_src_list))
            #print(len(data_src_list))
        except:
            gooImage(sys.argv[1])
            #gooImage('詩乃')

sys.stdout.reconfigure(encoding='utf-8')
gooImage(sys.argv[1])
#gooImage('詩乃')
