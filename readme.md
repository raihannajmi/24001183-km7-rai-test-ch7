requirement mini final project backend :
1. REST API => CRUD, tapi gak cuman : contoh register, login, /me => check token ini punya siapa.
2. Dashboard dan fungsi API nya => CRUD setiap resource, ada filter dan search, implementasi pagination. Sidebar/navbar => tiap orang 1 menu/resources **OPTIONAL**
3  table nya minimal 5, setiap orang 1 table/resource
4. setiap API itu ada validation (minimal password berapa length, email sudah ada dan lain2)

5. setiap API bikin kreatif/sesuai sistem kalian, maksud nya ? jadi kaya yg dibawah ini :
    sesuai db diagram, terdapat 4 resources dalam sistem kita : user, auth, product dan shop.
      1. ASSOCIATE antar models sesuai database diagram nya => INCLUDE, contoh nya : get product include jg model user dan shop nya.
      2. **PELAJARI SENDIRI SEEDER di SEQUELIZE**, lakukan seeder baik **MONGOOSE ataupun SEQUELIZE**.
      3. Buat middleware baru dengan logic kalian, middleware check apakah user pemilik shop (checkOwnership), kunci nya userId pada Shops table
      4. misal : API buat get data product by id, hanya bisa diakses oleh staff/manajer toko nya.
      5. misal : API untuk : update dan delete product hanya bisa dilakukan oleh owner pemilik toko, gunakan **middleware checkOwnership**.
      6. misal : API create product, saat user create product itu **shop id** nya / toko nya sesuai dengan user yang buat.
      7. setiap API untuk get data **INCLUDE** models yang mempunyai relasi nyya, berikan di data pada response API nya.
      8. pinter mainin attributes nya, jadi jangan semua data dikirim sebagai response API nya.
      9. di API get all data, implementasi : DINAMIS SEARCH, FILTER, PAGINATION, SORTING dan **advance query (search query bisa ke relasi table, contoh saat API get product bisa search by shop name nya)**

6. Sequelize ataupun Mongoose, buat serapih mungkin : **DATABASE CREDENTIALS** di sembunyikan, perintah2 nya migration/seeder/create dan undo2 nya, dibikin di dalam script package.json. **.SEQUELIZERC** jangan lupa diterapin.
7. Implementasi : Design Pattern MVC, upload image jangan di local (server => cloudinary/imagekit **HATI2 CREDENTIALS nya**)
8. ada implementasi 1 table ada kolom yg banyak image, 1 table ada kolom yg single image. 
9. OPEN API => swagger **PELAJARI SENDIRI** bisa liat di referensi challenge yg udh aku kasih => **setiap orang kerjakan resource**
10. implementasi GOOGLE OAUTH **PELAJARI SENDIRI** **OPTIONAL**
11. implementasi PAYMENT GATEWAY **PELAJARI SENDIRI** **OPTIONAL BANGET!!!**
12. implementasi JOOI utk validasi **PELAJARI SENDIRI** **OPTIONAL BANGET**
13. implementasi SENDING EMAIL saat user sukses di create **PELAJARI SENDIRI** **OPTIONAL BANGET!!!**
14. implementasi SENDING SMS ke Manajer/ADMIN/PEMILIK TOKO saat ada data di edit oleh STAFF **PELAJARI SENDIRI** **OPTIONAL BANGET!!!**
15. implementasi VERIFY USER dengan token/link verifikasi dari email yang dikirim saat user di create **PELAJARI SENDIRI** **OPTIONAL BANGET!!!**
16. database diagram dan readme markdown dibikin sejelas dan secantik mungkin.
17. MAIN PULL REQUEST dan COMMIT MESSAGE SEBAIK MUNGKIN => terutama lead nya.

    notes :
    optional => level 1 (boleh kalau MVP nya udah)
    optional banget => level 2 (bolehlah)
    optional banget!!! => level 3 (gak usah)

![My Image](/public/img/db-diagram.png)
