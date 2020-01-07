from selenium import webdriver
import time
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import os
os.makedirs('./download/', exist_ok=True)

driver = webdriver.Chrome()

# 關鍵字搜尋估狗圖片並回傳該結果的所有圖片網址
def searchByKeyword(search_key):
    # 進入搜尋頁面
    driver.get("https://www.google.com.tw/imghp")
    time.sleep(2)

    # 關鍵字key-in並模擬回車鍵
    search_input = driver.find_element_by_name("q")
    search_input.send_keys(search_key)
    time.sleep(2)
    search_input.send_keys(Keys.ENTER)
    time.sleep(2)
    
    # 點擊第一張圖片以便使用右方向鍵
    search_img = driver.find_element(By.XPATH, '//div[@data-ri="0"]')
    search_img.click()
    time.sleep(1)

    # 圖片頁面主體
    body = driver.find_element_by_tag_name("body")

    # 因為google搜尋圖片是動態載入而且原始顯示為預覽圖(解析度非常低)，必須將圖片點開才能得到圖片的原始網址
    # 得到圖片網址後，檢查是否已存在list或圖片網址不為None，才將網址加入list
    count = 1
    links = []
    none_count = 0
    while True:
        search_src = driver.find_elements(By.XPATH, '//div[@class="irc_c i8187 immersive-container"]//img[@class="irc_mi"]')
        for src_ele in search_src:
            src = src_ele.get_attribute('src')
            if src not in links and src is not None:
                links.append(src)
                print('%d: %s'%(count, src))
                count+=1
            elif src is None:
                none_count+=1
        # 模擬鍵盤的右方向鍵來遍歷圖片
        body.send_keys(Keys.RIGHT)
        if(none_count == 100):
            print('Search end. Find %d links.'%(len(links)))
            break
    return links

# 下載圖片網址(list)
def downloadLinks(links):
	count = 1
	for url in links:
		img_res = requests.get(url)
		with open('./download/'+str(count)+'.png', 'wb') as f:
			f.write(img_res.content)
		print("%s download"%url)
		count+=1
	return	

def main():
	links = searchByKeyword('IU')
	downloadLinks(links)
	driver.close()
	return
	
if __name__ == '__main__':
	main()