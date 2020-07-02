export const categories = [{
        id: 3,
        name: 'Cookies',
        photo_url: 'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
    },
    {
        id: 1,
        name: 'Mexican Cuisine',
        photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
    }, {
        id: 5,
        name: 'Azerbaijan Cuisine',
        photo_url: 'https://img.delicious.com.au/28nERLEz/del/2019/11/azerbaijan-food-118337-1.jpg'
    }, {
        id: 2,
        name: 'Italian Cuisine',
        photo_url: 'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
    },

    {
        id: 7,
        name: " Vegan Food",
        photo_url: "https://mfacdn.cachefly.net/chooseveg/sites/2/2018/11/Healthy-Foods-1440x570.jpg"
    },
    {
        id: 4,
        name: 'Smoothies',
        photo_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
    }, {
        id: 6,
        name: "Salads",
        photo_url: 'https://d1f28u9l1tudce.cloudfront.net/menu/category-marquee/menu-category-fresh-salads-cashew-chicken.jpg'
    }, {
        id: 0,
        name: 'Desserts',
        photo_url: 'https://images.eatsmarter.com/sites/default/files/styles/1600x1200/public/french-gourmet-desserts-465251.jpg'
    },
];

export const recipes = [{
        recipeId: 122,
        categoryId: 3,
        title: 'Oatmeal Cookies',
        photo_url: 'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
        photosArray: [
            'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
            "https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg",
            'https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg',
            'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e',
            'https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg'
        ],
        time: '15',
        ingredients: [
            [0, '200ml'],
            [1, '5g'],
            [2, '300g']
        ],
        description: '-- Start with cleaned and peeled russet potatoes that you have cut into 3/8-inch match sticks. Place in bowl of very cold water: keep rinsing and changing the water until the water is clear; drain thoroughly and dry with paper towels or a clean lint-free kitchen towel.\n\n -- Meanwhile, you preheat your hot oil to 350 degrees F. Place prepared taters in oil and cook about 5 minutes. They will have that blond-tone color to them. \n\n -- Note: Once you add cold potatoes to the hot oil, the temperature of your oil is going to drop - you want it to be somewhere between 330 - 325 degrees F. \n\n -- Remove from oil; drain and cool. Now - either refrigerate until ready to finish cooking, or cool completely and freeze up to 3 months. To freeze properly - place completely cooled fries in single layer on tray and place in freezer until frozen. Then bag them.\n\n -- To finish cooking - preheat your oil to 400* F. Add your cold fries (which will drop the oil temp - which is fine because you want it near the 375 degrees F. temp) and cook a few minutes until done. Lightly salt them and shake well so that the salt distributes well and they are not salty.'
    },
    {
        recipeId: 3,
        categoryId: 4,
        title: 'Triple Berry Smoothie',
        photo_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
        photosArray: [
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
            'https://www.vitamix.com/media/other/images/xVitamix-Triple-Berry-Smoothie-square-crop__1.jpg.pagespeed.ic.OgTC3ILD3R.jpg',
            'http://images.media-allrecipes.com/userphotos/960x960/3798204.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W66I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ'
        ],
        time: '10',
        ingredients: [
            [59, '1'],
            [60, '1/2 lbs'],
            [61, '1/2 liters'],
        ],
        description: 'In a blender, combine all ingredients and blend until smooth. Then divide between 2 cups and top with blackberries, if desired.'
    },
    {
        recipeId: 2,
        categoryId: 3,
        title: 'Vegan Cookies',
        photo_url: 'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
        photosArray: [
            'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
            'https://ichef.bbci.co.uk/news/660/cpsprodpb/B2C0/production/_106106754_vegnuggets976.jpg',
            'https://pixel.nymag.com/imgs/daily/grub/2017/11/22/22-mcds-chicken-tenders.w330.h330.jpg',
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-img.health.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge_16_9%2Fpublic%2Fstyles%2Fmain%2Fpublic%2Fgettyimages-508510211.jpg%3Fitok%3Dh-Uryi8r&w=400&c=sc&poi=face&q=85'
        ],
        time: '30',
        ingredients: [
            [0, '2 quarts'],
            [16, '1'],
            [12, '1 cup'],
            [18, '1 cup'],
            [19, '1 teaspoon'],
            [1, '2 teaspoons'],
            [4, '1/4 teaspoons'],
            [7, '1/8 teaspoons'],
            [20, '1/2 teaspoons'],
            [21, '4']
        ],
        description: '-- Beat the egg and then combine it with water in a bowl. Stir. Combine the flour, salt, MSG, pepper, onion powder and garlic powder in a gallon size zip lock bag. Pound each of the breast filets until about 1/4-inch thick. Then cut into bite sized pieces. Coat each piece with the flour mixture by shaking in the zip lock bag. Remove and coat in the egg mixture. Then coat in the flour mixture again. Shake to coat. Deep fry at 375 degrees for 10-12 minutes, until browned and crispy.'
    },
    {
        recipeId: 38,
        categoryId: 3,
        title: 'Easy Sugar Cookies',
        photo_url: 'https://thefoodcharlatan.com/wp-content/uploads/2019/03/Easy-Sugar-Cookie-Recipe-Grandma-Prudys-Thin-and-Crispy-Cookies-4-e1552686922609.jpg',
        photosArray: [
            'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Sugar-Cookies_exps4249_BOS2930251C11_27_1b_RMS.jpg',
            "https://celebratingsweets.com/wp-content/uploads/2015/03/Sugar-Cookies-5.jpg",
            'https://www.melskitchencafe.com/wp-content/uploads/soft-and-chewy-drop-sugar-cookies5.jpg',

        ],
        time: '25',
        ingredients: [
            [12, '2 ¾ cups'],
            [62, '1 teaspoon'],
            [63, '½ teaspoon'],
            [42, '1 cup'],
            [55, '1 ½ cups'],
            [16, '1'],
            [64, '1 teaspoon']
        ],
        description: "Step 1 -Preheat oven to 375 degrees F(190 degrees C).In a small bowl,stir together flour baking soda,and baking powder.Set aside.--Step 2 -In a large bowl,cream together the butter and sugar until smooth.Beat in egg and vanilla.Gradually blend in the dry ingredients.Roll rounded teaspoonfuls of dough into balls, and place onto ungreased cookie sheets.--Step 3- Bake 8 to 10 minutes in the preheated oven, or until golden.Let stand on cookie sheet two minutes before removing to cool on wire racks "
    },
    {
        recipeId: 3,
        categoryId: 3,
        title: 'Pumpkin Spice Cookies',
        photo_url: 'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
        photosArray: [
            'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
            'https://cdn.junglecreations.com/wp/junglecms/2018/07/4164c5bd-wide-thumbnail.jpg',
            'https://pinchofyum.com/wp-content/uploads/Crunchwrap-Inside.jpg',
            'https://monsonmadethis.com/wp-content/uploads/2017/10/IMG_20171015_161017_025-e1533869302263.jpg'
        ],
        time: '45',
        ingredients: [
            [0, '2 tablespoons'],
            [22, '1/2'],
            [23, '2 tablespoons'],
            [7, '2 cloves'],
            [3, '1 teaspoon'],
            [24, '1 tablespoon'],
            [25, '1 lb'],
            [1, '2 teaspoons'],
            [4, '2 teaspoons'],
            [26, '15 oz'],
            [27, '8'],
            [28, '2'],
            [29, '1 cup']
        ],
        description: '-- In a medium pot over medium heat, heat 1 tablespoon oil. Add onion and cook until soft, 5 minutes. Add garlic and cook until fragrant, 1 minute more. Add tomato paste and stir to coat onion and garlic. Add ground beef and cook, breaking up meat with a wooden spoon, until no longer pink, 6 minutes. Drain fat.\n\n -- Return beef to pot and season with chili powder, paprika, salt, and pepper. Add tomato sauce and kidney beans. Bring to a boil, then reduce heat and let simmer 15 minutes. Add some chili to center of each tortilla, leaving room to fold in edges. Top with Fritos, then cheddar. Fold edges of tortillas toward the center, creating pleats. Invert Crunchwraps so pleats are on the bottom and stay together.\n\n -- In medium skillet over medium heat, heat remaining tablespoon oil. Add a Crunchwrap seam side down and cook until tortilla is golden, 3 to 5 minutes per side. Repeat with remaining Crunchwraps'
    },
    {
        recipeId: 1,
        categoryId: 0,
        title: 'Brownies',
        photo_url: 'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
        photosArray: [
            'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
            'https://images-gmi-pmc.edge-generalmills.com/6fbc6859-e2b1-499d-b0fa-ada600c9cc3f.jpg',
            'http://www.recipe4living.com/assets/itemimages/400/400/3/83c29ac7418067c2e74f31c8abdd5a43_477607049.jpg',
            'https://www.franchisechatter.com/wp-content/uploads/2014/08/KFC-Photo-by-James.jpg'
        ],
        time: '30',
        ingredients: [
            [1, '2 tablespoons'],
            [3, '1 tablespoon'],
            [4, '1 teaspoon'],
            [5, '1/2 teaspoons'],
            [6, '1/2 teaspoons'],
            [7, '1/2 teaspoons'],
            [8, '1/2 teaspoons'],
            [9, '1/2 teaspoons'],
            [10, '1/2 teaspoons'],
            [11, '1/2 teaspoons'],
            [12, '1/2 cups'],
            [13, '1 tablespoon'],
            [14, '1 tablespoon'],
            [15, '2 breasts, 2 thighs, 2 drumsticks, 2 wings'],
            [16, '1'],
            [17, '2 quarts']
        ],
        description: '-- Preheat fryer to 350°F. Thoroughly mix together all spices. Combine spices with flour, brown sugar and salt. Dip chicken pieces in egg white to lightly coat them, then transfer to flour mixture. Turn a few times and make sure the flour mix is really stuck to the chicken.\n\n -- Repeat with all the chicken pieces. Let chicken pieces rest for 5 minutes so crust has a chance to dry a bit. Fry chicken in batches. Breasts and wings should take 12-14 minutes, and legs and thighs will need a few more minutes. Chicken pieces are done when a meat thermometer inserted into the thickest part reads 165°F. Let chicken drain on a few paper towels when it comes out of the fryer. Serve hot.'
    },
    {
        recipeId: 4,
        categoryId: 1,
        title: 'Perfect Fish Tacos',
        photo_url: 'https://hips.hearstapps.com/hmg-prod/images/190307-fish-tacos-112-1553283299.jpg',
        photosArray: [
            'http://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2014/04/WGC-Fish-Tacos-copy-2.jpg',
            'https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg',
            'https://www.simplyrecipes.com/wp-content/uploads/2017/06/2017-07-22-FishTacos-6.jpg'
        ],
        time: '35',
        ingredients: [
            [30, 'jucie of 1 '],
            [24, '2 teaspoons'],
            [0, '3 tablespoons'],
            [3, '1 teaspoon'],
            [31, '1/2 teaspoons'],
            [32, '1/2 teaspoons'],
            [4, '2 teaspoons'],
            [33, '1/2 lb'],
            [27, '8'],
            [14, '2 teasponns'],
            [34, '1']
        ],
        description: '-- In a medium shallow bowl, whisk together olive oil, lime juice, paprika, chili powder, cumin, and cayenne. Add cod, tossing until evenly coated. Let marinate 15 minutes. Meanwhile, make slaw: In a large bowl, whisk together mayonnaise, lime juice, cilantro, and honey. Stir in cabbage, corn, and jalapeño. Season with salt and pepper.\n\n -- In a large nonstick skillet over medium-high heat, heat vegetable oil. Remove cod from marinade and season both sides of each filet with salt and pepper. Add fish flesh side-down. Cook until opaque and cooked through, 3 to 5 minutes per side.\n\n -- Let rest 5 minutes before flaking with a fork. Assemble tacos: Serve fish over grilled tortillas with corn slaw and avocado. Squeeze lime juice on top and garnish with sour cream. '
    },
    {
        recipeId: 5,
        categoryId: 1,
        title: 'Chicken Fajitas',
        photo_url: 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Flavorful-Chicken-Fajitas_EXPS_GHBZ18_12540_B08_15_8b.jpg',
        photosArray: [
            'https://dadwithapan.com/wp-content/uploads/2015/07/Spicy-Chicken-Fajitas-22-1200x480.jpg',
            'https://3.bp.blogspot.com/-X-dHj7ORF9Q/XH4ssgTuSZI/AAAAAAAAEig/E46HP9wCfdsvyJFcMTX30cw-ICep8lF9ACHMYCw/s1600/chicken-fajitas-mexican-food-id-149559-buzzerg.jpg',
            'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201403-xl-chipotle-chicken-fajitas.jpg?itok=ghVcI5SQ'
        ],
        time: 35,
        ingredients: [
            [9, '1/2 teaspoons'],
            [0, '4 tablespoons'],
            [1, '1/2 teaspoons'],
            [30, '2 tablespoons'],
            [31, '1 teaspoon'],
            [7, '1 teaspoon'],
            [24, '1/2 teaspoons'],
            [3, '1/2 teaspoons'],
            [21, '1 pound'],
            [22, '1/2 cup'],
            [27, '6'],
            [36, '4'],
            [37, '1/2'],
            [38, '1/2']
        ],
        description: '-- In a large bowl, combine 2 tablespoons oil, lemon juice and seasonings; add the chicken. Turn to coat; cover. Refrigerate for 1-4 hours In a large skillet, saute peppers and onions in remaining oil until crisp-tender. Remove and keep warm. Drain chicken, discarding marinade. In the same skillet, cook chicken over medium-high heat for 5-6 minutes or until no longer pink.\n\n -- Return pepper mixture to pan; heat through. Spoon filling down the center of tortillas; fold in half. Serve with toppings as desired.'
    },
    {
        recipeId: 6,
        categoryId: 2,
        title: 'Buffalo Pizza',
        photo_url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        photosArray: [
            'https://www.tablefortwoblog.com/wp-content/uploads/2019/01/buffalo-chicken-pizza-recipe-photos-tablefortwoblog-3-500x500.jpg',
            'http://pizzachoicema.com/wp-content/uploads/2018/08/Buffalo-Chicken-Pizza.jpg',
            'https://static1.squarespace.com/static/565bb41ae4b0509ba9fdf769/t/5b9a8e80aa4a998b0be0fcf4/1536855690622/pizza.gif'
        ],
        time: 50,
        ingredients: [
            [39, '1 lb'],
            [40, '1 cup'],
            [41, '1/2 cup'],
            [42, '1/4 cup'],
            [43, '2 tablespoons'],
            [44, '1/2 cup'],
            [7, '1/4 teaspoons'],
            [5, '1/4 teaspoons'],
            [30, '1/4 teaspoons'],
            [45, '2 oz'],
            [12, 'for dusting'],
            [4, '1/2 teaspoons'],
            [47, '2'],
            [46, '9 oz']
        ],
        description: '-- Place a rack in upper third of oven. Place a large cast-iron skillet on rack and preheat oven to 500° (or as high as your oven will go). Place pizza dough in a large bowl, pour a little oil over, and turn to coat. Cover bowl with plastic and let dough proof at room temperature while pan and oven heat up.\n\n -- Meanwhile, cook hot sauce, marinara sauce, and butter in a medium saucepan over medium heat, stirring occasionally, until butter is melted. Stir in cream, reduce heat to low, and simmer, stirring occasionally, until slightly thickened and warmed through, about 10 minutes. Heat 1 Tbsp. oil in a large skillet over medium-high. Add chicken, toss to coat, then add ¼ cup Buffalo sauce.\n\n -- Cook chicken, tossing occasionally, until heated through, about 2 minutes. Reduce heat and simmer, stirring often, until chicken is well coated and sauce is slightly thickened, about 5 minutes. Meanwhile, whisk yogurt, lemon juice, celery salt, garlic powder, ¼ cup blue cheese, ½ tsp. pepper, and 2 Tbsp. water in a small bowl, adding more water if sauce seems too thick (it should be pourable); set aside.\n\n -- Turn out dough onto a lightly floured work surface. Shape with your hands into a round that’s slightly larger than the cast-iron skillet you’re using. Take hot skillet out of oven (watch that handle!) and place on a heatproof surface. Add a little flour to pan. Lay dough in skillet, then work edges of dough up sides of skillet with your fingertips (use a rubber spatula or wooden spoon if you’re nervous about touching the hot pan). Drizzle a little oil around inside edge of pan so that it trickles behind and underneath dough, which will encourage browning and help it release.\n\n -- Spread about ⅓ cup Buffalo sauce over dough. Arrange mozzarella over, then top with remaining ¼ cup blue cheese. Arrange chicken mixture on top. Bake pizza on top rack until crust and cheese are nicely browned, 15–20 minutes. Transfer skillet to stovetop (again, watch that handle!) and let pizza rest a few minutes. Using a spatula, slide pizza onto a cutting board or platter. Arrange celery over, then top with reserved blue cheese dressing. Season with pepper, then drizzle with oil.'
    },
    {
        recipeId: 46,
        categoryId: 0,
        title: 'Lemon Fiesta Cake',
        photo_url: 'https://cook.me/wp-content/uploads/2019/04/Lemon-Fiesta-Cake-Recipe-How-To-Make-Lemon-Fiesta-Cake-Homemade-Lemon-Fiesta-Cake-14.jpg',
        photosArray: [
            "https://images.media-allrecipes.com/userphotos/5249788.jpg",
            'https://cook.me/wp-content/uploads/2019/04/Lemon-Fiesta-Cake-Recipe-How-To-Make-Lemon-Fiesta-Cake-Homemade-Lemon-Fiesta-Cake-14.jpg',
            'https://foodieonboard.files.wordpress.com/2015/03/dsc_9060.jpg'
        ],
        time: '60',
        ingredients: [
            [42, '10 tablespoons'],
            [55, '1 ½ cups'],
            [16, '3'],
            [65, '1 tablespoon'],
            [12, '2 ½ cups sifted'],
            [1, '½ teaspoon'],
            [62, '½ teaspoon'],
            [63, '1 teaspoon'],
            [66, '1 cup'],
            [67, '¾ teaspoon'],
            [68, '½ cup'],
            [55, '⅓ cup']
        ],
        description: '--Preheat oven to 325 degrees F(165 degrees C).Grease and flour a Bundt pan.- -Cream 1 / 2 cup plus 2 tablespoons butter and 1 1 / 2 cups sugar until fluffy.Add eggs one at a time beating after each addition.Blend in the lemon peel.In a separate bowl, mix flour, salt,soda and baking powder.Add flour mixture alternately with buttermilk to creamed butter mixture.Add lemon extract and raisins.Bake at 325 degrees F(165 degrees C) for 50 minutes cool 5 minutes,then turn out onto serving plate.Prick hot cake with skewer or fork and pour on lemon topping.Combine 1 / 3 cup sugar,1 / 3 cup butter and water in a saucepan and heat until butter melts.Add lemon juice.Spoon over hot cake.'
    },
    {
        recipeId: 85,
        categoryId: 0,
        title: 'Blueberry Muffins',
        photo_url: 'https://bromabakery.com/wp-content/uploads/2020/03/Blueberry-Muffins-2.jpg',
        photosArray: [
            "https://www.onceuponachef.com/images/2014/07/Best-Blueberry-Muffins-1.jpg",
            'https://www.biggerbolderbaking.com/wp-content/uploads/2020/05/Bakery-Style-Lemon-Blueberry-Muffins-WS-Thumbnail.jpg',
            'https://bakerbynature.com/wp-content/uploads/2011/05/Blueberry-Muffins-1-of-1.jpg'
        ],
        time: '30',
        ingredients: [
            [42, '10 tablespoons'],
            [55, '1 ½ cups'],
            [16, '2'],

            [61, '1 cup'],
            [12, '3 ¾ cups'],
            [63, '½ teaspoon'],
            [55, 'sense of proportion']
        ],
        description: '--Combine the melted butter, eggs, greek yogurt, buttermilk, and sugar together. Sift the dry ingredients into the wet ingredients.Fold the dry ingredients into the wet ingredients until barely combined(some streaks of flour should still remain).Fold in the blueberries.Do not over mix as this can cause the berries to bleed '
    },
    {
        recipeId: 7,
        categoryId: 2,
        title: 'Spaghetti Carbonara',
        photo_url: 'https://truffle-assets.imgix.net/655ce202-862-butternutsquashcarbonara-land.jpg',
        photosArray: [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
        time: 15,
        ingredients: [
            [48, '50g'],
            [49, '100g'],
            [50, '350g'],
            [51, '2 plump'],
            [42, '50g'],
            [16, '3'],
            [1, '2 teaspoons'],
            [4, '2 teaspoons']
        ],
        description: '-- Put the egg yolks into a bowl, finely grate in the Parmesan, season with pepper, then mix well with a fork and put to one side. Cut any hard skin off the pancetta and set aside, then chop the meat. Cook the spaghetti in a large pan of boiling salted water until al dente.\n\n -- Meanwhile, rub the pancetta skin, if you have any, all over the base of a medium frying pan (this will add fantastic flavour, or use 1 tablespoon of oil instead), then place over a medium-high heat. Peel the garlic, then crush with the palm of your hand, add it to the pan and leave it to flavour the fat for 1 minute. Stir in the pancetta, then cook for 4 minutes, or until it starts to crisp up. Pick out and discard the garlic from the pan, then, reserving some of the cooking water, drain and add the spaghetti.\n\n -- Toss well over the heat so it really soaks up all that lovely flavour, then remove the pan from the heat. Add a splash of the cooking water and toss well, season with pepper, then pour in the egg mixture – the pan will help to cook the egg gently, rather than scrambling it. Toss well, adding more cooking water until it’s lovely and glossy. Serve with a grating of Parmesan and an extra twist of pepper.'
    },
    {
        recipeId: 8,
        categoryId: 2,
        title: 'Lazania',
        photo_url: 'https://images8.alphacoders.com/817/817353.jpg',
        photosArray: [
            'https://previews.123rf.com/images/somegirl/somegirl1509/somegirl150900048/46103208-top-view-of-a-delicious-traditional-italian-lasagna-made-with-minced-beef-bolognese-sauce-topped-wit.jpg',
            'https://truffle-assets.imgix.net/87f324e4-YOUTUBE-NO-TXT.00_03_19_14.Imagen_fija001.jpg',
            'https://images4.alphacoders.com/817/817350.jpg'
        ],
        time: 60,
        ingredients: [
            [36, '1 large'],
            [25, '1 pound'],
            [51, '5 cloves'],
            [52, '1 pound'],
            [53, '1 pound'],
            [54, '1 28 ounce can'],
            [23, '2 6 ounce can'],
            [55, '2 tablespoons'],
            [56, '1/4 cup'],
            [10, '1/2 cup'],
            [1, '1/2 teaspoons'],
            [58, '1 teaspoon'],
            [4, '1/4 teaspoons'],
            [16, '1 large'],
            [46, '1 pound'],
            [48, '1 cup'],
            [57, '30 ounces']
        ],
        description: '-- Cook noodles according to package directions; drain. Meanwhile, in a Dutch oven, cook sausage, beef and onion over medium heat 8-10 minutes or until meat is no longer pink, breaking up meat into crumbles. Add garlic; cook 1 minute. Drain. Stir in tomatoes, tomato paste, water, sugar, 3 tablespoons parsley, basil, fennel, 1/2 teaspoon salt and pepper; bring to a boil. Reduce heat; simmer, uncovered, 30 minutes, stirring occasionally. In a small bowl, mix egg, ricotta cheese, and remaining parsley and salt. Preheat oven to 375°. Spread 2 cups meat sauce into an ungreased 13x9-in. baking dish. Layer with 3 noodles and a third of the ricotta mixture. Sprinkle with 1 cup mozzarella cheese and 2 tablespoons Parmesan cheese.\n\n -- Repeat layers twice. Top with remaining meat sauce and cheeses (dish will be full). Bake, covered, 25 minutes. Bake, uncovered, 25 minutes longer or until bubbly. Let stand 15 minutes before serving.'
    },
    {
        recipeId: 37,
        categoryId: 5,
        title: 'Plov',
        photo_url: 'https://www.myjewishlearning.com/wp-content/uploads/2007/08/PILAF.jpg',
        photosArray: [
            'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/recipes/47/18/87/picdh2lSB.jpg',
            'https://arbuz.com/wp-content/uploads/2009/07/Uzbek-Plov.jpg',
            'https://www.rotinrice.com/wp-content/uploads/2017/07/BeefPlov-1-680x350.jpg',
            'https://www.azernews.az/media/pictures/plov-2.jpg'
        ],
        time: 90,
        ingredients: [
            [75, "3 cups"],
            [42, '4 tablespoon'],
            [70, '1 cup'],
            [71, '½ cup'],
            [72, '1 cup'],
            [73, '½ cup'],
            [68, '½ cup'],
            [74, '700 gram'],
            [36, ' 1 medium'],
            [75, 'optionally'],
            [1, '1 pinch'],
            [4, '1 pinch'],

        ],
        description: '--Pick over and wash the rice then soak it in warm salted water. Meanwhile, prepare the dried fruits and chestnut. You will need to stir-fry the chestnuts for about 3 minutes, then add the apricots, plums and dates and continue the frying process for another 3 minutes. In the end add your raisins and stir for a minute, then remove from heat.'
    },
    {
        recipeId: 76,
        categoryId: 5,
        title: 'Dovga',
        photo_url: 'https://limecatering.az/wp-content/uploads/2016/07/Dovga-%C3%87orbas%C4%B1.jpg',
        photosArray: [
            'https://anadolu.az/image/cache/data/Dov%C4%9Fa-400x400.jpg',
            'https: //image.freepik.com/free-photo/local-soup-dovga-yogurt-with-herbs-inside-white-bowl_114579-3672.jpg',

        ],
        time: 60,
        ingredients: [
            [77, '1 cup'],
            [61, '1 liter'],
            [76, '2 tablespoons'],
            [12, '1 tablespoon'],
            [79, '1 bunch'],
            [80, '1 bunch'],
            [78, '1 bunch'],
            [81, '1 bunch'],
            [16, '1'],

        ],
        description: "-- it is a vegetarian, yoghurt-based soup cooked with a variety of herbs. Coriander, dill, mint and rice are mainstays of the soup. Chervil and mountain parsley can be added. Spring onions or sorrel can also be used for more tender flavours. Sometimes it's cooked with chickpeas.It is often served warm in winter or refreshingly cool in summer."

    },
    {
        recipeId: 52,
        categoryId: 5,
        title: 'Dolma',
        photo_url: 'https://vaya.in/recipes/wp-content/uploads/2019/01/Dolmas.jpg',
        photosArray: [
            'https://www.196flavors.com/wp-content/uploads/2016/05/yarpaq-dolmasi-3.jpg',
            'https://es1-ladleandspricell.netdna-ssl.com/wp-content/uploads/2015/05/dolmas-3-500x375.jpg',
            'https://www.themediterraneandish.com/wp-content/uploads/2019/12/Stuffed-Grape-Leaves-Recipe-Dolmas-15.jpg',
            'https://www.budgetbytes.com/wp-content/uploads/2010/05/Dolmas20close-500x480.jpg'
        ],
        time: 90,
        ingredients: [
            [82, '1 (16-ounce) jar'],
            [0, '2 tablespoons'],
            [36, '1 medium'],
            [51, '4 cloves'],
            [83, '1 tablespoon'],
            [84, '1 tablespoon'],
            [76, '1 1/2 cups'],
            [85, ' 1/2 cup'],
            [86, '8 cups'],
            [87, '2/3 cups'],

        ],
        description: '-- Serve immediately with bread and plain yogurt or garlicky yogurt sauce to spoon onto the dolma to taste.Garlicky Yogurt Sauce: To make garlicky yogurt sauce, in a bowl,combine 1 cup or more plain yogurt with 2 - 4 cloves garlic,crushed with a garlic press.'
    },
    {
        recipeId: 13,
        categoryId: 6,
        title: 'Heirloom Tomato & Avocado Salad',
        photo_url: 'https://abraskitchen.com/wp-content/uploads/Heirloom-Tomato-Salad-with-Avocado-and-Fresh-Peaches-4.jpg',
        photosArray: [
            'https://abraskitchen.com/wp-content/uploads/Heirloom-Tomato-Salad-with-Avocado-and-Fresh-Peaches-3.jpg',
            'https://img.sunset02.com/sunsetm/wp-content-uploads/2019-03-28UTC09/tomato-avocado-salad-soy-vinaigrette-59890-0718-900x506.jpg',
            'https://www.eatwell101.com/wp-content/uploads/2019/09/avocado-caprese-salad.jpg',

        ],
        time: '25',
        ingredients: [
            [88, '3 medium'],
            [0, 'optionally'],
            [90, 'optionally'],
            [91, '½ cup uncooked'],
            [51, '1 clove'],
            [92, 'a big handful'],
            [77, '½ cup'],
            [34, '½ large'],
            [87, '½'],
            [84, 'a big handful'],
            [85, 'optionally'],
            [1, '1 pinch'],
            [4, '1 pinch'],

        ],
        description: 'The secret to this salad is marinating the tomatoes in a splash of olive oil & sherry vinegar. They become rich & tangy – the perfect contrast for fresh basil, avocado, and a little orzo pasta.'
    },
    {
        recipeId: 32,
        categoryId: 6,
        title: 'Greek salad',
        photo_url: 'https://www.cookingclassy.com/wp-content/uploads/2018/02/greek-salad-4.jpg',
        photosArray: [
            'https://chow-hub.com/wp-content/uploads/2019/07/greek-salad-2.jpg',
            'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-500x375.jpg',
            'https://cafedelites.com/wp-content/uploads/2017/02/Avocado-Greek-Salad-Greek-Dressing-FINAL-5-1.jpg',

        ],
        time: '20',
        ingredients: [
            [93, '6 tablespoons'],
            [87, '2 tablespoons'],
            [51, '1/2 teaspoon'],
            [95, '1 teaspoon'],
            [9, '1/2 teaspoon'],
            [80, '1/2 teaspoon'],
            [88, '3 large'],
            [96, '3/4'],
            [36, '1/2'],
            [94, '1'],
            [97, '1/2 cup '],
            [98, 'A heaping half cup'],
            [1, '1 pinch'],
            [4, '1 pinch']
        ],
        description: '-- This easy Greek Salad is made with plum tomatoes, cucumbers, red onion, bell pepper, kalamata olives, and crumbled feta cheese. Tossed with a lemon and red wine vinegar vinaigrette dressing, it is ready for a summer picnic '
    },
    {
        recipeId: 95,
        categoryId: 6,
        title: 'CAPRESE AVOCADO SALADs',
        photo_url: 'https://s23209.pcdn.co/wp-content/uploads/2014/05/IMG_0160edit.jpg',
        photosArray: [
            'https://cafedelites.com/wp-content/uploads/2018/05/Avocado-Caprese-Salad-IMAGE-27.jpg',
            "https://www.eatwell101.com/wp-content/uploads/2019/09/Avocado-Salad-Recipe.jpg",
            'https://www.wholesomeyum.com/wp-content/uploads/2019/06/wholesomeyum-easy-chopped-avocado-caprese-salad-recipe-cherry-tomatoes-2.jpg',

        ],
        time: '25',
        ingredients: [
            [99, '1/2 cup'],
            [13, '2 tablespoons'],
            [93, '1 tablespoon '],
            [74, '2'],
            [101, '6 cups chopped'],
            [46, '6 ounces'],
            [100, '1 cup'],
            [34, '1'],
            [84, '1/4 cup'],
            [1, '1 pinch'],
            [4, '1pinch'],
        ],
        description: "--In a small saucepan, add the balsamic vinegar. Simmer until the balsamic has thickened and reduced. This adds insane flavor, so don’t skip the reduction step! You can also buy already reduced balsamic vinegar, but make sure that it doesn’t have any added sweetener in it. -- Make the dressing. Whisk together olive oil, garlic powder, sea salt, and black pepper. "
    }, ,
    {
        recipeId: 102,
        categoryId: 7,
        title: 'Vegan chilli',
        photo_url: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/07/vegan-chilli.jpg?itok=llhQ6gn2',
        photosArray: [
            'https://www.alphafoodie.com/wp-content/uploads/2020/04/Vegan-Chilli-con-carne-14-of-23.jpeg',
            'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2018/01/easy-vegan-chilli-pan-1000x1500.jpg',
            'https://domesticgothess.com/wp-content/uploads/2017/06/easy-vegetarian-chilli.jpg',

        ],
        time: 60,
        ingredients: [
            [93, '3 tbsp'],
            [2, '2 '],
            [3, '2 tsp'],
            [31, '2 tsp'],
            [22, '1 '],
            [104, '2'],
            [51, '2 cloves'],
            [24, ' 1-2 tsp'],
            [9, '1 tsp'],
            [23, '1 tbsp'],
            [38, '1'],
            [102, '2 x 400g '],
            [103, '400g'],
            [26, '400g']

        ],
        description: '-- Heat the oil in a large frying pan over a medium heat. Add the onion, carrot and celery. Cook for 8-10 mins, stirring occasionally until soft then crush in the garlic, tip in the sweet potato chunks and cook for 1 min more. Add all the dried spices, oregano and tomato puree, cook for a minute then tip the whole lot into a slow cooker. --Add the red pepper and chopped tomatoes.Give everything a good stir then cook on low for 5 hrs.Stir in the beans and cook for another 30 mins to 1 hr.Season to taste and serve with lime wedges, guac,rice and coriander.'
    },
    {
        recipeId: 73,
        categoryId: 7,
        title: 'Falafel burgers',
        photo_url: 'https://cdn.loveandlemons.com/wp-content/uploads/2018/02/IMG_10516-cropped.jpg',
        photosArray: [
            'https://minimalistbaker.com/wp-content/uploads/2014/11/HEALTHY-simple-Baked-Falafel-Burgers-make-a-filling-vegan-glutenfree-meal.jpg',
            'https://orchardstreetkitchen.com/wp-content/uploads/2016/08/falafelburger2-1.jpg',
            'https://chowhound1.cbsistatic.com/assets/2015/02/31319_falafel_burgers.jpg',

        ],
        time: '16',
        ingredients: [
            [77, '400g'],
            [22, '1 small'],
            [51, '1 clove'],
            [56, 'a big handful'],
            [81, '1 tsp'],
            [31, '1 tsp'],
            [24, '1⁄2 tsp '],
            [105, '2 tbsp'],
            [0, '2 tbsp'],
            [106, 'a big handful'],


        ],
        description: '--Drain a 400g can chickpeas and pat dry with kitchen paper. --Tip into a food processor along with 1 small roughly chopped red onion, 1 garlic clove, handful of flat-leaf parsley, 1 tsp ground cumin, 1 tsp ground coriander, ½ tsp harissa paste or chillli powder, 2 tbsp plain flour and a little salt. --Blend until fairly smooth, then shape into four patties with your hands.--Heat 2 tbsp sunflower oil in a non-stick frying pan, add the burgers, then quickly fry for 3 mins on each side until lightly golden. --Serve with toasted pitta bread, 200g tub tomato salsa and a green salad.'
    },
    {
        recipeId: 29,
        categoryId: 7,
        title: 'Carrot & coriander soup',
        photo_url: 'https://realfood.tesco.com/media/images/RFO-1400x919--cdb61265-c5a8-4297-b243-e335ad51d3d8-0-1400x919.jpg',
        photosArray: [
            'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/03/carrot-soup.jpg?itok=ICv1xLVO',
            'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18182840/051SIP103-carrot-coriander-soup-alt-main.jpg',
            'https://images.immediate.co.uk/production/volatile/sites/2/2020/02/Carrot-and-coriander_preview-d48d069.jpg?quality=90&resize=960%2C408',

        ],
        time: '40',
        ingredients: [
            [0, '1 tbsp'],
            [22, '1'],
            [2, '1'],
            [81, '1 teaspoon'],
            [104, '450g'],
            [86, '1.2l'],

        ],
        description: '--Heat 1 tbsp vegetable oil in a large pan, add 1 chopped onion, then fry for 5 mins until softened. --Stir in 1 tsp ground coriander and 1 chopped potato, then cook for 1 min. --Add the 450g peeled and chopped carrots and 1.2l vegetable or chicken stock, bring to the boil, then reduce the heat. --Cover and cook for 20 mins until the carrots are tender. --Tip into a food processor with a handful of coriander then blitz until smooth (you may need to do this in two batches). Return to pan, taste, add salt if necessary, then reheat to serve.  '
    },

];

export const ingredients = [{
        ingredientId: 0,
        name: 'Oil',
        photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
    },
    {
        ingredientId: 1,
        name: 'Salt',
        photo_url: 'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
    },
    {
        ingredientId: 2,
        name: 'Russet potatoes',
        photo_url: 'http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg'
    },
    {
        ingredientId: 3,
        name: 'Paprika',
        photo_url: 'https://image.freepik.com/free-photo/red-chilli-pepper-powder-isolated-white-background_55610-28.jpg'
    },
    {
        ingredientId: 4,
        name: 'Black Pepper',
        photo_url: 'https://ak0.picdn.net/shutterstock/videos/26741680/thumb/1.jpg'
    },
    {
        ingredientId: 5,
        name: 'Celery salt',
        photo_url: 'https://www.hasiroglugurme.com/images/urunler/Koftelik-Esmer-Bulgur-resim-297.jpg'
    },
    {
        ingredientId: 6,
        name: 'Dried sage',
        photo_url: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Esxjvv7/super-slow-motion-dried-sage-falling-on-white-background_n1xg2gxzg__F0000.png'
    },
    {
        ingredientId: 7,
        name: 'Garlic powder',
        photo_url: 'https://us.123rf.com/450wm/belchonock/belchonock1808/belchonock180818180/106007144-bowl-of-dry-garlic-powder-on-white-background.jpg?ver=6'
    },
    {
        ingredientId: 8,
        name: 'Ground allspice',
        photo_url: 'https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/6/9/2695/allspice-berries-jamaican-ground-1.jpg'
    },
    {
        ingredientId: 9,
        name: 'Dried oregano',
        photo_url: 'https://frutascharito.es/886-large_default/oregano.jpg'
    },
    {
        ingredientId: 10,
        name: 'Dried basil',
        photo_url: 'https://www.honeychop.com/wp-content/uploads/2015/09/Dried-Mint.png'
    },
    {
        ingredientId: 11,
        name: 'Dried marjoram',
        photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71YATIBqBYL._SX355_.jpg'
    },
    {
        ingredientId: 12,
        name: 'All-purpose flour',
        photo_url: 'https://images.assetsdelivery.com/compings_v2/seregam/seregam1309/seregam130900036.jpg'
    },
    {
        ingredientId: 13,
        name: 'Brown sugar',
        photo_url: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BALQTtekliuc6iu4u/rotating-brown-sugar-in-a-white-container-on-white-background_sis0xtbyl_thumbnail-full01.png'
    },
    {
        ingredientId: 14,
        name: 'Kosher salt',
        photo_url: 'https://d1yn1kh78jj1rr.cloudfront.net/image/preview/r64-6MxPQjlatyfjp/storyblocks-top-view-of-ceramic-salt-cellar-with-coarse-grained-sea-salt-isolated-on-white-background_SPzKionPuV_SB_PM.jpg'
    },
    {
        ingredientId: 15,
        name: 'Whole chicken',
        photo_url: 'https://image.shutterstock.com/image-photo/two-raw-chicken-drumsticks-isolated-260nw-632125991.jpg'
    },
    {
        ingredientId: 16,
        name: 'Eggs',
        photo_url: 'https://image.shutterstock.com/image-photo/egg-whites-yolk-cup-isolated-260nw-1072453787.jpg'
    },
    {
        ingredientId: 17,
        name: 'Quarts neutral oil',
        photo_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fgettyimages-464433694_0.jpg%3Fitok%3DK42YR2GV&w=400&c=sc&poi=face&q=85'
    },
    {
        ingredientId: 18,
        name: 'Water',
        photo_url: 'https://ak1.picdn.net/shutterstock/videos/829561/thumb/11.jpg'
    },
    {
        ingredientId: 19,
        name: 'Onion Powder',
        photo_url: 'https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg'
    },
    {
        ingredientId: 20,
        name: 'MSG',
        photo_url: 'https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg'
    },
    {
        ingredientId: 21,
        name: 'Chicken Breast',
        photo_url: 'https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6'
    },
    {
        ingredientId: 22,
        name: 'Onion chopped',
        photo_url: 'https://s3.envato.com/files/246703499/IMG_1752_5.jpg'
    },
    {
        ingredientId: 23,
        name: 'Tomato paste',
        photo_url: 'http://d3e1m60ptf1oym.cloudfront.net/45bab59a-363c-11e1-ab4e-bf4c2e0bb026/PANELA_xgaplus.jpg'
    },
    {
        ingredientId: 24,
        name: 'Chilli Powder',
        photo_url: 'https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6'
    },
    {
        ingredientId: 25,
        name: 'Ground Beef',
        photo_url: 'https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a'
    },
    {
        ingredientId: 26,
        name: 'Can kidney beans, rinsed and drained ',
        photo_url: 'https://www.seriouseats.com/images/2014/04/20140414-pile-of-beans-primary-1500x1125.jpg'
    },
    {
        ingredientId: 27,
        name: 'Large Tortillas',
        photo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg'
    },
    {
        ingredientId: 28,
        name: 'Firtos',
        photo_url: 'https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg'
    },
    {
        ingredientId: 29,
        name: 'Shredded cheddar',
        photo_url: 'https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg'
    },
    {
        ingredientId: 30,
        name: 'Lime',
        photo_url: 'https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg'
    },

    {
        ingredientId: 31,
        name: 'Ground cumin',
        photo_url: 'https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg'
    },
    {
        ingredientId: 32,
        name: 'Cayenne pepper',
        photo_url: 'https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg'
    },
    {
        ingredientId: 33,
        name: 'Flaky white fish',
        photo_url: 'https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg'
    },
    {
        ingredientId: 34,
        name: 'Avocado',
        photo_url: 'https://www.redwallpapers.com/public/redwallpapers-large-thumb/avocado-cut-stone-leaves-white-background-free-stock-photos-images-hd-wallpaper.jpg'
    },
    {
        ingredientId: 35,
        name: 'Red Pepper Flakes',
        photo_url: 'https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg'
    },
    {
        ingredientId: 36,
        name: 'Onions',
        photo_url: 'http://www.allwhitebackground.com/images/2/2650.jpg'
    },
    {
        ingredientId: 37,
        name: 'Green Pepper',
        photo_url: 'https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg'
    },
    {
        ingredientId: 38,
        name: 'Red Pepper',
        photo_url: 'https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg'
    },
    {
        ingredientId: 39,
        name: 'Pizza dough',
        photo_url: 'https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza-bread-260nw-518950903.jpg'
    },
    {
        ingredientId: 40,
        name: 'Ketchup sauce',
        photo_url: 'https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg'
    },
    {
        ingredientId: 41,
        name: 'Hot Sauce',
        photo_url: 'https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI='
    },
    {
        ingredientId: 42,
        name: 'Butter',
        photo_url: 'https://redrockstoffee.com/media/2016/11/AdobeStock_76417550.jpeg'
    },
    {
        ingredientId: 43,
        name: 'Heavy Cream',
        photo_url: 'https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0='
    },
    {
        ingredientId: 44,
        name: 'whole-milk plain yogurt',
        photo_url: 'https://st.depositphotos.com/2757384/3317/i/950/depositphotos_33170129-stock-photo-pouring-a-glass-of-milk.jpg'
    },
    {
        ingredientId: 45,
        name: 'Chesse',
        photo_url: 'https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg'
    },
    {
        ingredientId: 46,
        name: 'Mozzarella',
        photo_url: 'https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg'
    },
    {
        ingredientId: 47,
        name: 'celery stalks',
        photo_url: 'https://cdn4.eyeem.com/thumb/6d1b3957c7caa9b73c3e0f820ef854b931808139-1538043742765/w/750'
    },
    {
        ingredientId: 48,
        name: 'Parmesan Chesse',
        photo_url: 'https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg'
    },
    {
        ingredientId: 49,
        name: 'pancetta',
        photo_url: 'https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg'
    },
    {
        ingredientId: 50,
        name: 'Spaghetti',
        photo_url: 'https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg'
    },
    {
        ingredientId: 51,
        name: 'Garlic',
        photo_url: 'https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg'
    },
    {
        ingredientId: 52,
        name: 'Lasagna noodles',
        photo_url: 'https://previews.123rf.com/images/velkol/velkol1110/velkol111000004/11083085-an-image-of-raw-lasagna-on-white-background.jpg'
    },
    {
        ingredientId: 53,
        name: 'Italian sauce',
        photo_url: 'https://previews.123rf.com/images/arinahabich/arinahabich1504/arinahabich150400858/38827029-raw-italian-sausage-on-a-white-background-.jpg'
    },
    {
        ingredientId: 54,
        name: 'Crushed Tomatoes',
        photo_url: 'https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg'
    },
    {
        ingredientId: 55,
        name: 'Sugar',
        photo_url: 'https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg'
    },
    {
        ingredientId: 56,
        name: 'minced fresh parsley',
        photo_url: 'https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg'
    },
    {
        ingredientId: 57,
        name: 'ricotta cheese',
        photo_url: 'https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg'
    },
    {
        ingredientId: 58,
        name: ' fennel seed',
        photo_url: 'https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg'
    },
    {
        ingredientId: 59,
        name: 'Banana',
        photo_url: 'https://www.conservationmagazine.org/wp-content/uploads/2013/04/sterile-banana.jpg'
    },
    {
        ingredientId: 60,
        name: 'Frozen Straberries',
        photo_url: 'https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png'
    },
    {
        ingredientId: 61,
        name: 'Greek Yogurt',
        photo_url: 'http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg'
    },

    {
        ingredientId: 62,
        name: 'Baking soda',
        photo_url: 'https://i5.walmartimages.com/asr/876847ae-772b-4812-9a60-625a1ffa9efd_1.4f1586299ba536626188a24e556a3693.jpeg'
    },
    {
        ingredientId: 63,
        name: 'Baking powder',
        photo_url: 'https://www.seriouseats.com/images/2015/12/20151201-baking-powder-vicky-wasik-2.jpg'
    },
    {
        ingredientId: 64,
        name: 'Vanilla Extract',
        photo_url: 'https://thepioneerwoman.com/wp-content/uploads/2018/10/how-to-make-vanilla-extract-17.jpg'
    },
    {
        ingredientId: 65,
        name: 'Lemon Zest',
        photo_url: 'https://whatsinthepan.com/wp-content/uploads/2019/02/How-to-zest-a-lemon-4.jpg'
    },
    {
        ingredientId: 66,
        name: 'Buttermilk',
        photo_url: 'https://assets.bonappetit.com/photos/5807e752cf8577b803cad62d/master/pass/kates-buttermilk.jpg'
    },
    {
        ingredientId: 67,
        name: 'Lemon Extract',
        photo_url: 'https://cdnimg.webstaurantstore.com/images/products/large/539299/1973163.jpg'
    },
    {
        ingredientId: 68,
        name: 'Golden Raisins',
        photo_url: 'https://cdn11.bigcommerce.com/s-02iihx4/images/stencil/1280x1280/products/7970/10691/shutterstock_372151762__13780.1569260700.jpg?c=2'
    },
    {
        ingredientId: 69,
        name: 'Blueberries',
        photo_url: 'https://www.supermarketperimeter.com/ext/resources/0430-blueberries.png?1588260305'
    },
    {
        ingredientId: 70,
        name: 'Peeled chestnut',
        photo_url: 'https://previews.123rf.com/images/gubernat/gubernat1712/gubernat171200484/92627624-peeled-chestnut-all-over-on-a-wooden-table-in-the-background-cross-and-whole-chestnuts-.jpg'

    },
    {
        ingredientId: 71,
        name: 'Dried apricots',
        photo_url: 'https://balsarafoods.com/wp-content/uploads/2017/11/dried-apricots.jpg'
    }, {
        ingredientId: 72,
        name: 'Dried sour plums',
        photo_url: 'https://img.alicdn.com/imgextra/i4/T1av7kFhXcXXXXXXXX_!!0-item_pic.jpg'
    },
    {
        ingredientId: 73,
        name: 'Dates',
        photo_url: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/11/medjool-dates-1296x728-header-1296x728.jpg?w=1155&h=1528'
    },
    {
        ingredientId: 74,
        name: 'Boneless Chicken',
        photo_url: 'https://i5.walmartimages.ca/images/Enlarge/028/786/6000200028786.jpg'
    },
    {
        ingredientId: 75,
        name: 'Saffron threads',
        photo_url: 'https://images-na.ssl-images-amazon.com/images/I/919P92UCCkL._SL1500_.jpg'
    },

    {
        ingredientId: 76,
        name: 'long - grain white rice',
        photo_url: 'https://cdn-image.realsimple.com/sites/default/files/styles/video_image_1/public/long-grain-white-rice-gettyimages-806770568.jpg?itok=Vmx4KmBE'

    },
    {
        ingredientId: 77,
        name: 'Chickpea',
        photo_url: 'https://i.ytimg.com/vi/zoUz8d_e-Ww/maxresdefault.jpg'
    },
    {
        ingredientId: 78,
        name: 'Spinach',
        photo_url: 'https://www.mypricechopper.com/Frontend/Media/Recipes/spinachleaves359x359.jpg'
    },

    {
        ingredientId: 79,
        name: 'Mint',
        photo_url: 'https://cdn.kalingatv.com/wp-content/uploads/2019/08/Mint.jpg'

    },

    {
        ingredientId: 80,
        name: 'Dill',
        photo_url: 'https://www.lovethegarden.com/sites/default/files/content/articles/UK_freshly-harvested-dill.jpg'

    },

    {
        ingredientId: 81,
        name: 'Coriander',
        photo_url: 'https://images.herzindagi.info/image/2019/Nov/coriander-health-benefits-m.jpg'

    },
    {
        ingredientId: 82,
        name: 'Grape leaves',
        photo_url: 'https://www.giverecipe.com/wp-content/uploads/2012/11/grape-leaves1.jpg'
    },
    {
        ingredientId: 83,
        name: 'Parsley',
        photo_url: 'https://tarawuls.com.ng/wp-content/uploads/2020/04/parsley.jpg'
    },

    {
        ingredientId: 84,
        name: 'Basil',
        photo_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-grow-basil-1590506465.jpg?crop=1.00xw:0.752xh;0,0.175xh&resize=1200:*'

    },


    {
        ingredientId: 85,
        name: 'Pine nuts',
        photo_url: 'https://i1.wp.com/ediblorial.com/wp-content/uploads/2020/04/IMG_8684-1.jpg?resize=1200%2C675'

    },

    {
        ingredientId: 86,
        name: 'vegetable broth',
        photo_url: 'https://eatingrules.com/wp-content/uploads/2015/10/homemade-vegetable-broth.jpg'

    },

    {
        ingredientId: 87,
        name: 'Lemon juice',
        photo_url: 'https://previews.123rf.com/images/mizina/mizina1710/mizina171000078/87666628-fresh-lemon-juice-in-small-bowl-and-lemons-over-rustic-white-stone-background-with-copy-space-health.jpg'

    },

    {
        ingredientId: 88,
        name: 'heirloom tomatoes',
        photo_url: 'https://parkseed.com/images/xxl/05411-pk-p1.jpg?v=101221716194-1'

    },

    {
        ingredientId: 89,
        name: 'Lemon ',
        photo_url: 'https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'

    },

    {
        ingredientId: 90,
        name: 'Sherry vinegar',
        photo_url: 'https://res.cloudinary.com/tienda-com/image/upload/f_auto,q_auto:good,w_626/products/vn-32.jpg'

    },

    {
        ingredientId: 91,
        name: 'Whole wheat orzo',
        photo_url: 'https://k8643br9gv-flywheel.netdna-ssl.com/wp-content/uploads/2011/08/whole-wheat-orzo-2-kalynskitchen.jpg'

    },

    {
        ingredientId: 92,
        name: 'Arugula',
        photo_url: 'https://draxe.com/wp-content/uploads/2018/12/ArugulaHeader.jpg'

    },
    {
        ingredientId: 93,
        name: 'Extra virgin olive oil',
        photo_url: 'https://media.eataly.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/C/u/Cufrol-Olio-Evo-Biologico-0.5l-55994.jpg'

    }, {
        ingredientId: 94,
        name: 'Bell Pepper',
        photo_url: 'https://s3.amazonaws.com/cdn.gardensalive.com/images/800/64562A.jpg'

    }, {
        ingredientId: 95,
        name: 'Wine vinegar',
        photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1BqsHKJDcbaNutoR4qwWGplan474mf0fx9RWt7vm4XERVbcGV&usqp=CAU'

    }, {
        ingredientId: 96,
        name: 'Cucumber',
        photo_url: 'https://static.toiimg.com/thumb/70246533.cms?width=680&height=512&imgsize=180975'

    }, {
        ingredientId: 97,
        name: 'Black  Olives',
        photo_url: 'https://lowcarbcheck.com/app/uploads/2020/01/Canva-Fresh-black-olives-on-a-wooden-spoon.jpg'

    },
    {
        ingredientId: 98,
        name: 'Feta Cheese',
        photo_url: 'https://cdn.shopify.com/s/files/1/0106/1273/6066/products/Feta_cheese_1_1200x.jpg?v=1572950213'

    },
    {
        ingredientId: 99,
        name: 'Balsamic Vinegar',
        photo_url: 'https://produits.bienmanger.com/21061-1w470h470_Balsamic_Vinegar_From_Modena_Igp.jpg'

    }, {
        ingredientId: 100,
        name: 'Cherry Tomatoes',
        photo_url: 'https://www.thespruceeats.com/thmb/WVxnaDges0sGf0s00dKxV6UraLU=/2000x2000/smart/filters:no_upscale()/sweet-cherry-tomatoes-in-a-bowl-526371425-4c8c9d83dece4ec1a00d7f1618895eb3.jpg'

    },
    {
        ingredientId: 101,
        name: 'Romaine lettuce',
        photo_url: 'https://static-39.sinclairstoryline.com/resources/media/97841e3e-d908-4a9b-b5f6-a36226fb5f1b-large16x9_Romaine_Lettuce.jpg?1544122053348'

    },
    {
        ingredientId: 102,
        name: 'Chopped Tomatoes',
        photo_url: 'https://previews.123rf.com/images/movingmoment/movingmoment1602/movingmoment160200072/54567194-open-tin-of-chopped-tomatoes-with-whole-fresh-unfocused-tomatoes-behind-white-background-.jpg'

    },
    {
        ingredientId: 103,
        name: 'Black Beans',
        photo_url: 'https://www.thespruceeats.com/thmb/eacf7tBKopgx4ftB7J3LmtiaciY=/3602x2702/smart/filters:no_upscale()/black-beans-545757745-580e92055f9b58564cf6c2bf.jpg'

    }, {
        ingredientId: 104,
        name: 'Carrots',
        photo_url: 'https://www.economist.com/sites/default/files/20180929_BLP506.jpg'

    },
    {
        ingredientId: 105,
        name: 'Plain flour',
        photo_url: 'https://images-na.ssl-images-amazon.com/images/I/91mQriCCwxL._AC_SL1500_.jpg'

    }, {
        ingredientId: 106,
        name: 'Toasted pita bread',
        photo_url: 'https://previews.123rf.com/images/markstout/markstout1412/markstout141200060/34391888-toasted-pita-bread-chips-with-herbal-seasoning.jpg'

    },



];