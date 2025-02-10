# Nutri-scan

QR-based app that scans food QR codes to provide instant calorie and nutritional information, helping users track their dietary intake and make informed food choices.

## Key Features

1. *QR Code Scanning*  
   - Scan QR codes to fetch dish details, including constituent items and their quantities.

2. *Dynamic Calorie Calculation*  
   - Retrieve calorie data for each item from the database.  
   - Automatically update calorie totals as users modify item quantities.  

3. *Inventory Management APIs*  
   - Add, update, delete dishes and constituent items using CRUD APIs.  

4. *Interactive Frontend*  
   - View dish details and calorie breakdown.  
   - Real-time updates to calorie totals based on user input.  

5. *Technologies Used*  
   - *Frontend:* React.js with react-qr-reader for QR code scanning.  
   - *Backend:* Node.js with Express.js.  
   - *Database:* MongoDB for managing dish and item data.

---

## Application Flow

1. *Scan a QR Code*  
   The user scans a QR code containing dish details (e.g., dishName and items array).  

2. *Fetch Calorie Data*  
   The backend retrieves calorie values for each item from the MongoDB database.  

3. *Display Calorie Breakdown*  
   The frontend shows the calorie count for each item and the total calories for the dish.  

4. *User Interaction*  
   Users can increment/decrement item quantities, and the calorie totals update dynamically.  

5. *Manage Inventory*  
   Administrators can use the provided APIs to manage dish and item data.


# Setup instruction 

Use the code below to install dependencies
```jsx
npm install
```
