import BookingModel from "../models/booking-model.js";

const createBooking = async (req, res) => {
  try {
    const newBooking = new BookingModel(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error', error: err.message });
    }
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }
    const deletedBooking = await BookingModel.findByIdAndDelete(id);
    if (!deletedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const findBookings = async (req, res) => {
  try {
    const { user } = req.params;
    const bookings = await BookingModel.find({user: user})
      .populate('user')
      .populate('car')
      .populate('city');

    if (bookings.length === 0) {
      return res.status(404).json({ message: `No bookings found to the user ${user}` });
    }
     // Formatear las fechas antes de enviarlas en la respuesta
     const formattedBookings = bookings.map(booking => ({
      ...booking._doc,
      dateIn: booking.dateIn.toISOString().split('T')[0],
      dateOut: booking.dateOut.toISOString().split('T')[0]
    }));
    res.status(200).json(formattedBookings);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export default {
    createBooking,
    deleteBooking,
    findBookings
};