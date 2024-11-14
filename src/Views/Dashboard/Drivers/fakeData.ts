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
