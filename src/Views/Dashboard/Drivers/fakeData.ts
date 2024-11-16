type driverType = {
  id: number;
  name: string;
  image?: string;
  phone_number: string;
  email: string;
  isOnline: boolean;
  active_status: boolean;
  shift_number: string | null;
  vehicle_type: string | null;
  join_date: string;
  evaluation: "good" | "bad" | "perfect";
};

export const drivers: driverType[] = [
  {
    id: 1,
    name: "John Doe",
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    phone_number: "+1234567890",
    email: "john.doe@example.com",
    vehicle_type: "Taxi",
    isOnline: true,
    active_status: true,
    shift_number: "1344",
    join_date: "2022-08-15",
    evaluation: "good",
  },
  {
    id: 1,
    name: "Jane Smith",
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    phone_number: "+1987654321",
    email: "jane.smith@example.com",
    isOnline: false,
    active_status: false,
    vehicle_type: null,
    shift_number: null,
    join_date: "2021-05-22",
    evaluation: "perfect",
  },
  {
    id: 1,
    name: "Alice Johnson",
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    phone_number: "+1230984567",
    email: "alice.johnson@example.com",
    isOnline: true,
    vehicle_type: "Bus",
    active_status: true,
    shift_number: "3234",
    join_date: "2023-01-10",
    evaluation: "bad",
  },
  {
    id: 1,
    name: "Bob Williams",
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    phone_number: "+4567891230",
    email: "bob.williams@example.com",
    isOnline: false,
    vehicle_type: null,
    active_status: true,
    shift_number: "4214",
    join_date: "2020-11-03",
    evaluation: "perfect",
  },
  {
    id: 1,
    name: "Sarah Brown",
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    phone_number: "+2345678901",
    email: "sarah.brown@example.com",
    vehicle_type: "Taxi",
    isOnline: true,
    active_status: false,
    shift_number: null,
    join_date: "2019-09-27",
    evaluation: "good",
  },
  {
    id: 1,
    name: "Tom Harris",
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    phone_number: "+1478523690",
    email: "tom.harris@example.com",
    vehicle_type: null,
    isOnline: false,
    active_status: true,
    shift_number: "2442",
    join_date: "2023-06-01",
    evaluation: "bad",
  },
  {
    id: 1,
    name: "Emma White",
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    phone_number: "+3692581470",
    email: "emma.white@example.com",
    isOnline: true,
    active_status: true,
    vehicle_type: "taxi",
    shift_number: "1235",
    join_date: "2022-02-17",
    evaluation: "perfect",
  },
  {
    id: 1,
    name: "Liam Green",
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    phone_number: "+2583691470",
    email: "liam.green@example.com",
    isOnline: false,
    vehicle_type: null,
    active_status: false,
    shift_number: null,
    join_date: "2021-12-19",
    evaluation: "good",
  },
  {
    id: 1,
    name: "Olivia Black",
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    phone_number: "+3691472580",
    email: "olivia.black@example.com",
    vehicle_type: "taxi",
    isOnline: true,
    active_status: true,
    shift_number: "1236",
    join_date: "2023-08-10",
    evaluation: "bad",
  },
  {
    id: 1,
    name: "Mason Gray",
    // image: "https://via.placeholder.com/150",
    phone_number: "+1470369528",
    email: "mason.gray@example.com",
    vehicle_type: null,
    isOnline: false,
    active_status: true,
    shift_number: "1233",
    join_date: "2020-03-23",
    evaluation: "good",
  },
];

type Driver = {
  name: string;
  gender: string;
  phone: string;
  email: string;
  join_date: string;
  location: string;
  evaulation: string;
  active: boolean;
  licenees: string;
  liceneesUrl?: string;
  degree: string;
  degreeUrl?: string;
};
export const driver: Driver = {
  name: "Ahmad ali Hussain",
  gender: "Male",
  phone: "+963937552480",
  email: "moaedadres22@gmail.com",
  join_date: "2024-11-11",
  location: "Damasucs/fhama",
  evaulation: "5",
  active: true,
  licenees: "moaed licenees.jpg",
  liceneesUrl:
    "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
  degree: "moaed degree.jpg",
  degreeUrl:
    "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
};

type Trip = {
  order_number: string;
  customer_name: string;
  vehicle_type: string;
  vehicle_number: string;
  source: string;
  destenation: string;
  status: "completed" | "canceld" | "active";
  evaluation: "0" | "1" | "2" | "3" | "4" | "5";
  price: string;
  date: string;
  shift_number: string;
};

export const trips: Trip[] = [
  {
    order_number: "ORD123456",
    customer_name: "John Doe",
    vehicle_type: "Sedan",
    vehicle_number: "AB1234XY",
    source: "New York",
    destenation: "Boston",
    status: "completed",
    evaluation: "5",
    price: "120.00",
    date: "2024-11-10",
    shift_number: "SHIFT001",
  },
  {
    order_number: "ORD654321",
    customer_name: "Jane Smith",
    vehicle_type: "SUV",
    vehicle_number: "CD5678YZ",
    source: "Los Angeles",
    destenation: "San Francisco",
    status: "active",
    evaluation: "0",
    price: "150.50",
    date: "2024-11-12",
    shift_number: "SHIFT002",
  },
  {
    order_number: "ORD112233",
    customer_name: "Michael Brown",
    vehicle_type: "Truck",
    vehicle_number: "EF9012WX",
    source: "Chicago",
    destenation: "Detroit",
    status: "canceld",
    evaluation: "0",
    price: "200.00",
    date: "2024-10-25",
    shift_number: "SHIFT003",
  },
  {
    order_number: "ORD445566",
    customer_name: "Emily Davis",
    vehicle_type: "Van",
    vehicle_number: "GH3456UV",
    source: "Houston",
    destenation: "Dallas",
    status: "completed",
    evaluation: "4",
    price: "90.00",
    date: "2024-11-05",
    shift_number: "SHIFT004",
  },
  {
    order_number: "ORD778899",
    customer_name: "Chris Wilson",
    vehicle_type: "Hatchback",
    vehicle_number: "IJ7890TU",
    source: "Miami",
    destenation: "Orlando",
    status: "completed",
    evaluation: "3",
    price: "75.00",
    date: "2024-11-08",
    shift_number: "SHIFT005",
  },
  {
    order_number: "ORD987654",
    customer_name: "Sarah Johnson",
    vehicle_type: "Sedan",
    vehicle_number: "KL0123RS",
    source: "Seattle",
    destenation: "Portland",
    status: "canceld",
    evaluation: "0",
    price: "100.00",
    date: "2024-11-02",
    shift_number: "SHIFT006",
  },
  {
    order_number: "ORD192837",
    customer_name: "David Martinez",
    vehicle_type: "SUV",
    vehicle_number: "MN4567QP",
    source: "Atlanta",
    destenation: "Charlotte",
    status: "active",
    evaluation: "0",
    price: "110.50",
    date: "2024-11-15",
    shift_number: "SHIFT007",
  },
  {
    order_number: "ORD564738",
    customer_name: "Anna Garcia",
    vehicle_type: "Truck",
    vehicle_number: "OP8910NM",
    source: "Denver",
    destenation: "Salt Lake City",
    status: "completed",
    evaluation: "5",
    price: "250.00",
    date: "2024-10-30",
    shift_number: "SHIFT008",
  },
  {
    order_number: "ORD374859",
    customer_name: "James Clark",
    vehicle_type: "Van",
    vehicle_number: "QR2345LK",
    source: "Phoenix",
    destenation: "Tucson",
    status: "active",
    evaluation: "0",
    price: "95.00",
    date: "2024-11-11",
    shift_number: "SHIFT009",
  },
  {
    order_number: "ORD485960",
    customer_name: "Olivia White",
    vehicle_type: "Hatchback",
    vehicle_number: "ST6789JH",
    source: "San Diego",
    destenation: "Las Vegas",
    status: "completed",
    evaluation: "2",
    price: "175.00",
    date: "2024-11-06",
    shift_number: "SHIFT010",
  },
];

type Shift = {
  shift_number: string;
  start_date: string;
  end_date: string;
  counter_at_the_start: string;
  counter_at_the_end: string;
  vehicle_type: string;
  volman: string;
};

export const shifts: Shift[] = [
  {
    shift_number: "001",
    start_date: "2024-11-16T08:00:00Z",
    end_date: "2024-11-16T16:00:00Z",
    counter_at_the_start: "10234",
    counter_at_the_end: "10324",
    vehicle_type: "Truck",
    volman: "John Doe",
  },
  {
    shift_number: "002",
    start_date: "2024-11-16T16:00:00Z",
    end_date: "2024-11-16T00:00:00Z",
    counter_at_the_start: "10324",
    counter_at_the_end: "10476",
    vehicle_type: "Van",
    volman: "Jane Smith",
  },
  {
    shift_number: "003",
    start_date: "2024-11-17T08:00:00Z",
    end_date: "2024-11-17T16:00:00Z",
    counter_at_the_start: "10476",
    counter_at_the_end: "10560",
    vehicle_type: "SUV",
    volman: "Mike Johnson",
  },
  {
    shift_number: "004",
    start_date: "2024-11-17T16:00:00Z",
    end_date: "2024-11-17T00:00:00Z",
    counter_at_the_start: "10560",
    counter_at_the_end: "10630",
    vehicle_type: "Car",
    volman: "Emily Davis",
  },
  {
    shift_number: "005",
    start_date: "2024-11-18T08:00:00Z",
    end_date: "2024-11-18T16:00:00Z",
    counter_at_the_start: "10630",
    counter_at_the_end: "10700",
    vehicle_type: "Truck",
    volman: "Chris Brown",
  },
  {
    shift_number: "006",
    start_date: "2024-11-18T16:00:00Z",
    end_date: "2024-11-18T00:00:00Z",
    counter_at_the_start: "10700",
    counter_at_the_end: "10785",
    vehicle_type: "Van",
    volman: "Laura Wilson",
  },
  {
    shift_number: "007",
    start_date: "2024-11-19T08:00:00Z",
    end_date: "2024-11-19T16:00:00Z",
    counter_at_the_start: "10785",
    counter_at_the_end: "10850",
    vehicle_type: "SUV",
    volman: "David Garcia",
  },
  {
    shift_number: "008",
    start_date: "2024-11-19T16:00:00Z",
    end_date: "2024-11-19T00:00:00Z",
    counter_at_the_start: "10850",
    counter_at_the_end: "10920",
    vehicle_type: "Car",
    volman: "Sophia Martinez",
  },
  {
    shift_number: "009",
    start_date: "2024-11-20T08:00:00Z",
    end_date: "2024-11-20T16:00:00Z",
    counter_at_the_start: "10920",
    counter_at_the_end: "10995",
    vehicle_type: "Truck",
    volman: "Daniel Taylor",
  },
  {
    shift_number: "010",
    start_date: "2024-11-20T16:00:00Z",
    end_date: "2024-11-20T00:00:00Z",
    counter_at_the_start: "10995",
    counter_at_the_end: "11080",
    vehicle_type: "Van",
    volman: "Olivia Moore",
  },
];
