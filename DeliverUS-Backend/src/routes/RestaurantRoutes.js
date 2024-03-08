import RestaurantController from '../controllers/RestaurantController.js'

const loadFileRoutes = function (app) {
  app.route('/restaurants') // the endpoint path
    .get(RestaurantController.index) // the function that will attend requests for that http verb and that path
    .post(RestaurantController.create)
  app.route('/restaurants/:restaurantId')
    .get(RestaurantController.show)
    .put(RestaurantController.update)
    .delete(RestaurantController.destroy)
}
export default loadFileRoutes
