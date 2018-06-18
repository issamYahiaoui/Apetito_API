const BinaryRoutes = require('./binary/binary.route');
const CartItemRoutes = require('./cartItem/cartItem.route');
const CategoryRoutes = require('./category/category.route');
const DishRoutes = require('./dish/dish.route');
const PositionRoutes = require('./position/position.route');
const ReservationRoutes = require('./reservation/reservation.route');
const RestaurantRoutes = require('./restaurant/restaurant.route');
const UserRoutes = require('./user/user.route');
const AuthRoutes = require('./auth/auth.route');



const apiV1Routes =  {
    BinaryRoutes,
    CartItemRoutes,
    CategoryRoutes,
    DishRoutes,
    PositionRoutes,
    ReservationRoutes,
    RestaurantRoutes,
    UserRoutes,
    AuthRoutes
};

module.exports = apiV1Routes