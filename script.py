import requests
from bs4 import BeautifulSoup
import pandas as pd

url = "https://myshop.pk/laptops-desktops-computers/laptops"

responce = requests.get(url)
soup = BeautifulSoup(responce.text,"html.parser")
products= soup.find_all("div",class_="product-item-info type6")
data=[]
for product in products:
    name = product.find("strong").text
    details = product.find("div",class_="mso_listing_detail").text
    link = product.find("a",class_="product-item-link")["href"]
    price = product.find("div",class_="price-box price-final_price").text
    #print(name," | ", details," | ", link," | ",price,)

    data.append({
        "Product Name" : name,
        "Details": details,
        "Link": link,
        "Price":price 
    });

datainexcel=pd.DataFrame(data)
datainexcel.to_excel("Products.xlsx",index=False)
print("Excel file created successfully")