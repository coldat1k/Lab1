let restaurantIdCounter = 1;
let tableIdCounter = 1;
let employeeIdCounter = 1;
let customerIdCounter = 1;
let bookingIdCounter = 1;

class Restaurant {
    constructor(name, address) {
        this.restaurantId = restaurantIdCounter++;
        this.name = name;
        this.address = address;
        this.tables = [];
        this.employees = [];
    }

    addTable(table) {
        if (table instanceof Table) {
            this.tables.push(table);
            console.log(`Table #${table.tableNumber} added to restaurant '${this.name}'.`);
        } else {
            console.error("Error: Can only add instances of Table.");
        }
    }

    hireEmployee(employee) {
        if (employee instanceof Employee) {
            this.employees.push(employee);
            console.log(`Employee '${employee.name}' hired at restaurant '${this.name}'.`);
        } else {
            console.error("Error: Can only hire instances of Employee.");
        }
    }
}

class Table {
    constructor(tableNumber, capacity) {
        this.tableId = tableIdCounter++;
        this.tableNumber = tableNumber;
        this.capacity = capacity;
    }
}

class Employee {
    constructor(name, position) {
        this.employeeId = employeeIdCounter++;
        this.name = name;
        this.position = position;
    }
}

class Customer {
    constructor(fullName, email, phone) {
        this.customerId = customerIdCounter++;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.bookings = [];
    }

    addBooking(booking) {
        if (booking instanceof Booking) {
            this.bookings.push(booking);
        } else {
            console.error("Error: Can only add instances of Booking.");
        }
    }
}

class Booking {
    constructor(customer, table, employee, dateTime, numberOfGuests, comment = '') {
        if (!customer || !table || !employee) {
            throw new Error('Booking requires a customer, a table, and an employee!');
        }
        this.bookingId = bookingIdCounter++;
        this.dateTime = dateTime;
        this.numberOfGuests = numberOfGuests;
        this.comment = comment;
        this.status = 'confirmed';

        this.customerId = customer.customerId;
        this.tableId = table.tableId;
        this.employeeId = employee.employeeId;
    }
}


console.log('--- СТВОРЕННЯ РЕСТОРАНУ, СТОЛІВ ТА ПЕРСОНАЛУ ---');
const fineRestaurant = new Restaurant('VATRA Restaurant', 'вул. Архітектора Городецького, 4Б');

const table1 = new Table(1, 4); 
const table2 = new Table(2, 2); 
const table3 = new Table(3, 6); 

fineRestaurant.addTable(table1);
fineRestaurant.addTable(table2);
fineRestaurant.addTable(table3);

const employeeYurii = new Employee('Юрій', 'Офіціант');
const employeeMaksym = new Employee('Максим', 'Адміністратор');

fineRestaurant.hireEmployee(employeeYurii);
fineRestaurant.hireEmployee(employeeMaksym);

console.log('\n--- РЕЄСТРАЦІЯ КЛІЄНТІВ ---');
const customerIvan = new Customer('Іван Мельник', 'ivan@example.com', '050-123-45-67');
const customerMaria = new Customer('Марія Шевченко', 'maria@example.com', '097-987-65-43');
console.log('Registered customers:', customerIvan, customerMaria);

console.log('\n--- СТВОРЕННЯ БРОНЮВАНЬ ---');
const booking1 = new Booking(
    customerIvan, 
    table1,
    employeeYurii,
    new Date('2025-10-15T19:00:00'), 
    4,
    'Бажано біля вікна'
);
customerIvan.addBooking(booking1);

const booking2 = new Booking(
    customerMaria, 
    table2,
    employeeMaksym,
    new Date('2025-10-15T20:30:00'), 
    2
);
customerMaria.addBooking(booking2);

console.log('Created bookings:', booking1, booking2);

console.log('\n--- ПІДСУМКОВІ ДАНІ ---');
console.log('\nДАНІ РЕСТОРАНУ:');
console.log(fineRestaurant);

console.log('\nДАНІ КЛІЄНТА "ІВАН" ТА ЙОГО БРОНЮВАННЯ:');
console.log(customerIvan);

console.log('\nДАНІ КЛІЄНТА "МАРІЯ" ТА ЇЇ БРОНЮВАННЯ:');
console.log(customerMaria);