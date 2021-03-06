/* eslint-disable camelcase */
var db = require("../models");

module.exports = function(app) {
  // Add New info to business table
  app.post("/api/business", (req, res) => {
    db.Business.create({
      businessName: req.body.businessName,
      businessPhone: req.body.businessPhone,
      businessAddress: req.body.businessAddress,
      openHourSunday: req.body.businessSundayHoursOpen,
      closeHourSunday: req.body.businessSundayHoursClose,
      openHourMonday: req.body.businessMondayHoursOpen,
      closeHourMonday: req.body.businessMondayHoursClose,
      openHourTuesday: req.body.businessTuesdayHoursOpen,
      closeHourTuesday: req.body.businessTuesdayHoursClose,
      openHourWednesday: req.body.businessWednesdayHoursOpen,
      closeHourWednesday: req.body.businessWednesdayHoursClose,
      openHourThursday: req.body.businessThursdayHoursOpen,
      closeHourThursday: req.body.businessThursdayHoursClose,
      openHourFriday: req.body.businessFridayHoursOpen,
      closeHourFriday: req.body.businessFridayHoursClose,
      openHourSaturday: req.body.businessSaturdayHoursOpen,
      closeHourSaturday: req.body.businessSaturdayHoursClose,
      specialSunday: req.body.specialSundayHours,
      specialMonday: req.body.specialMondayHours,
      specialTuesday: req.body.specialTuesdayHours,
      specialWednesday: req.body.specialWednesdayHours,
      specialThursday: req.body.specialThursdayHours,
      specialFriday: req.body.specialFridayHours,
      specialSaturday: req.body.specialSaturdayHours,
      UserId: req.user.id
    }).then(dbBusiness => {
      res.json(dbBusiness);
    });
  });

  app.get("/api/specials", (req, res) => {
    db.Specials.findAll({}).then(data => {});
  });

  // ------------- Delete a business -------------
  app.delete("/api/delete/:id", (req, res) => {
    db.Business.destroy({ where: { UserId: req.user.id } }).then(dbBusiness => {
      res.json(dbBusiness);
    });
  });

  // ----- Specials -----

  // Add specials
  app.post("/api/specials", (req, res) => {
    db.Special.create({
      sunday: req.body.businessSundayHours,
      monday: req.body.businessMondayHours,
      tuesday: req.body.businessTuesdayHours,
      wednesday: req.body.businessWednesdayHours,
      thursday: req.body.businessThrusdayHours,
      friday: req.body.businessFridayHours,
      saturday: req.body.businessSaturdayHours
    }).then(dbSpecials => {
      res.json(dbSpecials);
    });
  });

  // ------------- Update specials -------------
  app.put("/api/editSpecials", (req, res) => {
    db.Business.update(
      {
        specialSunday: req.body.sun,
        specialMonday: req.body.mon,
        specialTuesday: req.body.tue,
        specialWednesday: req.body.wed,
        specialThursday: req.body.thu,
        specialFriday: req.body.fri,
        specialSaturday: req.body.sat
      },
      {
        where: {
          UserId: req.user.id
        }
      }
    ).then(dbSpecials => {
      res.json(dbSpecials);
    });
  });
};
