export const foodDataMap = {
    "margherita-pizza": {
        id: "margherita-pizza",
        name: "Margherita Pizza",
        basePrice: 12.99,
        description: "Classic Italian pizza with fresh tomatoes, mozzarella, and basil",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAMKDzDpLxMT2hshJ3bB5AE71-40lUMSNejdQf5AyTZai0A4sBM4aU9Yd5BmD6qGr1uJj8wVJQgqGzoES9b-lMX4dL2LuKApQRLAYMJhRcngoQbNcODJpcQj4D6JnNGJK8DisSqj_zkSII0E3SlUiIi49QELktjFUC93r1xMF-tZL-msPrUHZ0oiQqZQiroincWFBGJM9HCRw1Ad6FKh3agSU4_5vzIgJrXItstMpN8cmjB9xrvbnb5rBv-OHl7VD2QisjbFA3lVq0",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDJHlJbul42TQohE6-fM-3ezbNxUDFBqx4LjArY-Q_M8hdaEaXO-2nEKm1N_Q6xjKUIv0fftMpevAxke7-YgNZ4q1k5fPg6Amexl7JBQ65pzKo2sGKVTX5-mMbB8emTuci5KFwiKKWOC2Dc8FkdbE0rfVr-g4d27WVMDJsuKad2JFNrGWp29ZAj5PNGA928RuZ4yeb6Hg8ZwIw_EqprlZOVc6ejmn83DAF5MbFjUWMqBDrIapvzH8oc8cjytXdE0iUWIDK7gQtAQSw"
        ],
        portions: [
            { value: "regular", label: "Regular", multiplier: 1 },
            { value: "large", label: "Large", multiplier: 1.5 },
            { value: "small", label: "Small", multiplier: 0.8 }
        ],
        ingredients: ["Tomatoes", "Mozzarella", "Basil", "Olive Oil"],
        preparation: "Hand-tossed pizza dough topped with San Marzano tomatoes, fresh mozzarella, and basil",
        allergens: ["Milk", "Gluten"],
        tasteProfile: ["Fresh", "Savory"]
    },
    "classic-burger": {
        id: "classic-burger",
        name: "Classic Burger",
        basePrice: 9.99,
        description: "Juicy beef patty with fresh vegetables and special sauce",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDJHlJbul42TQohE6-fM-3ezbNxUDFBqx4LjArY-Q_M8hdaEaXO-2nEKm1N_Q6xjKUIv0fftMpevAxke7-YgNZ4q1k5fPg6Amexl7JBQ65pzKo2sGKVTX5-mMbB8emTuci5KFwiKKWOC2Dc8FkdbE0rfVr-g4d27WVMDJsuKad2JFNrGWp29ZAj5PNGA928RuZ4yeb6Hg8ZwIw_EqprlZOVc6ejmn83DAF5MbFjUWMqBDrIapvzH8oc8cjytXdE0iUWIDK7gQtAQSw"
        ],
        portions: [
            { value: "single", label: "Single", multiplier: 1 },
            { value: "double", label: "Double", multiplier: 1.8 }
        ],
        ingredients: ["Beef Patty", "Lettuce", "Tomato", "Onion", "Special Sauce"],
        preparation: "Grilled beef patty served with fresh vegetables on a toasted bun",
        allergens: ["Gluten", "Egg", "Soy"],
        tasteProfile: ["Savory", "Rich"]
    },
    "sushi-platter": {
        id: "sushi-platter",
        name: "Sushi Platter",
        basePrice: 15.99,
        description: "Assortment of fresh sushi rolls",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA5RCiHUANFtK2kjNNZEKoJbms4HWx6f1C5bWesE3G23nDlwzkYo_N1u0bGXJZRGo9N6dRNVJQLfC5nkDqDUo1r_kwmKZBPo_XlJc3xw3C2d75wE9mz-I3xfYXWlnkgLal0wGKDcGRnGmBeOJvpElhxN7HM-f8PcWFQFzv3NXFLaeT7m0aJ2aV11C_NUQlFLmQ3eJkmwidWckRKw30EpX7raRw5qoKflM0aHWSQ-CgxbNQ6aldPzTssj4Dv4Z24Ujw30KA7UjHZWrU"
        ],
        portions: [
            { value: "regular", label: "Regular (8 pcs)", multiplier: 1 },
            { value: "large", label: "Large (12 pcs)", multiplier: 1.5 },
            { value: "party", label: "Party (24 pcs)", multiplier: 2.8 }
        ],
        ingredients: ["Fresh Fish", "Rice", "Nori", "Vegetables"],
        preparation: "Freshly prepared sushi rolls with premium ingredients",
        allergens: ["Fish", "Shellfish", "Soy"],
        tasteProfile: ["Fresh", "Umami"]
    },
    "caesar-salad": {
        id: "caesar-salad",
        name: "Caesar Salad",
        basePrice: 8.99,
        description: "Crisp romaine lettuce with traditional Caesar dressing, croutons, and parmesan cheese",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCcYinT_tNxQAjMhG89jTWvmaaS95_Qiz8yq5if5QxzxUqPo9X5bo3nh2SP5oDJb3rKMK0nWxqF8W9GZBF3mi_cL_dp2_QfEgytF4sBdmSpT8X2UHElLexOFyWNwdtT8_ZY_mcWdt9Qw4YysloijyObe-JjhWd_BUoZgYV5rTJ2glapCJTQu4HQq2-dZwMmDxCi4HNQT7SeMy1pUo7XJDGb2-9Vphz1SJzO8c2C-GkWyYAyPAeOgMvgyas5bOVrtAuAeqP3FRGLkoA"
        ],
        portions: [
            { value: "regular", label: "Regular", multiplier: 1 },
            { value: "large", label: "Large", multiplier: 1.5 }
        ],
        ingredients: ["Romaine Lettuce", "Caesar Dressing", "Croutons", "Parmesan", "Black Pepper"],
        preparation: "Fresh romaine lettuce tossed with our house-made Caesar dressing, topped with crunchy croutons and shaved parmesan",
        allergens: ["Dairy", "Gluten", "Egg"],
        tasteProfile: ["Creamy", "Savory"]
    },

    "spaghetti-carbonara": {
        id: "spaghetti-carbonara",
        name: "Spaghetti Carbonara",
        basePrice: 14.99,
        description: "Classic Italian pasta with crispy pancetta in a creamy egg sauce",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD1mK07vui-VxPEsbcURcnET0EIzR_kFpV6Nq5dPwKxFHKgnvgX1wFQouqfvobXEpvVCMLMkGWxhv0LSzmCwBAvZpYLsHq7zi1TYiGprqoGzUDT2ZpcqGn1hKUF3GgDv-SQUrwINJ2hrFOT4Wt8pa5HLHaqgIK7CbQLdSO_HqwUaCkHcyDprNzTwm80hhyrNEBTkz5co2RetUD_7zJDahHUchCEcVI6U1dn4cckjXQkCd6w50WCf01D1pWqRac0RzbHJPc7Oc8H8bA"
        ],
        portions: [
            { value: "regular", label: "Regular", multiplier: 1 },
            { value: "large", label: "Large", multiplier: 1.5 },
            { value: "small", label: "Small", multiplier: 0.8 }
        ],
        ingredients: ["Spaghetti", "Pancetta", "Eggs", "Pecorino Romano", "Black Pepper"],
        preparation: "Al dente spaghetti tossed with crispy pancetta and a creamy sauce made from eggs and cheese",
        allergens: ["Gluten", "Egg", "Dairy"],
        tasteProfile: ["Rich", "Creamy", "Savory"]
    },

    "grilled-steak": {
        id: "grilled-steak",
        name: "Grilled Steak",
        basePrice: 19.99,
        description: "Premium cut steak grilled to perfection with seasonal vegetables",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAVplIk3hX6YA2XsCDfVrB-jg3BUiXgoEM25Wls_eOzZ-1Ozbj7GVkddfJ_jBHWd6z-LsqozXHlgpfEynusfZxmxP7OxJNRoiDn8Irq8p-567vKiTnD2QICbCMwKeZoi0tiADcrWW6OovBt8MXDzIzH7vj4_YkmiL9GFzTVFndv6MM2UDnCSMQ8pqIq0T8rKNVYXLkflkdoTP49T6SwGUB46Pca4emMBllFr1jY3IN_7Y001W9u8WA1GladEzAdCXEHuoW0epn-QvM"
        ],
        portions: [
            { value: "regular", label: "8 oz", multiplier: 1 },
            { value: "large", label: "12 oz", multiplier: 1.4 }
        ],
        ingredients: ["Premium Beef", "Seasonal Vegetables", "Herb Butter", "Sea Salt", "Black Pepper"],
        preparation: "Premium cut steak seasoned and grilled to your preference, served with seasonal vegetables",
        allergens: ["Dairy"],
        tasteProfile: ["Savory", "Rich", "Smoky"]
    }
};