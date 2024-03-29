const express=require("express");
const cors = require("cors");
const app=express();

app.use(express.json());
app.use(
    cors({
      origin: "*",
    })
  );
  app.get("/",(req,res)=>{
    res.send({
        "foods":[
            {
                "id":1,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/3bcd7ef565be01bf721645625db012d7",
                "title":"Veggie Fried Momo Mania",
                "price":90,
                "description":"Our momos are crispy fried and stuffed with veggies",
                "key":"Chinese"
            },
            {
                "id":2,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wwbhls455g2syydrkmvo",
                "title":"Wednesday Strips Bucket",
                "price":350.48,
                "description":"Flat 55% off on 12 pc chicken Peri Peri Boneless Strips served with 4 delicious dips (20gm each)",
                "key":"Main-Course"
            },
            {
                "id":3,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/15ad576a00645b515fe394b658375165",
                "title":"Mixed Fried Rice",
                "price":140,
                "description":"Chicken,mutton and egg",
                "key":"Chinese"
            },
            {
                "id":4,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/urflvtgobqzzpw1zzkck",
                "title":"Veg Hakka Noodles",
                "price":180,
                "description":"Hot and spicy noodles mixed with fresh vegetables and love",
                "key":"Chinese"
            },
            {
                "id":5,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/qxtvxiv1zk8jmnb6xfzu",
                "title":"Sweet Corn Soup Veg",
                "price":115,
                "description":"Chinese sweet corn in perfect blend of sauces and seasoning with vegetable stock.",
                "key":"Chinese"
            },
            {
                "id":6,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/o3drunuszahnljtbuord",
                "title":"Lachha Paratha ( 1 Pc )",
                "price":50,
                "description":"Serves 1 | From the heart of Punjab, parathas prepared the Arsalan way. it is hot and beautifully textured.",
                "key":"Breads"
            },
            {
                "id":7,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/674a5de77218ee2b0bd2e61299062e9c",
                "title":"Cheese Naan ( 1 Pc )",
                "price":124,
                "description":"Serves 1 | Something for cheese lovers, our fresh and hot naans now garnished with cheese and cooked to perfection-the Arsalan way.",
                "key":"Breads"
            },
            {
                "id":8,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xv3a6j9cegghoyl9wicc",
                "title":"Paneer Roll",
                "price":105,
                "description":"Serves 1 | Something for our paneer lovers, Arsalan's special roll made with marinated paneer added with distinctive sauces.",
                "key":"Chinese"
            },
            {
                "id":9,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/bliv6zwuhxkcb9azyemh",
                "title":"Paneer Tikka Kebab (4 Pcs)",
                "price":384,
                "description":"Serves 1 | Paneer marinated with yogurt and Arsalan's in-house spices and then grilled until charred.",
                "key":"Main-Course"
            },
            {
                "id":10,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/hbi3jgyrhxclqy7a7nkj",
                "title":"Paneer Butter Masala",
                "price":289,
                "description":"Serves 1 | Soft paneer, simmered in Arsalan special masala curry made with freshly ground spices.",
                "key":"Main-Course"
            },
            {
                "id":11,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/djz9lxkccvf4e8mhlgsc",
                "title":"Palak Paneer",
                "price":249,
                "description":"Serves 1 | Chunks of paneer cooked in a sauce made with palak and fresh Arsalan secret spices.",
                "key":"Main-Course"
            },
            {
                "id":12,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/piev6am5xel2nebvxqnx",
                "title":"Kashmiri Pulao",
                "price":239,
                "description":"Serves 1 | Rice cooked in milk and loaded with dry fruits, cooked in Arsalan's secret spices which makes it aromatic, mild and faintly sweet in taste.",
                "key":"Main-Course"
            },
            {
                "id":13,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/4ec766dae4cf7e6436b8773c73ed84f1",
                "title":"Nav Ratna Pulao",
                "price":249,
                "description":"Serves 1 | Basmati rice, green peas, cauliflower, paneer, potato, carrots, dry fruits cooked with Arsalan's special spices.",
                "key":"Main-Course"
            },
            {
                "id":14,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/icqqcsrfjyzcmxjcj7wi",
                "title":"Shahi Tukda",
                "price":165,
                "description":"Serves 1 | [Desserts] [Pre Preapared] The ultimate satisfaction to your tastebuds, fried small pieces of bread, dipped in condensed milk, and dry fruits and infused with a hint of cardamom. End your Arsalan feast with this delicacy.",
                "key":"Main-Course"
            },
            {
                "id":15,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/s8ylv3pcx9pze03sv37r",
                "title":"Dal Makhani",
                "price":165,
                "description":"Serves 1 | [Desserts] [Pre Preapared] The ultimate satisfaction to your tastebuds, fried small pieces of bread, dipped in condensed milk, and dry fruits and infused with a hint of cardamom. End your Arsalan feast with this delicacy.",
                "key":"Main-Course"
            },
            {
                "id":16,
                "img":"https://media.istockphoto.com/id/814402474/photo/indian-popular-food-dal-fry-or-traditional-dal-tadka-curry-served-with-jeera-rice-isolated.jpg?s=1024x1024&w=is&k=20&c=juAugok4ZUGnJI0tuMjO2WNgiZn-POtKPGXbHsdH71I=",
                "title":"Dal Fry",
                "price":199,
                "description":"Serves 1 | Arsalan brings you the classic Indian dish, comfortable and always delicious.",
                "key":"Main-Course"
            },
            {
                "id":17,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/06f54345d5f40311e83a0565737b5f2e",
                "title":"Mix Veg",
                "price":269,
                "description":"Serves 1 | Vegetables cooked in a creamy, midly sauce the Arsalan north Indian style.",
                "key":"Main-Course"
            },
            {
                "id":18,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/nzdmqiklrmy3i6b51dlf",
                "title":"Paneer Kofta (2 Pcs)",
                "price":249,
                "description":"Serves 1 | Chunks of paneer stuffed with aromatic goodness of raisins and khoya along with various spices, deep fried and simmering hot in a Arsalan special creamy gravy.",
                "key":"Main-Course"
            },
            {
                "id":19,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/c53ce130542adf692e861b4bf9756883",
                "title":"Cheezy Mushroom Magic - New",
                "price":319,
                "description":"Serves 1 | A new combination with creamy mushroom sauce, chunky black olives, spicy jalapeno, juicy sweet corn, mushroom and 100% mozzarella cheese with garlic sprinkle for extra flavour hit.",
                "key":"Italian"
            },
            {
                "id":20,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/b7d1f56df6414f8b6e49001af95e259a",
                "title":"Ultimate Tandoori Veggie - New",
                "price":379,
                "description":"Serves 1 | An ultimate combination of your favourite veggies- onion, green capsicum, mushroom, tomato, spicy jalapeno on tandoori sauce, topped with 100% mozzarella cheese & generous drizzle of mint mayo.",
                "key":"Italian"
            },
            {
                "id":21,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dpventcrozvfni0lqb10",
                "title":"Margherita",
                "price":169,
                "description":"Serves 1 | Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there!",
                "key":"Italian"
            },
            {
                "id":22,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/s5ld93rsknx0fhj6xarn",
                "title":"Tandoori Paneer",
                "price":319,
                "description":"Serves 1 | It's our signature. Spiced Paneer, Crunchy Onions & Green Capsicum, spicy Red Paprika with delicious Tandoori Sauce and 100% mozzarella cheese!",
                "key":"Italian"
            },
            {
                "id":23,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/6d1e29229b6e4a7bc14be4353f55498d",
                "title":"Hut Treat Meal for 4 - Veg",
                "price":859,
                "description":"Serves 1 | Super Saver Meal Combo @ 859 - 2 Med Veg Pizza of Choice, 2 Classic BreadStixs, 2 Pepsi Pet Bottles.",
                "key":"Italian"
            },
            {
                "id":24,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/tqwnvgnplcapz9c4jkgi",
                "title":"Cheesy Paneer Web",
                "price":38.14,
                "description":"Its a mildly spicy paneer puff patties that one falls in love with",
                "key":"Italian"
            },
            {
                "id":25,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/odzswpxdl26vcgnu8tlq",
                "title":"Chocolate Floral Cake (500 Gram)",
                "price":423.73,
                "description":"Chocolate cake decorated with chocolate ganache buttercream and fresh flowers.",
                "key":"Desert"
            },
            {
                "id":26,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/hihvxqru3afzlessptbe",
                "title":"Choco Mango ( Small )",
                "price":381.36,
                "description":"Mango Flavoured cake decorated with cherry and chocolate nuts on the top.",
                "key":"Desert"
            },
            {
                "id":27,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/e8xeystazndrvdesq2qg",
                "title":"Premium Butterscotch ( Small )",
                "price":381.36,
                "description":"Are you a big fan of caramel? If the answer is yes, here is a cake that is about to become your most Favourite ever! Try our caramello cake and please your taste buds!",
                "key":"Desert"
            },
            {
                "id":28,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/e8xeystazndrvdesq2qg",
                "title":"Premium Butterscotch ( Small )",
                "price":381.36,
                "description":"Are you a big fan of caramel? If the answer is yes, here is a cake that is about to become your most Favourite ever! Try our caramello cake and please your taste buds!",
                "key":"Desert"
            },
            {
                "id":29,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sqs26pp6d3na50pum3yv",
                "title":"Butterscotch Pastry",
                "price":38.14,
                "description":"Spongy cake layered with buterscotch-soaked cream and crunchy nuts.",
                "key":"Desert"
            },
            {
                "id":30,
                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zmxzonaibhdrz1sxpoje",
                "title":"Choco Chips Pastry",
                "price":38.14,
                "description":"It's time to fall in luxury..in love with this delish pastries loaded with choco chips and white chocolate crown to satiate your chocolate desires",
                "key":"Desert"
            }
        ]
        })
  })
  app.listen(8080,()=>{
    try{
         
         console.log("connection")    
    }catch(err){
        console.log(`server is not connect with 8080 port`)
    }
    console.log(`server is connected with port 8080 data base`)
  })