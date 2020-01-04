import requests
import json
from bs4 import BeautifulSoup

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36'}

def getWeather(location):
  url = 'https://www.google.com/search?q=天氣 '+location
  # 下載網站內容
  res = requests.get(url, headers=headers)
  res.encoding = 'utf-8'

  # 確認是否下載成功
  if res.status_code == requests.codes.ok:
    # 以 BeautifulSoup 解析 HTML 程式碼
    try:
      soup = BeautifulSoup(res.text, 'html.parser')
      print('地點：',soup.find('div', id='wob_loc').text)
      print('時間：',soup.find('div', id='wob_dts').text)
      print('天氣：',soup.find('span', id='wob_dc').text)
      print('溫度：',soup.find('span', id='wob_tm').text,'°C')
      print('降雨機率：',soup.find('span', id='wob_pp').text)
      print('濕度：',soup.find('span', id='wob_hm').text)
      print('風速：',soup.find('span', id='wob_ws').text)
      data = {'地點': soup.find('div', id='wob_loc').text, '時間': soup.find('div', id='wob_dts').text, '天氣': soup.find('span', id='wob_dc').text, '溫度': soup.find('span', id='wob_tm').text+'°C', '降雨機率': soup.find('span', id='wob_pp').text, '濕度': soup.find('span', id='wob_hm').text, '風速': soup.find('span', id='wob_ws').text}
      json_data = json.dumps(data, ensure_ascii=False, sort_keys=True, indent=4, separators=(',', ': '))
      return json_data
    except:
      print('查無此地！')

def main():
  print(getWeather('台中市'))


if __name__ == '__main__':
  main()
