module.exports = () => {
  const data = {
    users: []
  }

  for(let i = 0; i < 50; i++) {
    data.users.push(
      {
        id: i + 1,
        password: "OKA4Mz3EvV",
        first_name: `Eduardo ${i}`,
        last_name: "Lueilwitz",
        email: "eduardosooares456@hotmail.com",
        avatar: "https://robohash.org/velsapientesit.png?size=300x300&set=set1",
        phone_number: "+254 (785) 309-5896",
        order: [
          {
            number: i + 1,
            quantity: 10,
            reference_number: "XSF5E22",
            price_unit: 500,
            toxic: false
          },
          {
            number: i + 2,
            quantity: 10,
            reference_number: "XSF5E22",
            price_unit: 600,
            toxic: false
          }
        ]
      }
    )
  }

  return data;

}