const properties = [
  {
    description: "toronto1",
    address: {
      street: "379 adelaide st w",
      city: "toronto"
    }
  },
  {
    description: "montreal1",
    address: {
      street: "10 yonge st",
      city: "montreal"
    }
  },
  {
    description: "toronto2",
    address: {
      street: "11 yonge st",
      city: "toronto"
    }
  },
  {
    description: "montreal2",
    address: {
      street: "12 yonge st",
      city: "montreal"
    }
  },
  {
    description: "toronto3",
    address: {
      street: "13 yonge st",
      city: "toronto"
    }
  },
  {
    description: "vancouver1",
    address: {
      street: "14 yonge st",
      city: "vancouver"
    }
  },
  {
    description: "toronto4",
    address: {
      street: "14 yonge st",
      city: "toronto"
    }
  }
];

const properties_output = [
  [
    {
      description: "toronto1",
      address: {
        street: "379 adelaide st w",
        city: "toronto"
      }
    },
    {
      description: "toronto2",
      address: {
        street: "11 yonge st",
        city: "toronto"
      }
    },
    {
      description: "toronto3",
      address: {
        street: "13 yonge st",
        city: "toronto"
      }
    },
    {
      description: "toronto4",
      address: {
        street: "14 yonge st",
        city: "toronto"
      }
    }
  ],
  [
    {
      description: "montreal1",
      address: {
        street: "10 yonge st",
        city: "montreal"
      }
    },
    {
      description: "montreal2",
      address: {
        street: "12 yonge st",
        city: "montreal"
      }
    }
  ],
  [
    {
      description: "vancouver1",
      address: {
        street: "14 yonge st",
        city: "vancouver"
      }
    }
  ]
];

const sort_properties = properties => {
  var cities = properties.map(property => {
    return property.address.city;
  });

  cities = cities.filter((a, b) => cities.indexOf(a) === b);

  var formattedCities = [];
  cities.forEach(city => {
    formattedCities[city] = properties.filter(property => {
      if (property.address.city == city) {
        return property;
      }
    });
  });

  console.log(formattedCities);
};

console.table(sort_properties(properties));
