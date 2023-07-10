const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/data', (req, res) => {
  try {
    const data = req.body;
    const viettel = ["032", "033", "034", "035", "036", "037", "038", "039"];
    const mobi = ["070", "077", "079", "076", "078"];
    const vina = ["083", "084", "085", "081", "082"];
    const numberPhone = data.phone;
    const phoneNumberRegex = /^(0|\+84)\d{9,10}$/;
    const isValidPhoneNumber = phoneNumberRegex.test(numberPhone);
  
    if (isValidPhoneNumber) {
      const prefix = numberPhone.substring(0, 3); 
      if (viettel.includes(prefix)) {
        return res.status(200).json({ message: "Viettel" });
      } else if (mobi.includes(prefix)) {
        return res.status(200).json({ message: "Mobi" });
      } else if (vina.includes(prefix)) {
        return res.status(200).json({ message: "Vina" });
      } else {
        return res.status(404).json({ message: "phone number that do not belong to the above 3 carriers" });
      }
    } else {
      return res.status(404).json({ message: "number phone not found" });
    }
  }catch(err) {
    console.log(err);
    return res.status(500).json({ message: err})
  }
 
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
