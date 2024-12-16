import eel
from Yaml import *
import os

@eel.expose
def setGV(id, name, monday, ngaysinh):
    send("dl chuyen toi: " + id)
    file_path = os.path.join("data", "giaovien-data.yml")

    if os.path.exists(file_path):
        print(f"Tệp giaovien-data.yml tồn tại trong thư mục. Tiep tuc xu ly!")

        setYaml2("data/giaovien-data.yml", "gv", id, f"{name}|{monday}|{ngaysinh}");
    else:
        print("error")

@eel.expose
def addGV(name, monday, ngaysinh):
    file_path = os.path.join("data", "giaovien-data.yml")

    if os.path.exists(file_path):
        print(f"Tệp giaovien-data.yml tồn tại trong thư mục. Tiep tuc xu ly!")

        addToYaml("data/giaovien-data.yml", "gv", f"{name}|{monday}|{ngaysinh}")
    else:
        print("error")

@eel.expose
def getListGV():
    listGV = getYaml("data/giaovien-data.yml", "gv")
    return listGV

@eel.expose
def send(data):
    print(f"dl: {data}")

eel.init("app")
eel.start("app.html", size=(5000, 5000))