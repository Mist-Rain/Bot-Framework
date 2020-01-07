from selenium import webdriver
import time
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()

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

    img_count = 0
    # 點擊圖片
    while True:
        try:
            search_img = driver.find_element(By.XPATH, '//div[@data-ri="'+str(img_count)+'"]')
            search_img.click()
            time.sleep(0.15)
            img_count+=1
        except:
            print('Search end.')
            break

searchByKeyword('IU')
