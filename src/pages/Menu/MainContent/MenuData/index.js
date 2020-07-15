// Beef Burgers 
import krunkBurgerImage from '../../../../images/menu/burgers/beef-burger-1.jpg'
import plainJaneImage from '../../../../images/menu/burgers/beef-burger-2.jpg'
import juicyLucyImage from '../../../../images/menu/burgers/beef-burger-3.jpg'
import spicyLucyImage from '../../../../images/menu/burgers/beef-burger-4.jpg'
import bbqBangImage from '../../../../images/menu/burgers/beef-burger-5.jpg'
import baconDoubleCheeseBurgerImage from '../../../../images/menu/burgers/beef-burger-6.jpg'

// Chicken Burgers 
import krunkClassicImage from '../../../../images/menu/burgers/chicken-burger-1.jpg'
import krunkFlamerImage from '../../../../images/menu/burgers/chicken-burger-2.jpg'
import krunkBbqBlazeImage from '../../../../images/menu/burgers/chicken-burger-3.jpg'
import krunkCalypsoImage from '../../../../images/menu/burgers/chicken-burger-4.jpg'
import krunkBuffaloImage from '../../../../images/menu/burgers/chicken-burger-5.jpg'

// Vegan Burgers
import veganatorImage from '../../../../images/menu/burgers/vegan-burger-1.jpg'
import spicyVeganatorImage from '../../../../images/menu/burgers/vegan-burger-2.jpg'

const MenuData = {
    burgers: {
        beef: [
            {
                burgerImg: krunkBurgerImage,
                alt: 'Krunk Burger',
                burgerName: 'Krunk Burger',
                burgerDesc: '2 x smashed beef patties, 2 x slices of cheese, topped with Krunk burger sauce, pickles, lettuce, tomato & onion',
                id: 'krunk-burger'
            },
            {
                burgerImg: plainJaneImage,
                alt: 'Plain Jane',
                burgerName: 'Plain Jane',
                burgerDesc: '2 x smashed beef patties, topped with Krunk burger sauce, pickles, lettuce, tomato & onion',
                id: 'plain-jane'
            },
            {
                burgerImg: juicyLucyImage,
                alt: 'Juicy Lucy',
                burgerName: 'Juicy Lucy',
                burgerDesc: 'Melt in the middle cheese, relish & Krunk burger sauce',
                id: 'juicy-lucy'
            },
            {
                burgerImg: spicyLucyImage,
                alt: 'Spicy Lucy',
                burgerName: 'Spicy Lucy',
                burgerDesc: 'Melt in the middle cheese, relish, jalepenos, chipotle sauce',
                id: 'spicy-lucy'
            },
            {
                burgerImg: bbqBangImage,
                alt: 'BBQ Bang',
                burgerName: 'BBQ Bang',
                burgerDesc: '2 x smashed beef patties, 2 x slices of cheese, topped with bbq sauce, pickles, lettuce, tomato & onion',
                id: 'bbq-bang'
            },
            {
                burgerImg: baconDoubleCheeseBurgerImage,
                alt: 'Bacon Double Cheeseburger',
                burgerName: 'Bacon Double Cheeseburger',
                burgerDesc: '2 x Smashed beef patties, 2 x slices of cheese, turkey rashers topped with Krunk burger sauce, pickles, lettuce, tomato & onion. Includes skin on fries and soft drink.',
                id: 'bacon-double-cheeseburger'
            }
        ],
        chicken: [
            {
                burgerImg: krunkClassicImage,
                alt: 'The Krunk Classic Burger',
                burgerName: 'Classic',
                burgerDesc: 'Cheese, pickles, home-made coleslaw & burger',
                id: 'the-krunk-classic'
            },
            {
                burgerImg: krunkFlamerImage,
                alt: 'The Krunk Flamer Burger',
                burgerName: 'Flamer',
                burgerDesc: 'Cheese, jalepeno, home-made coleslaw, chipotle sauce',
                id: 'the-krunk-flamer'
            },
            {
                burgerImg: krunkBbqBlazeImage,
                alt: 'The Krunk BBQ Blaze Burger',
                burgerName: 'BBQ Blaze',
                burgerDesc: 'Cheese pickles, home-made coleslaw & bbq sauce',
                id: 'the-krunk-bbq-blaze'
            },
            {
                burgerImg: krunkCalypsoImage,
                alt: 'The Krunk Calypso Burger',
                burgerName: 'Calypso',
                burgerDesc: 'Cheese, pickles, homemade coleslaw and mango habanero sauce',
                id: 'the-krunk-calypso'
            },
            {
                burgerImg: krunkBuffaloImage,
                alt: 'The Krunk Buffalo Burger',
                burgerName: 'Buffalo',
                burgerDesc: 'Cheese, pickles, home-made coleslaw and Frank’s red hot sauce',
                id: 'the-krunk-buffalo'
            }
        ],
        vegan: [
            {
                burgerImg: veganatorImage,
                alt: 'The Veganator Burger',
                burgerName: 'Veganator',
                burgerDesc: 'Oriental vegetables, coriander, lentil crumb, lemon grass, vegan cheese, vegan mayo, served in toasted vegan brioche bun',
                id: 'the-veganator'
            },
            {
                burgerImg: spicyVeganatorImage,
                alt: 'The Spicy Veganator Burger',
                burgerName: 'Spicy Veganator',
                burgerDesc: 'Oriental vegetables, coriander, lentil crumb, lemon grass, vegan cheese, vegan mayo & jalapenos served in toasted vegan brioche bun',
                id: 'the-spicy-veganator'
            }
        ]
    },
    wings: [
        {
            flavour: 'Original',
            id: 'original'
        },
        {
            flavour: 'Smokey BBQ',
            id: 'smokey-bbq'
        },
        {
            flavour: 'Atomic Hot',
            id: 'atomic-hot'
        },
        {
            flavour: 'Lemon Pepper',
            id: 'lemon-pepper'
        },
        {
            flavour: 'Garlic Parmesan',
            id: 'garlic-parmesan'
        },
        {
            flavour: 'Mango Habanero',
            id: 'mango-habanero'
        },
        {
            flavour: 'Sweet chilli',
            id: 'sweet-chilli'
        },
        {
            flavour: 'Honey Mustard',
            id: 'honey-mustard'
        }
    ],
    shakes: [
        {
            flavour: 'Oreo',
            id: 'oreo'
        },
        {
            flavour: 'Ferrero Rocher',
            id: 'ferroro-rocher'
        },
        {
            flavour: 'Kinder Bueno',
            id: 'kinder-bueno'
        },
        {
            flavour: 'Reeses buttercup',
            id: 'reeses-buttercup'
        },
        {
            flavour: 'Snickers',
            id: 'snickers'
        },
        {
            flavour: 'Mars',
            id: 'mars'
        },
        {
            flavour: 'Strawberry',
            id: 'strawberry'
        },
        {
            flavour: 'Chocolate',
            id: 'chocolate'
        },
        {
            flavour: 'Banana',
            id: 'banana'
        },
        {
            flavour: 'Bounty',
            id: 'bounty'
        }
    ],
    smoothies: [
        {
            flavour: 'Surprise',
            smoothieDesc: 'Pineapple, Mango & Pear',
            id: 'surprise'
        },
        {
            flavour: 'Delight',
            smoothieDesc: 'Strawberry, Banana & Peach',
            id: 'delight'
        },
        {
            flavour: 'Bliss',
            smoothieDesc: 'Wild Blueberry, Raspberry, Mango & Papaya',
            id: 'bliss'
        },
        {
            flavour: 'Dream',
            smoothieDesc: 'Raspberry, Mango, Papaya & Grape',
            id: 'dream'
        },
        {
            flavour: 'Squeeze',
            smoothieDesc: 'Cranberry, Pineapple, Mandarin & Grape',
            id: 'squeeze'
        },
        {
            flavour: 'Refresher',
            smoothieDesc: 'Strawberry, Sour Cherry & Grape',
            id: 'refresher'
        }
    ],
    desserts: [
        {
            flavour: 'Chocolate and Hazelnut Tiramisu',
            id: 'tiramisu'
        }
    ]

}

export default MenuData