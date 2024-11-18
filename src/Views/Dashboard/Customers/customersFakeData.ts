type Customers = {
  name: string;
  image: string;
  phone_number: string;
  email: string;
  gender: "male" | "female";
  date_of_birth: string;
  join_date: string;
};

export const customers: Customers[] = [
  {
    name: "John Doe",
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    phone_number: "+1234567890",
    email: "john.doe@example.com",
    gender: "male",
    date_of_birth: "1990-01-15",
    join_date: "2023-05-10",
  },
  {
    name: "Jane Smith",
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    phone_number: "+1234567891",
    email: "jane.smith@example.com",
    gender: "female",
    date_of_birth: "1992-03-22",
    join_date: "2023-06-14",
  },
  {
    name: "Robert Johnson",
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    phone_number: "+1234567892",
    email: "robert.johnson@example.com",
    gender: "male",
    date_of_birth: "1985-07-08",
    join_date: "2023-07-01",
  },
  {
    name: "Emily Davis",
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    phone_number: "+1234567893",
    email: "emily.davis@example.com",
    gender: "female",
    date_of_birth: "1995-11-18",
    join_date: "2023-07-20",
  },
  {
    name: "Michael Brown",
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    phone_number: "+1234567894",
    email: "michael.brown@example.com",
    gender: "male",
    date_of_birth: "1987-09-03",
    join_date: "2023-08-05",
  },
  {
    name: "Sarah Wilson",
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    phone_number: "+1234567895",
    email: "sarah.wilson@example.com",
    gender: "female",
    date_of_birth: "1998-12-29",
    join_date: "2023-08-25",
  },
  {
    name: "David Garcia",
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    phone_number: "+1234567896",
    email: "david.garcia@example.com",
    gender: "male",
    date_of_birth: "1983-06-12",
    join_date: "2023-09-12",
  },
  {
    name: "Laura Martinez",
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    phone_number: "+1234567897",
    email: "laura.martinez@example.com",
    gender: "female",
    date_of_birth: "1990-10-10",
    join_date: "2023-09-25",
  },
  {
    name: "James Anderson",
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    phone_number: "+1234567898",
    email: "james.anderson@example.com",
    gender: "male",
    date_of_birth: "1989-04-30",
    join_date: "2023-10-05",
  },
  {
    name: "Sophia Taylor",
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    phone_number: "+1234567899",
    email: "sophia.taylor@example.com",
    gender: "female",
    date_of_birth: "1993-08-17",
    join_date: "2023-10-20",
  },
];
