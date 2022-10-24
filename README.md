# usa
 "build": "npx tsc",
        "dev": "npx tsc && nodemon build/index.js",
        "lint": "eslint **/**/*.ts ",
        "test": " npm run build && jasmine",
        "form": "prettier --write **/**/*.ts "
        
        url example for endpoints http://localhost:3000/api/images?filename=fjord&width=200&height=300
        resize and formated ared the functions
