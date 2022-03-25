const Event = require("../models/event");

const listEvents = (req, res) => {
  const { page = 0, perPage = 20, query } = req.query;

  Event.find(query && query !== "" ? { title: query } : {})
    .sort("date")
    .skip(page * perPage)
    .limit(perPage)
    .exec(function (err, data) {
      if (err) {
        return res.json({
          error: err,
          status: false,
          message: err?.message || "Something went wrong on our server.",
        });
      } else {
        res.json({ events: data, status: true });
      }
    });
};

const addEvent = (req, res) => {
  const { title, description, category, date, isVirtual, address } = req.body;

  let event = new Event({
    title,
    description,
    category,
    date,
    isVirtual,
    address,
  });

  event.save((err, response) => {
    if (err) {
      return res.json({
        error: err,
        status: false,
        message: err?.message || "Something went wrong on our server.",
      });
    }

    res.json({ event: response, status: true });
  });
};

module.exports = {
  addEvent,
  listEvents,
};
