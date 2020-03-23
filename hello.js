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

const sort_properties_solution = properties => {
  let output = [];
  for (let property of properties) {
    let city_index = output
      .map(x => x[0].address.city)
      .indexOf(property.address.city);
    if (city_index != -1) output[city_index].push(property);
    // if output has a sub-array with this city, push it to the sub-array
    else {
      // else, push a new sub-array and then push this property
      output.push([]);
      output[output.length - 1].push(property);
    }
  }
  return output;
};
