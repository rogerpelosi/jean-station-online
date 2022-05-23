### List of Microservices Identified 
- ProductService 
- CartService 
- OrderService
- UserAccountService 
- ServiceRegistry
- GatewayService
********************************* 
### ProductService 
#### Model
- Product - 1 
    - productId - 1: integer (Primary key)
    - title - 2: string (required, string-20)
    - desc - 3: type (required, max=100)
    - price - 4: float (required, 1.00-1000.00)

#### Endpoints 
- /api/v1/products - GET –- get all products 
- /api/v1/products/{productId} - GET –- get product by ID
- /api/v1/products - POST –- post new product  
- /api/v1/products/{productId} - DELETE –- delete product   
- /api/v1/products/{productId} - PUT –- edit product  
********************************* 
### CartService 
#### Models 
- Cart - 1 
    - cartId - 1: integer (Primary key)
    - userId - 2: integer (required)
    - products - 3: List(Product) (min 1)

- Product - 2 
    - product_id - 1: integer (Primary key)
    - title - 2: string (required, string-20)
    - desc - 3: type (required, max=100)
    - price - 4: float (required, 1.00-1000.00)

#### Endpoints 
- /api/v1/cart/{cartId} - GET –- get cart by id
- /api/v1/cart - POST –- create new cart 
- /api/v1/cart/{cartId} - DELETE –- delete a cart  
- /api/v1/cart/{cartId} - PUT –- edit cart   
********************************* 
### OrderService 
#### Models 
- Order - 1 
    - orderId - 1: integer (Primary key)
    - userId - 2: integer (required)
    - products - 3: List(Product)
    - deliveryAddress - 4: string (required, max=50)
    - status - 5: string (required, placed/shipped/delivered)

- Product - 2 
    - product_id - 1: integer (Primary key)
    - title - 2: string (required, string-20)
    - desc - 3: type (required, max=100)
    - price - 4: float (required, 1.00-1000.00)

#### Endpoints 
- /api/v1/orders - GET –- get orders  
- /api/v1/orders/{orderId} - GET –- get order 
- /api/v1/orders - POST –- create new order  
- /api/v1/orders/{orderId} - DELETE –- delete order   
- /api/v1/orders/{orderId} - PUT –- edit order    
********************************** 
### UserAccountService 
#### Model
- User - 1  
    - userId - 1: integer (Primary key)
    - username - 2: string (required, max=25)
    - password - 3: string (required, max=35)
    - email - 4: string (required, max=35)
    - role - 5: string (admin, user)

#### Endpoints 
- /api/v1/account/{userId} - GET –- get user account 
- /api/v1/account - POST –- create new account 
- /api/v1/account/{userId} - DELETE –- delete account   
- /api/v1/account/{userId} - PUT –- edit user account
********************************** 
### ServiceRegistry (TBA)
********************************* 
### GatewayService (TBA, will contain login/signup logic)
********************************* 
### User View Expectations (Customer)
#### Login/Signup
- customer will be able to login to their account or create a new one using forms/inputs
#### Browsing Products 
- customer will be able to browse the merchandise of store, with dialog box feature for further description
#### Adding Products to Cart
- customer will be able to use action buttons located on product card to then add to their cart 
#### 'Placing' an Order 
- customer will utilize inputs/forms to enter delivery address to create an order instance
********************************* 
### Employee View Expectations (Admin)
#### Product CRUD (partial)
- an employee will be able to post, edit, and delete products using inputs/forms and action buttons
#### Order CRUD (partial)
- an employee will be able to edit and delete orders using inputs/forms and action buttons

