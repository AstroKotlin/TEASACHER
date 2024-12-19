from Yaml import *
import eel
import os
import sys

def resourcepath(relative_path):
    try:
        base_path = sys._MEIPASS
    except Exception:
        base_path = os.path.abspath(".")

    return os.path.join(base_path, relative_path)

#Giao Vien
@eel.expose
def removeGV(id):
    removeYaml("data/giaovien-data.yml", "gv", id)

@eel.expose
def setGV(id, name, monday, ngaysinh):
    send("dl chuyen toi: {id}")
    file_path = os.path.join("data", "giaovien-data.yml")

    if os.path.exists(file_path):
        print(f"Tệp giaovien-data.yml tồn tại trong thư mục. Tiep tuc xu ly!")

        setYaml2("data/giaovien-data.yml", "gv", id, f"{name}|{monday}|{ngaysinh}")
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


#Hoc Sinh
@eel.expose
def removeHS(id):
    removeYaml("data/hocsinh-data.yml", "hs", id);

@eel.expose
def setHS(id, name, sdt, ngaysinh):
    send("dl chuyen toi: {id}")
    file_path = os.path.join("data", "hocsinh-data.yml")

    if os.path.exists(file_path):
        print(f"Tệp hocsinh-data.yml tồn tại trong thư mục. Tiep tuc xu ly!")

        setYaml2("data/hocsinh-data.yml", "hs", id, f"{name}|{sdt}|{ngaysinh}")
    else:
        print("error")

@eel.expose
def addHS(name, monday, ngaysinh):
    file_path = os.path.join("data", "hocsinh-data.yml")

    if os.path.exists(file_path):
        print(f"Tệp hocsinh-data.yml tồn tại trong thư mục. Tiep tuc xu ly!")

        addToYaml("data/hocsinh-data.yml", "hs", f"{name}|{monday}|{ngaysinh}")
    else:
        print("error")

@eel.expose
def getListHS():
    listHS = getYaml("data/hocsinh-data.yml", "hs")
    return listHS


@eel.expose
def send(data):
    print(f"dl: {data}")

eel.init(resourcepath("app"))
eel.start("main.html", size=(5000, 5000))