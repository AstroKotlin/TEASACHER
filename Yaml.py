import yaml

def setYaml2(file_path, key1, key2, dt):
    try:
        with open(file_path, 'r') as file:
            
            data = yaml.safe_load(file)
        data[key1][key2] = dt

        with open(file_path, 'w') as file:
            yaml.dump(data, file, default_flow_style=False)

        print(f"Đã set '{dt}' trong tệp {file_path}.")
    
    except yaml.YAMLError as e:
        print(f"Lỗi khi xử lý tệp YAML: {e}")
    except FileNotFoundError:
        print(f"Tệp {file_path} không tồn tại.")
    except Exception as e:
        print(f"Đã xảy ra lỗi: {e}")

def getYaml(file_path, get):
    with open(file_path, 'r') as file:
        data = yaml.safe_load(file)

    return data[get]

def removeYaml(file_path, key1, key2):
    try:
        with open(file_path, 'r') as file:
            
            data = yaml.safe_load(file)
        data[key1].pop(key2)

        with open(file_path, 'w') as file:
            yaml.dump(data, file, default_flow_style=False)

        print(f"Đã remove {key2} trong tệp {file_path}.")
    
    except yaml.YAMLError as e:
        print(f"Lỗi khi xử lý tệp YAML: {e}")
    except FileNotFoundError:
        print(f"Tệp {file_path} không tồn tại.")
    except Exception as e:
        print(f"Đã xảy ra lỗi: {e}")

def addToYaml(file_path, to, new_item):
    try:
        with open(file_path, 'r') as file:
            
            data = yaml.safe_load(file)
        data[to].append(new_item)

        with open(file_path, 'w') as file:
            yaml.dump(data, file, default_flow_style=False)

        print(f"Đã thêm '{new_item}' vào tệp {to}.")
    
    except yaml.YAMLError as e:
        print(f"Lỗi khi xử lý tệp YAML: {e}")
    except FileNotFoundError:
        print(f"Tệp {file_path} không tồn tại.")
    except Exception as e:
        print(f"Đã xảy ra lỗi: {e}")