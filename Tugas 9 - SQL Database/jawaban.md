### 1.Login mysql terlebih dahulu
```
mysql -u root
```

### 1. Membuat Database
```
CREATE DATABASE myshop;
```

### 2. Untuk mengakses database yang telah kita buat, perintah sebagai berikut.
```
use myshop;
```
### 3. Membuat Table dalam Database
- users 
```
CREATE TABLE users( id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255) );
```
- items 
```
CREATE TABLE items( id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), description VARCHAR(255), price INT, stock INT, category_id INT, FOREIGN KEY (category_id) REFERENCES categories(id) );
```
- categories
```
CREATE TABLE categories( id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) );
```

### 4. Memasukan Data pada Table
- users
```
INSERT INTO users (name, email, password) VALUES ("John Doe", "john@doe.com", "john123");
INSERT INTO users (name, email, password) VALUES ("Jane Doe", "jane@doe.com", "jenita123");
```
- items
```
INSERT INTO items (name, description, price, stock, category_id) VALUES ("Sumsang b50", "hape keren dari merek sumsang", 4000000, 100, 1);
INSERT INTO items (name, description, price, stock, category_id) VALUES ("Uniklooh", "baju keren dari brand ternama", 500000, 50, 2);
INSERT INTO items (name, description, price, stock, category_id) VALUES ("IMHO Watch", "jam tangan anak yang jujur banget", 2000000, 10, 1);
```
- categories
```
INSERT INTO categories (name) VALUES ("gadget")
INSERT INTO categories (name) VALUES ("cloth");
INSERT INTO categories (name) VALUES ("men");
INSERT INTO categories (name) VALUES ("women");
INSERT INTO categories (name) VALUES ("branded");
```

### 5. Mengambil Data dari Database
a. Mengambil data users
```
SELECT id,name,email FROM users;
```

![image](https://user-images.githubusercontent.com/63898506/158532073-95391d29-81aa-4bbc-b20b-e2c4b170b8a1.png)


b. Mengambil data items
```
SELECT * FROM items WHERE price > 1000000;
```
![image](https://user-images.githubusercontent.com/63898506/158532212-6ef15bc7-3f81-4b00-ac6a-bbc1837ca734.png)

```
SELECT * FROM items WHERE name LIKE "%sang%";
```
![image](https://user-images.githubusercontent.com/63898506/158532290-b5c85904-b1bc-4771-bbdc-cdb4677f2a56.png)

c. Menampilkan data items join dengan kategori
```
SELECT items.name, items.description, items.price, items.stock, items.category_id, categories.name AS "kategori" FROM items JOIN categories ON items.category_id = categories.id;
```
![image](https://user-images.githubusercontent.com/63898506/158532389-9ec80764-eb39-47a3-bc15-377f1279fe0c.png)

### 6. Mengubah Data dari Database
```
UPDATE items SET price = 2500000 WHERE name LIKE "%sumsang%";
```
![image](https://user-images.githubusercontent.com/63898506/158532485-c2bde59b-d0c6-4d51-aca9-1cc969723e24.png)

Perubahan data
![image](https://user-images.githubusercontent.com/63898506/158532806-2eec6aee-c428-4a01-a00f-399dcaf863b5.png)