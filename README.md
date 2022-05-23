### List of Microservices Identified 
- MicroService - 1
- MicroService - 2
- MicroService - n
- ServiceRegistry
- GatewayService
********************************* 
### Microservice - 1
#### Models 
- Model - 1 
    
    - Attribute - 1: type (Primary key)
    - Attribute - 2: type
    - Attribute - 3: type
    - Attribute - n: type
- Model - n 
    
    - Attribute - 1: type (Primary key)
    - Attribute - 2: type
    - Attribute - 3: type
    - Attribute - n: type
#### Endpoints 
- /api/v1/xxxx - GET/POST/DELETE/PUT –- <description of the resource operation exposed by this api>  
- /api/v1/xxxx - GET/POST/DELETE/PUT –- <description of the resource operation exposed by this api>  
********************************** 
### Microservice - n
#### Models 
- Model - 1 
    
    - Attribute - 1: type (Primary key)
    - Attribute - 2: type
    - Attribute - 3: type
    - Attribute - n: type
- Model - n 
    
    - Attribute - 1: type (Primary key)
    - Attribute - 2: type
    - Attribute - 3: type
    - Attribute - n: type
#### Endpoints 
- /api/v1/xxxx - GET/POST/DELETE/PUT –- <description of the resource operation exposed by this api>  
- /api/v1/xxxx - GET/POST/DELETE/PUT –- <description of the resource operation exposed by this api>  
********************************** 
## EXAMPLE:
## ===========  
### EquipmentService 
#### Models 
- Equipment 
   - equipment_id: int (auto-generated) Primary Key 
   - name: String (text, max_50, required) 
   - location: String (google map link, GPS coordinate, required) 
   - aging: int (range of 1 to 100, required) 
   - comment: String (text, max_1000, optional/nullable) 
 
#### Endpoints (APIs) 
- /api/v1/robospector/equipment - GET - Get all the resources 
- /api/v1/robospector/equipment- POST- Create equipment 
- /api/v1/robospector/equipment- PUT- Update an existing equipment 
- /api/v1/robospector/equipment- DELETE- Delete resource with equipment in requestbody 
************************************
